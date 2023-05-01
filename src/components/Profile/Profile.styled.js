import styled from "styled-components";

export const StyledProfile = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledDescription = styled.p`
    display: flex;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

export const StyledImgProfile = styled.img`
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 150px;
`;

export const StyledWrapper = styled.div`
    padding-bottom: 20px;

    p:nth-child(2) {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 20px;
    }
    p:nth-child(3) {
        margin-bottom: 10px;
    }
`;

export const StyledStats = styled.ul`
    display: flex;
`;

export const StyledItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    width: 80px;

    background-color: #f3f6f4;
    border: 2px solid #eeeeee;
`;