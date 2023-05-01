import styled from "styled-components";

export const StyledTransitionTable = styled.table`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    width: 900px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledTableHead = styled.th`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #cfe2f3;
`;

export const StyledTd = styled.td`
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
`;

export const StyledTbody = styled.tbody`
    tr:nth-child(2n) {
    background-color: #f3f6f4;
    }
`;