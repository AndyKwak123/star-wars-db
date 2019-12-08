import React from "react";
import './App.css'


 const pStyle = {
    textAlign:'center',

  };
class Info extends React.Component{

 


  render(){
    return(
<div class="uk-container">
  <div class="uk-card uk-card-default uk-width-1-3@m">
      <p style ={pStyle} class ="uk-text-primary"> Name: {this.props.name} </p>
      <p style ={pStyle} class ="uk-text-primary"> Height: {this.props.height} </p>
      <p style ={pStyle} class ="uk-text-primary"> Hair Color: {this.props.hair_color} </p>
      <p style ={pStyle} class ="uk-text-primary"> Skin Color: {this.props.skin_color} </p>
  </div>
</div>

    );
  }
}

export default Info;
