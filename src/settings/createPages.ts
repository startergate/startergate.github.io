import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<{allProjectsJson: {nodes: any[]}}>(`
    {
      allProjectsJson(sort: [{isHighlighted: DESC}, {orderLevel: ASC}, {name: ASC}]) {
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

  result.data?.allProjectsJson?.nodes?.map((data) => {
    createPage({
      path: `project/${data.name}/`,
      component: resolve(__dirname, '../pages/projects.tsx'),
    });
  });
};
