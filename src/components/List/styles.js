import styled from 'styled-components';

export const ListWrapper = styled.ul`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;