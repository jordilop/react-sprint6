import styled from "styled-components";

export const StyledButton = styled.button`
    width: 50%;
    font-size: 1.5rem;
    background-color: lightgrey;
    border: .05rem solid grey;
    border-radius: .25rem;
    padding: 1.5rem 0;

    &:hover {
        background-color: grey;
    }
    &:active {
        background-color: lightgrey;
    }
`;