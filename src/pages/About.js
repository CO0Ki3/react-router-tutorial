import React from "react";
import queryString from 'query-string';

const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  
  const detail = query.detail === 'true';

  // console.log(query.detail); ===> query.detail은 query 객체 안의 내용을 string 형태로 받아온다
  console.log(query);

  return (
    <div>
      <h2>About {match.params.test}</h2>
      {detail && 'detail: blahblah'}
    </div>
  );
};

export default About;