import React from "react"

//create page for every single recipe
const RecipeTemplate = props => {
  return (
    <div>
      <h2>{props.params.title}</h2>
    </div>
  )
}

export default RecipeTemplate
