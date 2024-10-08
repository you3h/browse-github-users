import { Octokit } from '@octokit/rest';
import { RequestError } from '@octokit/request-error';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const fetchGitHubUsers = async (
  userName: string,
  perPage: number = 5,
  page: number = 1
) => {
  try {
    const response = await octokit.rest.search.users({
      q: userName,
      per_page: perPage,
      page,
    });

    const users = response.data.items;
    return users;
  } catch (error: unknown) {
    if (error instanceof RequestError) {
      console.error(`Error fetching user: ${error.message}`);
      console.error(`Request failed with status: ${error.status}`);
      console.error(`Response data: ${JSON.stringify(error.response?.data)}`);
    } else if (error instanceof Error) {
      console.error(`Error fetching user: ${error.message}`);
    } else {
      console.error('An unexpected error occurred', error);
    }
  }
};

export const fetchGitHubUserRepository = async (
  username: string,
  page: number = 1
) => {
  try {
    const response = await octokit.rest.repos.listForUser({
      username,
      type: 'all',
      per_page: 10,
      page,
    });

    const linkHeader = response.headers['link'];
    const hasNextPage = linkHeader?.includes('rel="next"');

    return { repositories: response.data, hasNextPage };
  } catch (error: unknown) {
    if (error instanceof RequestError) {
      console.error(`Error fetching user repository: ${error.message}`);
      console.error(`Request failed with status: ${error.status}`);
      console.error(`Response data: ${JSON.stringify(error.response?.data)}`);
    } else if (error instanceof Error) {
      console.error(`Error fetching user repository: ${error.message}`);
    } else {
      console.error('An unexpected error occurred', error);
    }
  }
};
