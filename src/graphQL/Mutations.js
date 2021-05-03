import {gql} from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
mutation($name:String!,$cpf:String!,$email:String!,$phone:String!,$zipcode:String!,$street:String!,
            $number:String!,$neighborhood:String!,$city:String!,$state:String!,$country:String!){
    createUser(
        user: {
            name: $name
            cpf: $cpf
            email: $email
            phone: $phone
            address: {
                zipcode: $zipcode
                street: $street
                number: $number
                neighborhood: $neighborhood
                city: $city
                state: $state
                country: $country
            }
        }
    ) {
    name
  }
}
`;

export const UPDATE_USER_MUTATION = gql`
mutation($_id:ID!,$name:String!,$cpf:String!,$email:String!,$phone:String!,$zipcode:String!,$street:String!,
            $number:String!,$neighborhood:String!,$city:String!,$state:String!,$country:String!){
    updateUser(
        user: {
            _id:$_id
            name: $name
            cpf: $cpf
            email: $email
            phone: $phone
            address: {
                zipcode: $zipcode
                street: $street
                number: $number
                neighborhood: $neighborhood
                city: $city
                state: $state
                country: $country
            }
        }
    ) {
    name
  }
}
`;

export const DELETE_USER_MUTATION = gql`
mutation($id:ID!){
    deleteUser(
        _id:$id
    ) 
}
`;
