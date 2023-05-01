import styled from "styled-components";

export const StyledList = styled.ul`
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;

    li:not(:last-child) {
        margin-bottom: 10px;
    }
`;