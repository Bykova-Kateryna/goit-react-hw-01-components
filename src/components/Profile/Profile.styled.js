import styled from "styled-components";

export const ProfileContainer = styled.div`
background-color: #fff;
text-align: center;
width: 300px;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

export const ProfileImage = styled.img`
border-radius: 50%;
border: 1px solid #ddd;
padding: 5px;
box-shadow: 10px 5px 5px #000;
margin-left: auto;
margin-right: auto;
`;

export const ProfileUserName = styled.p`
margin: 5px 0;
font-weight: bold;
`;

export const ProfileUserInfo = styled.p`
margin: 5px 0;
color: #BBB8B8  ;
`;

export const ProfileInfoList = styled.ul`
background-color: #E0E0E0;
display: flex;
justify-content: space-between;
width: 300px;
`;

export const ProfileInfoItem = styled.li`
padding: 15px;
border: 1px solid;
width: 100%;
`;


export const ProfileInfoContent = styled.span`
display: block;
`;