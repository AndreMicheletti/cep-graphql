const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type CEPInfo {
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String,
    unidade: String,
    ibge: String,
    gia: String,
  }

  type Query {
    buscaCEP(cep: String!): CEPInfo
  }
`;


const getApiRoute = (cep) => `http://viacep.com.br/ws/${cep}/json/`;

const resolvers = {
    Query: {
        buscaCEP: async (parent, args, context, info) => {

            try {

                const result = await axios.get(getApiRoute(args.cep))
                return result.data

            } catch (e) {

                console.log(e)
                throw e

            }

        },
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});