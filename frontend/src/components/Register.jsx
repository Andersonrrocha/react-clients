import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon as Icons } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = ({closeModal, client}) => {
    console.log(client)
    const {register, handleSubmit, setValue} = useForm();
    const onSubmit = data => console.log(data);

    if(client) {
        setValue('name', client.name)
        setValue('email', client.email)
        setValue('cpf', client.cpf)
        setValue('phone', client.phone)
        setValue('address.zipcode', client.address.zipcode)
        setValue('address.street', client.address.street)
        setValue('address.number', client.address.number)
        setValue('address.neighborhood', client.address.neighborhood)
        setValue('address.city', client.address.city)
        setValue('address.state', client.address.state)
        setValue('address.country', client.address.country)
    }

    return (
        <section className="modal-content">
            <div className="modal-overlay">
            <button className="close-btn" onClick={closeModal}>
                <Icons icon={faTimes} size="lg" color="red"/>
            </button>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    className="form-control w-100" 
                    placeholder="Nome" 
                    {...register("name")}/>
                <input 
                    type="text" 
                    className="form-control w-50" 
                    placeholder="Email" 
                    {...register("email")}/>
                <input 
                    type="text" 
                    className="form-control w-50" 
                    style={{gridColumn:"3/4"}} 
                    placeholder="CPF" 
                    {...register("cpf")}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    style={{gridColumn:"4/5"}} 
                    placeholder="Telefone" 
                    {...register("phone")}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    placeholder="CEP" 
                    {...register("address.zipcode")}/>
                <input 
                    type="text" 
                    className="form-control" 
                    style={{gridColumn:"2/5"}} 
                    placeholder="Rua" 
                    {...register("address.street")}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    placeholder="Numero" 
                    {...register("address.number")}/>
                <input 
                    type="text" 
                    className="form-control" 
                    style={{gridColumn:"2/4"}} 
                    placeholder="Bairro" 
                    {...register("address.neighborhood")}/>
                <input 
                    type="text" 
                    className="form-control" 
                    style={{gridColumn:"4/5"}} 
                    placeholder="Cidade" 
                    {...register("address.city")}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    placeholder="Estado" 
                    {...register("address.state")}/>
                <input 
                    type="text" 
                    className="form-control w-25" 
                    style={{gridColumn:"2/3"}} 
                    placeholder="País" 
                    {...register("address.country")}/>
                <input type="submit" className="save-button" style={{gridColumn:"4"}}/>
            </form>
            </div>
        </section>
    )
}

export default Modal
