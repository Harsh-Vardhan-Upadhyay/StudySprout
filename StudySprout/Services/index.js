import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://api-ap-south-1.hygraph.com/v2/clygz6kgn039f07wbzvf5jaq5/master',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courses(where: { level: easy }) {
        name
        id
        level
        tags
        time
        author
        banner {
          url
        }
        chapters {
          id
        }
      }
    }
  `;

  try {
    const { data } = await client.query({ query });
    return data;
  } catch (error) {
    console.error("Error fetching course list:", error);
    throw error;
  }
};
