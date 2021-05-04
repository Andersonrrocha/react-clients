import React, {useState} from 'react';
import './App.scss';
import {ApolloProvider} from '@apollo/client'
import client from '../services/apolloService'
import Modal from 'react-modal'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import Register from '../components/Register'
import Details from '../components/Details'

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
	const [modalDetailsIsOpen, setmodalDetailsIsOpen] = useState(false)
	const [modalContent, setModalContent] = useState()

	const openModal = (client) => {
		setModalIsOpen(true);
		setModalContent(client ? client : false)
	}

	const openModalDetails = (client) => {
		setmodalDetailsIsOpen(true)
		setModalContent(client)
		
	}

	const closeModal = () => {
		setModalIsOpen(false)
		setmodalDetailsIsOpen(false)
		setModalContent(false)
	}

  return (
	<ApolloProvider client={client}>
		<Header />
			<section className="container">
				<div className="button-holder">
					<button className="register" onClick={() => openModal()}>Cadastrar Cliente</button>
				</div>
				<Table openModal={openModal} openModalDetails={openModalDetails}></Table>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}>
					<Register client={modalContent} closeModal={closeModal}></Register>
				</Modal>
				<Modal
					isOpen={modalDetailsIsOpen}
					onRequestClose={closeModal}
					style={customStyles}>
					<Details client={modalContent} closeModal={closeModal}></Details>
				</Modal>
			</section>
		<Footer />
	</ApolloProvider>
  );
}

export default App;
