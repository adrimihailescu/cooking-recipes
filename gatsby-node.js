const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  //programatically creating pages for each tag

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`src/template/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
