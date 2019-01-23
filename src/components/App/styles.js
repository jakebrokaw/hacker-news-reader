import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

export const Wrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${tablet} {
    width: 96%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 40px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 0;
  margin-bottom: 44px;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.4px;
`;