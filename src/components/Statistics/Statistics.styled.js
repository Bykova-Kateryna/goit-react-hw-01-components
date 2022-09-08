import styled from 'styled-components';

export const StatisticsSection = styled.section`
  background-color: #fff;
  text-align: center;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const StatisticsTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  padding: 15px;
  border: 1px solid;
  width: 100%;
`;

export const StatisticsItemSection = styled.span`
  display: block;
  color: #fff;
`;
