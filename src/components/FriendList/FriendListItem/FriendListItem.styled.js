import styled from "styled-components";

export const StyledItem = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledStatus = styled.span`
    margin-left: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: black;
`;

export const StyledStatusOnline = styled(StyledStatus)`
    background-color: #13e258;
`;

export const StyledStatusOffline = styled(StyledStatus)`
    background-color: #cc0000;
`;