import logo from "./logo.svg";
import "./App.css";
import myImage from '/home/n/Documents/test_git/test1/src/1.jpeg';
import ThreeDSquare from './ThreeDSquare';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <h1>Test Git</h1>
          repository of netanel krakover!!
        </p>
        <div>
      <img src={myImage} alt="My Image" 
      style={{ width: '1700px', height: '1000px' }}
      />
    </div>
    <div>
      <h1>My 3D Square</h1>
      <ThreeDSquare />
    </div>
        
      </header>
      </div>
    )
    }

export default App;

