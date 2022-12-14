import Card from "./Components/Card";
import { details } from "./data";

import "./App.css";

function App() {

  return (
    <div>
      <div className="persons">
        <h1 className="react">React-Card Project</h1>
        {details.map((detail) => (
          <Card {...detail} />
        ))}
      </div>
      <p className="footer">React.js Examples Project React-card</p>
    </div>
  );
}

export default App;
