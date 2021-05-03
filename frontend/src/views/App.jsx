import React, {useState} from 'react';
import './App.scss';
import {ApolloProvider} from '@apollo/client'
import client from '../services/apolloService'
import Modal from 'react-modal'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import Register from '../components/Register'


Modal.setAppElement('body');

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
	marginRight           : '-50%',
	transform             : 'translate(-50%, -50%)',
	padding               : '0'             
}
}
const App = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState()

	const openModal = (client) => {
		setModalIsOpen(true);
		setModalContent(client ? client : false)
	}

	const closeModal = () => {
		setModalIsOpen(false);
	}

  return (
	<ApolloProvider client={client}>
		<Header />
			<section className="container">
				<div className="button-holder">
					<button className="register" onClick={() => openModal()}>Cadastrar Cliente</button>
				</div>
				<Table openModal={openModal}></Table>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}>
					<Register client={modalContent} closeModal={closeModal}></Register>
				</Modal>
			</section>
		<Footer />
	</ApolloProvider>
  );
}

export default App;
