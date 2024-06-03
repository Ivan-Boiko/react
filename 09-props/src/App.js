import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="47" />
      <PetInfo animal="delphin" age="437" />
    </div>
  );
}

export default App;
