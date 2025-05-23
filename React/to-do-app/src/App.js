import './App.css';
import './index.css';
import TodoApp from './TodoApp';
// TodoApp ana component oldu, HTML’in temel yapısını taşıyor.
// App.js dosyası ise onu çağırıyor ve render ediyor.

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}


export default App;
