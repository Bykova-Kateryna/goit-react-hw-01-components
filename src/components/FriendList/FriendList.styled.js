import styled from 'styled-components';

export const FriendListSection = styled.ul`
  background-color: #fff;
  text-align: center;
  margin-top: 20px;
  padding: 15px 0;
`;

export const FriendListItem = styled.li`
  color: #000;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 0 5px 15px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FriendStatusOff = styled.span`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  margin-right: 5px;
`;

export const FriendStatusOn = styled(FriendStatusOff)`
  background-color: green;
`;

export const FriendImage = styled.img`
  box-shadow: 5px 3px 26px 0px rgba(0, 0, 0, 0.81);
  margin-right: 15px;
`;
