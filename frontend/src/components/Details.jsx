import React, { useState } from 'react'
import { FontAwesomeIcon as Icons } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Details = ({closeModal, client}) => {

    return (
        <section className="modal-content details">
            <div className="modal-overlay ">
                <button className="close-btn" onClick={closeModal}>
                    <Icons icon={faTimes} size="lg" color="red"/>
                </button>
                {client ? <div>
                    <label>Nome:</label>
                    <input type="text" className="form-control detail-input" value={client.name}/>
                    <label>Email:</label>
                    <input type="text" className="form-control detail-input" value={client.cpf}/>
                    <label>CPF:</label>
                    <input type="text" className="form-control detail-input" value={client.email}/>
                    <label>Telefone:</label>
                    <input type="text" className="form-control detail-input" value={client.phone}/>
                    <label>CEP:</label>
                    <input type="text" className="form-control detail-input" value={client.address.zipcode}/>
                    <label>Rua:</label>
                    <input type="text" className="form-control detail-input" value={client.address.street}/>
                    <label>Numero:</label>
                    <input type="text" className="form-control detail-input" value={client.address.neighborhood}/>
                    <label>Cidade:</label>
                    <input type="text" className="form-control detail-input" value={client.address.city}/>
                    <label>Estado:</label>
                    <input type="text" className="form-control detail-input" value={client.address.state}/>
                    <label>País:</label>
                    <input type="text" className="form-control detail-input" value={client.address.country}/>
                </div> : ''}
            </div>
        </section>
    )
}

export default Details