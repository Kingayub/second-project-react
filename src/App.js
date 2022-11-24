import Navbar from './components/Navbar'
import Card from "./components/Card.jsx";
import styles from './index.css'
import { initialState } from './initialState';
function App() {
  return (
    <div style={{
      display: "flex", flexDirection: "row"
    }}>
      <Navbar />
      <Card data={initialState} />
    </div >
  );
}

export default App;
