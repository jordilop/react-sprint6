import styled from "styled-components";

export const StyledParag = styled.p`
    font-size: .9rem;
    border: .15rem solid black;
    border-radius: 2rem;
    margin: 1rem 1.5rem;
    padding: .8rem .4rem;
    text-align: center;
    background-color: rgba(211,211,211,.5);

    &.active {
        background-color: pink;
    }
`;