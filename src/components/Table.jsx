import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS_QUERY, USERS_SUBSCRIBE } from '../graphQL/Queries';
import { DELETE_USER_MUTATION } from '../graphQL/Mutations';
import { FontAwesomeIcon as Icons } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import loadingGif from '../utils/loading.gif'

const Table = ({openModal, openModalDetails, isAbsolute}) => {
    let users = [];
    // const getUsers = useQuery(GET_ALL_USERS_QUERY);
    const  { loading, error, data, subscribeToMore } = useQuery(GET_ALL_USERS_QUERY);
    subscribeToMore({
        document: USERS_SUBSCRIBE,
        updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
            return subscriptionData.data
        }
    });
    const [deleteUser] = useMutation(DELETE_USER_MUTATION)

    if(loading) {
        return (<div className="loading"><img src={loadingGif}/></div>)
    }

    if(data) {
        users = data.users
    }

    return (
        <div className="table">
            <table className={isAbsolute ? 'content-table absolute' :'content-table'}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th className="d-none-m">CPF</th>
                        <th className="d-none-m">Email</th>
                        <th className="d-none-m">Telefone</th>
                        <th>Cadastro</th>
                        <th>Atualização</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td className="d-none-m">{user.cpf}</td>
                            <td className="d-none-m">{user.email}</td>
                            <td className="d-none-m">{user.phone}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                            <td>{new Date(user.updatedAt).toLocaleDateString()}</td>
                            <td className="icons">
                                <Icons className="details" color="#035685" icon={faEye} onClick={() => openModalDetails(user)}/>
                                <span className="details">-</span>
                                <Icons icon={faPen} color="#035685" onClick={() => openModal(user)}/>
                                <span>-</span>
                                <Icons icon={faTrash} color="#035685" onClick={() => deleteUser({variables:{id: user._id}})}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
