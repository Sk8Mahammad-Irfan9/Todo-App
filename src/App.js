import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { TodoWrapperStorage } from './components/TodoWrapperStorage';

function App() {
  return (
    <div className="App">
      <TodoWrapperStorage />
    </div>
  );
}

export default App;
