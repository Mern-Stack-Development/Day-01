import React from 'react';

function UserProfile(props) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p> Your Name: {props.name}</p>
      <p>Your Age: {props.age}</p>
      <p>Your Email: {props.email}</p>
    </div>
  );
}
export default UserProfile;

