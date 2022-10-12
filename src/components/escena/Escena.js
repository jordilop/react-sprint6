import { StyledParag } from './styled';

export const Escena = ({ param, state }) => (

    <div>
        {param.map(element => <StyledParag className={state === element.id ? 'active' : null} key={element.id}>{element.text}</StyledParag>)}
    </div>
);