'use strict'

const { resolve } = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: false,
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
    throw result.errors
  }

  result.data.allProjectsJson.nodes.forEach((data) => {
    createPage({
      path: `project/${data.name}/`,
      component: resolve(__dirname, 'src/pages/projects.tsx'),
    })
  })
}