import React from 'react';

const users = {
  co0ki3: {
    name: "독고현",
    age: 21,
  },
  kenn3n: {
    name: "김지찬",
    age: 21,
  },
  eka: {
    name: "나인채",
    age: 21,
  },
};

const Users = ({ match }) => {
  const { userid } = match.params;
  const user = users[userid];
  console.log(user.name);
  if (!user) return null;
  return (
    <div>
      <b>{user.name}</b> ({user.age}살)
    </div>
  );
};

export default Users;