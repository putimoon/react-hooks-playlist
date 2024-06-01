import logo from './logo.svg';
import './App.css';
import Form from './useState/Form';
import MovingDot from './useState/MovingDot';
import Form2 from './useState/Form2';
import TestArray from './useState/TestArray';
import MyApp from './useContext/MyApp';
import Component1 from './useContext/Component1';
import File from './useEffect/File';
import File2 from './useEffect/File2';
import File3 from './useEffect/File3';
import MemoTest from './useMemo/MemoTest';

function App() {
  return (
    <div className="App">
      {/* <MyApp>
        <Component1 />
      </MyApp> */}
      {/* <File3 /> */}
      {/* <MovingDot /> */}
      <MemoTest />
    </div>
  );
}

export default App;
