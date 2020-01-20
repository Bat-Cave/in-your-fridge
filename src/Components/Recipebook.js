import React, { Component } from 'react'
import Recipelist from './Recipelist'
import axios from 'axios'

class Recipebook extends Component {
  constructor(props){
    super(props);

    this.state = {
      recipeIn: '',
      ingIn: '',
      error: 'none',
      search: '',
    }
  }

  componentDidMount(){
    this.props.updateRecipebookFn()
  }

  handleInput = (name, val) => {
    this.setState({[name] : val})
  }

  updateRecipe = (id, body) => {
    axios.put(`/api/recipes/${id}`, body).then(res => {
    }).catch(err => console.log(err))
    this.props.updateRecipebookFn();
  }

  deleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`).then(res => {
    }).catch(err => console.log(err))
    this.props.updateRecipebookFn();
  }

  addRecipe = () => {
    const { recipeIn, ingIn } = this.state;
    if( !recipeIn || !ingIn){
      this.setState({error: 'error'})
      setTimeout(() => this.setState({error: 'none'}), 4000)
    } else {
      let split = ingIn.split(',')
      this.props.addRecipeFn({
        recipe: recipeIn,
        ing: split,
      })
      this.updateRecipe();
    }
  }

  render(){
    return(
      <div className='card'>
        <h2>Recipe Book</h2>
        <Recipelist 
          recipes={this.props.recipes}
          items={this.props.items}
          updateRecipeFn={this.updateRecipe}
          deleteRecipeFn={this.deleteRecipe}
          />
        
        <div className='fridge-side'>
          <div className='add-item recipe'>
            <h4>Add Recipe</h4>
            <input 
              name='recipeIn' 
              type='text' 
              placeholder='Recipe Name' 
              onChange={(e) => this.handleInput(e.target.name, e.target.value)}
              />
            <textarea
              name='ingIn'
              type='text'
              placeholder='Ingredients (separate with a ",")'
              onChange={(e) => this.handleInput(e.target.name, e.target.value)}
              />
            <button onClick={this.addRecipe}>Add Recipe</button>
            <p className={this.state.error}>Please fill all input fields</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Recipebook