import React from "react";
import { Link } from 'react-router-dom';
import qs from "qs";

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

const User = ({ match, location }) => {
  const { userid } = match.params;
  const user = users[userid];
  const queryData = location.search;
  const queryDataQs = qs.parse(location.search, { ignoreQueryPrefix: true });
  console.log(queryDataQs);
  console.log(user.name);
  if (!user) return null;
  return (
    <div>
      <b>{user.name}</b> ({user.age}살)<br />
      <Link to="/users">Users</Link>
      {queryData && <p>queryData : {queryData}</p>}
    </div>
  );
};

export default User;
