import { useState } from "react";
import Header from './components/Header';
import ChordBlock from "./components/ChordBlock";
import TonicBlock from "./components/TonicBlock";
import ModeBlock from "./components/ModeBlock";
import StarterScreen from "./StarterScreen";
import * as Tone from "tone";
import './App.css';

function App() {
  let [isRunning, setIsRunning] = useState(true);
  // let [loopLength, setLoopLength] = useState(4);
  let [starterScreen, setStarterScreen] = useState(true);
  let [tonic, setTonic] = useState('C');
  let [mode, setMode] = useState("Ionian");

  const synth = new Tone.Synth().toDestination();

  const switchIsRunning = () => {
    if (!isRunning){
      Tone.Transport.start()
    } else {
      Tone.Transport.stop()
    }

    setIsRunning(!isRunning);
  }

  const startSynth = async () => {
    await Tone.start()
    Tone.Transport.start();
    setStarterScreen(false)
  }

  new Tone.Loop(time => {
	  synth.triggerAttackRelease("C2", "4n", time);
  }, "4n").start(0);

  return (
    <div className="App">
      {starterScreen && <StarterScreen startSynth={startSynth}/>}
      {!starterScreen && <div id="content">
        <Header isRunning={isRunning} switchIsRunning={switchIsRunning}/>
        <div id="main">
          <ChordBlock />
          <TonicBlock tonic={tonic} setTonic={setTonic}  />
          <ModeBlock mode={mode} setMode={setMode}/>
        </div>
      </div>}
    </div>
  );
}

export default App;
