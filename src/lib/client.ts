export async function fetchGraphQL<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const url = (import.meta as any).env?.VITE_API_URL;
  
  if (!url) {
    throw new Error('VITE_API_URL environment variable is not defined. Please configure it in your environment files.');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { data, errors } = await response.json();
  if (errors && errors.length > 0) {
    throw new Error(errors[0].message || 'GraphQL error');
  }

  return data as T;
}
