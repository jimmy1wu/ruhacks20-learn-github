import React from 'react';
import data from '../data/people.json';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <ul>
        {data.people.map(p => (
          <li>{p}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
