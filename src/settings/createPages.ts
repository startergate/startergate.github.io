import { resolve } from 'path';

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allProjectsJson(
        sort: { fields: [isHighlighted, orderLevel, name], order: [DESC, ASC] }
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

  result.data.allProjectsJson.nodes.map((data) => {
    createPage({
      path: `project/${data.name}/`,
      component: resolve(__dirname, '../pages/projects.tsx'),
    });
  });
};
