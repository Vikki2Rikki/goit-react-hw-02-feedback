import styled from 'styled-components';

export const WrapperBtn = styled.div`
  display: flex;

  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 5px;
  border-color: transparent;
  background-color: grey;
  color: white;
  &:hover {
    background-color: yellowgreen;
    color: black;
  }
`;

export const StatisticsText = styled.p``;
