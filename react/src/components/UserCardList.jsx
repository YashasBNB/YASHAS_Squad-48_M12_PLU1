import React from 'react';
import UserCard from './UserCard';

function UserCardList({ squads }) {
  return (
    <div className="user-card-list">
      {squads.map((squad, index) => (
        <UserCard key={index} userData={squad} />
      ))}
    </div>
  );
}

export default UserCardList;
