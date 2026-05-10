export const GET_ALL_USERS_QUERY = `
  query GetAllUsers {
    getAllUsers {
      id
      name
      role
      email
      location
      bio
      linkedinUrl
      githubUrl
      createdAt
      updatedAt
    }
  }
`;
