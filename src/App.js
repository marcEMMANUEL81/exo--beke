import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from './components/logIn/logIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <MyComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
