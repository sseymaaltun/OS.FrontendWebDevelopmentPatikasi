import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
  return (
    <div className="App">
      <A />
      <B />
      {/* ELEMENT İÇİNDE STYLE KULLANIMI */}
      <div style={{color: "red", backgroundColor: "white", paddingTop: 50}}>
        lorem ipsum dolor    
      </div>

      {/* BOOSTRAP LİNKİNİ İNDEX.HTMLE YAZDIKTAN SONRA KULLANIMI */}
      <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
      </div> 
    </div>
  );
}

export default App;
