import { Escena } from './components/escena/Escena';
import textos from './components/escena/textos.json';

function App() {
  return (
    <div>
      {
        textos.map(element => <Escena param={element.text} key={element.id}></Escena>)
      }
    </div >
  );
}

export default App;
