import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Modal = ({closeModal, client}) => {
    console.log(client)
    const {register, handleSubmit, setValue} = useForm();
    const onSubmit = data => console.log(data);

    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
    setValue('client', client.name)
 



    return (
        <section className="modal-content">
            <div className="modal-overlay">
            <button className="close-btn" onClick={closeModal}>X</button>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    className="form-control w-100" 
                    placeholder="Nome" 
                    {...register("client.name")}/>
                <input 
                    type="text" 
                    className="form-control w-50" 
                    placeholder="Email" 
                    {...register("client.email")}/>
                <input 
                    type="text" 
                    className="form-control w-50" 
                    style={{gridColumn:"3/4"}} 
                    placeholder="CPF" 
                    {...register("cpf")}/>
                {/* <input 
                    type="text" 
                    className="form-control w-25" 
                    style={{gridColumn:"4/5"}} 
                    placeholder="Telefone" 
                    value={newClient.phone} 
                    onChange={(e) => setNewClient({...newClient,phone: e.target.value})}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    placeholder="CEP" 
                    value={newClient.address.zipcode} 
                    onChange={(e) => setNewClient({...newClient, address:{...newClient.address, zipcode: e.target.value}})}/>
                <input 
                    type="text" 
                    className="form-control" 
                    style={{gridColumn:"2/5"}} 
                    placeholder="Rua" 
                    value={newClient.address.street} 
                    onChange={(e) => setNewClient({...newClient,address:{...newClient.address, street: e.target.value}})}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    placeholder="Numero" 
                    value={newClient.address.number} 
                    onChange={(e) => setNewClient({...newClient,address:{...newClient.address, number: e.target.value}})}/>
                <input 
                    type="text" 
                    className="form-control" 
                    style={{gridColumn:"2/4"}} 
                    placeholder="Bairro" 
                    value={newClient.address.neighborhood} 
                    onChange={(e) => setNewClient({...newClient,address:{...newClient.address, neighborhood: e.target.value}})}/>
                <input 
                    type="text" 
                    className="form-control" 
                    style={{gridColumn:"4/5"}} 
                    placeholder="Cidade" 
                    value={newClient.address.city} 
                    onChange={(e) => setNewClient({...newClient,address:{...newClient.address, city: e.target.value}})}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    placeholder="Estado" 
                    value={newClient.address.state} 
                    onChange={(e) => setNewClient({...newClient,address:{...newClient.address, state: e.target.value}})}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    style={{gridColumn:"2/3"}} 
                    placeholder="País" 
                    value={newClient.address.country} 
                    onChange={(e) => setNewClient({...newClient,address:{...newClient.address, country: e.target.value}})}/> */}
                <input type="submit" className="save-button" style={{gridColumn:"4"}}/>
            </form>
            </div>
        </section>
    )
}

export default Modal
