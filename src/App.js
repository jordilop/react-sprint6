import { Escena } from './components/escena/Escena';
import { Button } from './components/button/Button';
import textos from './components/escena/textos.json';
import { useState } from 'react';

function App() {

  const firstElem = 1, lastElem = textos.length;
  const [active, setActive] = useState(firstElem);

  const next = () => active === 4 ? setActive(firstElem) : setActive(active + 1);
  const prev = () => active === 1 ? setActive(lastElem) : setActive(active - 1);

  return (
    <div>
      {<Button param='Anterior' click={prev} />}
      {<Button param='Següent' click={next} />}
      {<Escena param={textos} state={active} />}
    </div >
  );
}

export default App;
