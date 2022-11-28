const TonicBlock = (props: any):JSX.Element => (
  <div className="block">
    <h1>Root</h1>
    <button type="button" onClick={() => props.setTonic("C")} className={`tonic-button ${props.tonic === "C" ? "clicked" : "not-clicked"}`}>C</button>
    <button type="button" onClick={() => props.setTonic("Db")} className={`tonic-button ${props.tonic === "Db" ? "clicked" : "not-clicked"}`}>Db</button>
    <button type="button" onClick={() => props.setTonic("D")} className={`tonic-button ${props.tonic === "D" ? "clicked" : "not-clicked"}`}>D</button>
    <button type="button" onClick={() => props.setTonic("Eb")} className={`tonic-button ${props.tonic === "Eb" ? "clicked" : "not-clicked"}`}>Eb</button>
    <button type="button" onClick={() => props.setTonic("E")} className={`tonic-button ${props.tonic === "E" ? "clicked" : "not-clicked"}`}>E</button>
    <button type="button" onClick={() => props.setTonic("F")} className={`tonic-button ${props.tonic === "F" ? "clicked" : "not-clicked"}`}>F</button>
    <button type="button" onClick={() => props.setTonic("Gb")} className={`tonic-button ${props.tonic === "Gb" ? "clicked" : "not-clicked"}`}>Gb</button>
    <button type="button" onClick={() => props.setTonic("G")} className={`tonic-button ${props.tonic === "G" ? "clicked" : "not-clicked"}`}>G</button>
    <button type="button" onClick={() => props.setTonic("Ab")} className={`tonic-button ${props.tonic === "Ab" ? "clicked" : "not-clicked"}`}>Ab</button>
    <button type="button" onClick={() => props.setTonic("A")} className={`tonic-button ${props.tonic === "A" ? "clicked" : "not-clicked"}`}>A</button>
    <button type="button" onClick={() => props.setTonic("Bb")} className={`tonic-button ${props.tonic === "Bb" ? "clicked" : "not-clicked"}`}>Bb</button>
    <button type="button" onClick={() => props.setTonic("B")} className={`tonic-button ${props.tonic === "B" ? "clicked" : "not-clicked"}`}>B</button>
  </div>
)

export default TonicBlock;
