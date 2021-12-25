import './App.css';
import { Gallery } from './components/Gallery'
import { AddPlant } from './components/AddPlant'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">



        </header>

        <Gallery />
        <AddPlant />


      </div>
    </GlobalProvider>
  );
}

export default App;
