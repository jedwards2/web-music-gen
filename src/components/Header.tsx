const Header = (props: any): JSX.Element => (
  <div id="header">
    <h1>Arpeggiator</h1>
    <button className="header-button" onClick={() => props.switchIsRunning()}>{props.isRunning ? "Play" : "Pause"}</button>
  </div>
)

export default Header;
