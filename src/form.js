import React from "react";
import './App.css'

class Form extends React.Component{
  render(){
    return(
  <div class="uk-container">
   <div class= "form">
    <form class="uk-search uk-search-large" onSubmit={this.props.getData}>
      <input class="uk-search-input" type = "text" name='query' placeholder="give me a name"/>
     </form>
    </div>
   </div>
    );
  }
}

export default Form;
