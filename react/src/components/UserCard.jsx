// src/components/UserCard.jsx
import React from 'react';

function UserCard({ userData }) {
  return (
    <div className="user-card">
      <h2>{userData.squad}</h2>
      <p>{userData.tagline}</p>
      <ul>
        {userData.members.map((member, index) => (
          <li key={index}>
            <strong>Name:</strong> {member.name} <br />
            <strong>Email:</strong> {member.email} <br />
            <strong>Role:</strong> {member.role} <br />
            <strong>GitHub:</strong> {member.github}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
