import { Escena } from './components/Escena/Escena';
import { Button } from './components/Button/Button';
import Welcome from './components/Welcome/Welcome';
import text from './components/Escena/text';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';


function App() {

  const firstElem = 1, lastElem = text.length;
  const [active, setActive] = useState(firstElem);

  const next = () => active === 4 ? setActive(firstElem) : setActive(active + 1);
  const prev = () => active === 1 ? setActive(lastElem) : setActive(active - 1);

  const [welcome, setWelcome] = useState(true);
  const start = () => setWelcome(false);

  const GlobalStyle = createGlobalStyle`
    body {
      background: url('${text[active - 1].img}') no-repeat center;
      background-size: cover;
    }
`;

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
            <GlobalStyle />
            <Button param='Anterior' click={prev} />
            <Button param='Següent' click={next} />
            <Escena param={text} state={active} />
          </div>
      }
    </div >
  );
}

export default App;
