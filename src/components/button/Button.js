import { StyledButton } from './styled';

export const Button = ({ param, click }) => <StyledButton onClick={click}>{param}</StyledButton>;