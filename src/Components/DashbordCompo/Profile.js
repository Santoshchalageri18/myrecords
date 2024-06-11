import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    console.log('Changing password to:', newPassword);
  };

  return (
    <div className="profile-section" style={{ backgroundImage: `url('https://i.postimg.cc/qvLf4FCL/image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h2>User Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Password:</strong> {user.password}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Phone:</strong> {user.phone}</p>


        <button onClick={() => setShowChangePassword(!showChangePassword)}>Change Password</button>
        {showChangePassword && (
          <div>
            <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <button onClick={handleChangePassword}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
