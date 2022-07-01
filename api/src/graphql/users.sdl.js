export const schema = gql`
  type User {
    id: Int!
    userName: String
    uuid: String
    room: Room!
    roomId: Int!
    messages: [Message]!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    userName: String
    uuid: String
    roomId: Int!
  }

  input UpdateUserInput {
    userName: String
    uuid: String
    roomId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
