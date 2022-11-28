const StarterScreen = (props: any):JSX.Element => (
  <div id="starter-screen">
    <button type="button" className="starter-button" onClick={() => props.startSynth()}>Play The Synth</button>
  </div>
)

export default StarterScreen;
