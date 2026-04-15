import { resolve } from 'path';

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allProjectsJson(
        sort: [{ isHighlighted: DESC }, { orderLevel: ASC }, { name: ASC }]
      ) {
        nodes {
          id
          name
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors;
  }

  result.data.allProjectsJson.nodes.forEach((data) => {
    createPage({
      path: `project/${data.name}/`,
      component: resolve(__dirname, '../pages/projects.tsx'),
    });
  });
};