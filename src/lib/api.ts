export const graphqlClient = async <T>(query: string, variables: Record<string, any> = {}): Promise<T> => {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/graphql';
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL Error: ${response.status} - ${response.statusText}`);
  }

  const result = await response.json();
  
  if (result.errors && result.errors.length > 0) {
    throw new Error(result.errors[0].message);
  }

  return result.data as T;
};
