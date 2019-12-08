import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './rey.json'

class Rey extends React.Component {
  state = {isStopped: false, isPaused: false}

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div className="controlled">
        <Lottie options={defaultOptions}
              height={1000}
              width={2000}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />
      </div>
    )
  }
}

export default Rey
