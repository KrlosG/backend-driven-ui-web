import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App/App';
import './global.scss';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});
const root = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(root, document.getElementById('root'));
