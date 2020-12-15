import { resolve } from 'path';

export const createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  graphql(`
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
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allProjectsJson.nodes.forEach((data) => {
      createPage({
        path: `project/${data.name}/`,
        component: resolve(__dirname, '../pages/projects.tsx'),
      });
    });
  });
};
