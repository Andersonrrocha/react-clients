import {gql} from '@apollo/client'

export const GET_USER_QUERY = gql`
    query($id:ID!) {
        user(id:$id) {
            _id
            name
            cpf
            email
            phone
            address{
                zipcode
                street
                number
                neighborhood
                city
                state
                country
            }
            createdAt
            updatedAt
        }
    }
`;

export const GET_ALL_USERS_QUERY = gql`
    query users{
        users {
            _id
            name
            cpf
            email
            phone
            address{
                zipcode
                street
                number
                neighborhood
                city
                state
                country
            }
            createdAt
            updatedAt
        }
    }
`;

export const USERS_SUBSCRIBE = gql`
    subscription{
        users {
            _id
            name
            cpf
            email
            phone
            address{
                street
                number
                city
            }
            createdAt
            updatedAt
        }
    }
`;