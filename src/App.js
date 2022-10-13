import { Escena } from './components/escena/Escena';
import { Button } from './components/button/Button';
import Welcome from './components/welcome/Welcome';
import textos from './components/escena/textos.json';
import { useState } from 'react';

function App() {

  const firstElem = 1, lastElem = textos.length;
  const [active, setActive] = useState(firstElem);

  const next = () => active === 4 ? setActive(firstElem) : setActive(active + 1);
  const prev = () => active === 1 ? setActive(lastElem) : setActive(active - 1);

  const [welcome, setWelcome] = useState(true);
  const start = () => setWelcome(false);

  return (
    <div>
      {
        welcome ?
          <div>
            <Welcome />
            <Button param='Iniciar' click={start} classStyle='welcome' />
          </div>
          :
          <div>
            <Button param='Anterior' click={prev} />
            <Button param='Següent' click={next} />
            <Escena param={textos} state={active} />
          </div>
      }
    </div >
  );
}

export default App;
