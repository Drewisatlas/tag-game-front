import React, { Component } from 'react';
import Game from './containers/game';
import StartScreen from './components/startScreen.js'
import Instructions from './components/instructions.js'
import {connect} from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import sound from './audio/MyLastSemester8Bit.mp3';


class App extends Component {

  viewSwitch = () => {
    if ( this.props.view === "start") {
      return <StartScreen />
    } else if ( this.props.view === "game") {
      return <Game/>
    } else if ( this.props.view === "instructions") {
      return <Instructions/>
    }
  }


  render() {
    return (
      <React.Fragment>
      <div>{this.viewSwitch()} </div>
        <ReactAudioPlayer
          src={sound}
          autoPlay={true}
          loop={true}
          />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.app.view,
  }
}

export default connect(mapStateToProps)(App)
