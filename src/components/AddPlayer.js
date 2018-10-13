import React from 'react';

const AddPlayer = props => {

function handleSubmit(e){
  e.preventDefault()
  props.handleSubmited(e)
}

return  (<div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Soccer Player" required/>
      <br/>
      <input type="text"  name="position" placeholder="Player's Position" required/>
      <br/>
      <select id="club" name="club">
        <option value="Manchester United">Manchester United ( Good Choice )</option>
        <option value="Juventus">Juventus</option>
        <option value="Real Madrid">Real Madrid</option>
        <option value="Chelsea">Chelsea</option>
        <option value="Arsenal">Arsenal</option>
        <option value="Barcelona">Barcelona</option>
      </select>
      <button id='button'> Add Player </button>
    </form>

  </div>
)};

export default AddPlayer
