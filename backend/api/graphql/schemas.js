const { gql } = require("apollo-server");

const types = gql`
  	scalar DateTime

	type User {
		_id: ID!
		name: String!
		cpf: String!
		email: String!
		phone: String!
		address: Address!
		createdAt: DateTime
		updatedAt: DateTime
	}

	type Address {
		zipcode: String!
		street: String!
		number: String!
		neighborhood: String!
		city: String!
		state: String!
		country: String!
	}

	type Subscription {
		users: [User]
	}
`;

const query = gql`
	type Query {
		user(id:ID!):User
		users:[User!]!
	}
`;

const mutation = gql`
	type Mutation {
		# criar nova mensagem
		createUser(user: UserInput):User

		#registrar novo usuário logado
		updateUser(user:UserInput):User

		#deslogar usuario
		deleteUser(user:UserInput):String
	}

    input UserInput {
        name: String!
        cpf: String!
        email: String!
        phone: String!
        address: AddressInput!
        createdAt: DateTime
    }

    input AddressInput{
        zipcode: String!
        street: String!
        number: String!
        neighborhood: String!
        city: String!
        state: String!
        country: String!
    }
`;

const typeDefs = [query, mutation, types];

module.exports = typeDefs;
