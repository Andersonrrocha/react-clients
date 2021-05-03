import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS_QUERY, USERS_SUBSCRIBE } from '../graphQL/Queries';
import { DELETE_USER_MUTATION } from '../graphQL/Mutations';
import { FontAwesomeIcon as Icons } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Table = ({openModal}) => {
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
        return (<div>Loading...</div>)
    }

    if(data) {
        users = data.users
    }

    const updateUser = () => {

    }

    return (
        <div className="table">
            <h1></h1>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Data Cadastro</th>
                        <th>Data Atualização</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.cpf}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.updatedAt}</td>
                            <td className="icons">
                                <Icons icon={faPen} onClick={() => openModal(user)}/>
                                <span>-</span>
                                <Icons icon={faTrash} onClick={() => deleteUser({variables:{id: user._id}})}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table
