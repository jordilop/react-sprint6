import styled from "styled-components";

export const StyledParag = styled.p`
    font-size: .9rem;
    border: .15rem solid black;
    border-radius: 2rem;
    margin: 1rem 1.5rem;
    padding: .8rem .4rem;
    text-align: center;

    &.active {
        background-color: pink;
    }
`;