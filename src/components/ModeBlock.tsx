const ModeBlock = (props: any):JSX.Element => (
  <div className="block">
    <h1>Mode</h1>
    <button type="button" onClick={() => props.setMode("Ionian")} className={`mode-button ${props.mode === "Ionian" ? "clicked" : "not-clicked"}`}>Ionian</button>
    <button type="button" onClick={() => props.setMode("Dorian")} className={`mode-button ${props.mode === "Dorian" ? "clicked" : "not-clicked"}`}>Dorian</button>
    <button type="button" onClick={() => props.setMode("Phrygian")} className={`mode-button ${props.mode === "Phrygian" ? "clicked" : "not-clicked"}`}>Phrygian</button>
    <button type="button" onClick={() => props.setMode("Lydian")} className={`mode-button ${props.mode === "Lydian" ? "clicked" : "not-clicked"}`}>Lydian</button>
    <button type="button" onClick={() => props.setMode("Mixolydian")} className={`mode-button ${props.mode === "Mixolydian" ? "clicked" : "not-clicked"}`}>Mixolydian</button>
    <button type="button" onClick={() => props.setMode("Aeolian")} className={`mode-button ${props.mode === "Aeolian" ? "clicked" : "not-clicked"}`}>Aeolian</button>
    <button type="button" onClick={() => props.setMode("Locrian")} className={`mode-button ${props.mode === "Locrian" ? "clicked" : "not-clicked"}`}>Locrian</button>
    <button type="button" onClick={() => props.setMode("Major")} className={`mode-button ${props.mode === "Major" ? "clicked" : "not-clicked"}`}>Major</button>
    <button type="button" onClick={() => props.setMode("Minor")} className={`mode-button ${props.mode === "Minor" ? "clicked" : "not-clicked"}`}>Minor</button>
    <button type="button" onClick={() => props.setMode("Melodic")} className={`mode-button ${props.mode === "Melodic" ? "clicked" : "not-clicked"}`}>Melodic</button>
    <button type="button" onClick={() => props.setMode("Harmonic")} className={`mode-button ${props.mode === "Harmonic" ? "clicked" : "not-clicked"}`}>Harmonic</button>
  </div>
)

export default ModeBlock;
