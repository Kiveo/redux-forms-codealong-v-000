import React, { Component } from 'react';
import { connect } from 'react-redux';

constructor() {
  super();
  this.state = {
    text: '',
  };
}

handleChange(event) {
  this.setState({
    text: event.target.value
  });
};

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default CreateTodo;
import React, { Component } from 'react';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
     </div>
   );
  }
};


mapDispatchToProps = dispatch => {
  return {
    // In terms of action, we could write out a separate actions file and import it in,
    // but for now, we'll just write in an action to get a clearer idea of how this is working:
    addTodo: formData => dispatch( {type: 'ADD_TODO', payload: formData} )
  }
}
// Since we only need to dispatch an action here and not getting information from our store,
// we can use null instead of mapStateToProps as the first argument.
export default connect(null, mapDispatchToProps)(CreateTodo);
