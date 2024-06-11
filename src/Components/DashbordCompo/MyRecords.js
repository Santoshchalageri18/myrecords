import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { withRouter } from '../../utils'; // Assuming withRouter is a higher-order component to handle routing

class MyRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchRecords();
  }

  fetchRecords = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        swal({
          text: 'You are not logged in. Please log in first.',
          icon: 'warning',
        });
        this.props.history.push('/login'); // Redirect to login page
        return;
      }

      const response = await axios.get('http://localhost:2000/get-records', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({
        records: response.data.records,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching records:', error);
      swal({
        text: 'Error fetching records. Please try again later.',
        icon: 'error',
      });
      this.setState({ loading: false });
    }
  };

  render() {
    const { records, loading } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h1>My Records</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {records.length > 0 ? (
              <ul>
                {records.map((record, index) => (
                  <li key={index}>{record.filename}</li>
                ))}
              </ul>
            ) : (
              <p>No records found.</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(MyRecords);
