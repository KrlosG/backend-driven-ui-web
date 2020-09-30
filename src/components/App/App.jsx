import React from 'react';
import { useQuery } from 'react-apollo';

import Layout from '../Layout/Layout';
import ActionCard from '../ActionCard/ActionCard';
import GridCard from '../GridCard/GridCard';
import AdvertisementCard from '../AdvertisementCard/AdvertisementCard';
import BasicCard from '../BasicCard/BasicCard';
import { allItemsQuery } from './queries.js';
import './App.scss';

const Cards = {
  ActionCard,
  GridCard,
  AdvertisementCard,
  BasicCard,
};

function App() {
  const { loading, data } = useQuery(allItemsQuery, {
    fetchPolicy: 'no-cache',
  });

  return (
    <Layout>
      {loading ? (
        <div>loading...</div>
      ) : (
        <React.Fragment>
          <div className="itemRow">
            {data.featuredItems.map((item, i) => {
              const Card = Cards[item.component];
              return <Card key={i} {...item.data} />;
            })}
          </div>
          <div className="itemRow">
            {data.discountedItems.map((item, i) => {
              const Card = Cards[item.component];
              return <Card key={i} {...item.data} />;
            })}
          </div>
          <div className="itemRow">
            {data.recommendedForYouItems.map((item, i) => {
              const Card = Cards[item.component];
              return <Card key={i} {...item.data} />;
            })}
          </div>
        </React.Fragment>
      )}
    </Layout>
  );
}

export default App;
