const StarterScreen = (props: any):JSX.Element => (
  <div>
    <button type="button" onClick={() => props.startSynth()}>Play The Synth</button>
  </div>
)

export default StarterScreen;
