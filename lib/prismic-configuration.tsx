import * as prismic from '@prismicio/client';

export const repositoryName = 'https://volantis-technologies.cdn.prismic.io/api/v2'; // Replace with your repository name

export const client = prismic.createClient(repositoryName, {
  accessToken: 'your-access-token'
});