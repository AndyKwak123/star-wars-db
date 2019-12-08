import React, { Component } from 'react';
import Rey from './rey.js'
import './App.css'
import Form from './form.js'
import Info from './info.js'


class App extends React.Component {




    state = {
      name: undefined,
      height: undefined,
      hair_color: undefined,
      skin_color: undefined,
    }

    getData = async (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    const api_key= "c7d056c43d66e338663e99816932bcbb";

    const resp = await fetch(`https://swapi.co/api/people/?search=${query}`);
    const data = await resp.json();
    console.log(data);
    this.setState({
      name: data.results[0].name,
      height: data.results[0].height,
      hair_color: data.results[0].hair_color,
      skin_color: data.results[0].skin_color,
    })
    }
  render() {
    return (

        <div className="lotties">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"></script>
          <Rey/>
          <Form getData={this.getData}/>
          <Info name={this.state.name}
          height={this.state.height}
          hair_color={this.state.hair_color}
          skin_color={this.state.skin_color}/>
        </div>

    );
  }
};


export default App;
