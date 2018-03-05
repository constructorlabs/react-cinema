import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);

    this.state = {counter: 0};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState(function(prevState){
      return {
        counter: prevState.counter + 1
      };
    })
  }

  render(){
    return (
      <div>
        <span>button has been clicked {this.state.counter} times</span>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
};

export default Button;
