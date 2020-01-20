import React, { Component } from 'react'

class Recipe extends Component{
  constructor(props){
    super(props)

    this.state = {
      toggleEdit: false,
      recipeEdit: '',
      ingEdit: [],
    }
  }

  handleInput = (name, val) => {
    this.setState({[name] : val})
  }

  toggleEdit = () =>{
    this.setState({
      toggleEdit: !this.state.toggleEdit,
      recipeEdit: this.props.recipe,
      ingEdit: this.props.ing,})
  }

  updateRecipe(id){
    const { recipeEdit, ingEdit } = this.state;
    let split = ingEdit.split(',')
    this.props.updateRecipeFn(id, {recipeEdit, split});
    this.toggleEdit();
  }

  deleteRecipe = (id) => {
    this.props.deleteRecipeFn(id)
  }

  render(){
    let extractedIng = ''
    for(let i = 0; i < this.props.ing.length; i++){
      if(i === this.props.ing.length - 1){
        extractedIng = extractedIng + ` ${this.props.ing[i]}`
      } else {
        extractedIng = extractedIng + ` ${this.props.ing[i]},`
      }
    }

    let ingCount = 0;
    let splitItems = this.props.items.split(',');
    for(let j = 0; j < splitItems.length; j++){
      if(splitItems.includes(this.props.ing[j])){
        ingCount = ingCount + 1;
      }
    }


    return(
      <div className='list-item'>
        {this.state.toggleEdit ? 
          <input
            id='recipe-c' 
            name='recipeEdit'
            type='text' 
            value={this.state.recipeEdit}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
            placeholder={this.props.recipe}/>
          : <p id='recipe-c'>{this.props.recipe}</p>}
        {this.state.toggleEdit ? 
          <input 
            id='ingredient-c' 
            name='ingEdit' 
            type='text'
            value={this.state.qtyEdit}
            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
            placeholder={extractedIng}/>
          : <p id='ingredient-c'>{extractedIng}</p>}
        {<p id='have-c'>{`${ingCount}/${this.props.ing.length} ingredients`}</p>}
        {this.state.toggleEdit ? 
          <p id='buttons-c'>
            <button onClick={() => this.updateRecipe(this.props.id)}><i className="fas fa-check"></i></button>
            <button onClick={() => this.toggleEdit()}><i className="fas fa-times"></i></button>
        </p>
          : <p id='buttons-c'>
              <button onClick={() => this.toggleEdit()}><i className="fas fa-pencil-alt"></i></button>
              <button onClick={() => this.deleteRecipe(this.props.id)}><i className="fas fa-trash-alt"></i></button>
            </p>}
      </div>
    )
  }
}


export default Recipe
