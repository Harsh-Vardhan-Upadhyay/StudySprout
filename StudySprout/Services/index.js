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
  courses(where: {}) {
    name
    id
    level
    tags
    time
    author
    banner(where: {}) {
      url
    }
    chapters {
      id
      output {
        markdown
      }
      title
      chapterDescription {
        markdown
      }
      example {
        markdown
      }
    }
    courseBanner {
      url
    }
    courseCover {
      url
    }
    description {
      markdown
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

export const enrollCourse=async(courseId,userEmal)=>{
  const mutationQuery=gql`mutation MyMutation {
  createUserEnrolledCourse(
    data: {courseId: "`+courseId+`", userEmal: "`+userEmal+`", course: {connect: {id: "`+courseId+`"}}}
  ) {
    id
  }
  publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
    edges {
      node {
        id
      }
    }
  }
}


`

try {
  const { data } = await client.mutationQuery({ mutationQuery });
  return data;
} catch (error) {
  console.error("Error fetching course list:", error);
  throw error;
}
}