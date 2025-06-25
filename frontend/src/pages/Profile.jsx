import React from 'react';

const Profile = () => {
  // Hardcoded user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    createdAt: '2023-08-15',
    isAdmin: false,
    shippingAddress: '456 Shipping Lane, New York, NY 10002',
    billingAddress: '789 Billing Ave, New York, NY 10003',
    preferences: {
      newsletter: true,
      notifications: true
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>My Account</h1>
        <div className="profile-info">
          <div className="info-group">
            <label>Full Name</label>
            <p>{user.name}</p>
          </div>
          <div className="info-group">
            <label>Email Address</label>
            <p>{user.email}</p>
          </div>
          <div className="info-group">
            <label>Phone Number</label>
            <p>{user.phone}</p>
          </div>
          <div className="info-group">
            <label>Primary Address</label>
            <p>{user.address}</p>
          </div>
          <div className="info-group">
            <label>Shipping Address</label>
            <p>{user.shippingAddress}</p>
          </div>
          <div className="info-group">
            <label>Billing Address</label>
            <p>{user.billingAddress}</p>
          </div>
          <div className="info-group">
            <label>Member Since</label>
            <p>{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="info-group">
            <label>Account Type</label>
            <p>{user.isAdmin ? 'Administrator' : 'Customer'}</p>
          </div>
          <div className="info-group">
            <label>Communication Preferences</label>
            <p>
              Newsletter: {user.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}<br />
              Notifications: {user.preferences.notifications ? 'Enabled' : 'Disabled'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 