import logo from './logo.svg';
import './App.css';
import Form from './useState/Form';
import MovingDot from './useState/MovingDot';
import Form2 from './useState/Form2';
import TestArray from './useState/TestArray';
import MyApp from './useContext/MyApp';
import Component1 from './useContext/Component1';

function App() {
  return (
    <div className="App">
      <MyApp>
        <Component1 />
      </MyApp>
      {/* <MovingDot /> */}
    </div>
  );
}

export default App;
