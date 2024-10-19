import logo from './logo.svg';
import './App.css';
import Text_switch from './components/Text_switch';
import Navbar from './components/Navbar';

let name = <b>Krish</b>
let z = "KitKat";
function App() {
  return (
    <>
     <Navbar title="TextUtils"/>
     <Text_switch/>
    </>
  );
}

export default App;
