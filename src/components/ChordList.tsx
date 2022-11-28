const ChordList = (props: any):JSX.Element => (
  <div>
    <h1>Chord Progression</h1>
    <button type="button" onClick={() => props.setTonic("C")} className={`tonic-button ${props.scale === "C" ? "clicked" : "not-clicked"}`}>I</button>
  </div>
)

export default ChordList;
