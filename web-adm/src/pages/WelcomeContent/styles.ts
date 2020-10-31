import styled from 'styled-components';
import { Paper as PaperBase } from '../../styles/global';

export const Paper = styled(PaperBase)`
  padding: 15px;
  height: 100%;
`

export const FeedbackArea = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
` 

export const Preview = styled.div<{ src: string }>`
  width: auto;
  min-height: 400px;
  border-radius: 5px;
  background-image: url(${({ src }) => src });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;