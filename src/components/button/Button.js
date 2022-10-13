import { StyledButton } from './styled';

export const Button = ({ param, click, classStyle }) => <StyledButton className={classStyle} onClick={click}>{param}</StyledButton>;