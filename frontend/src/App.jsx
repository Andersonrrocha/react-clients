import React, {useState} from 'react';
import './App.scss';
import {ApolloProvider} from '@apollo/client'
import client from './services/apolloService'

import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';

const App = () => {
  return (
	<ApolloProvider client={client}>
		<Header />
			<section className="container">
				<Table></Table>
			</section>
		<Footer />
	</ApolloProvider>
  );
}

export default App;
