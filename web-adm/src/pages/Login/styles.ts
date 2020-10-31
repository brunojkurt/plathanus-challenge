import styled from 'styled-components';
import { Container as ContainerBase, Paper as PaperBase, colors } from '../../styles/global';
import { CircularLoading } from '../../components/UI/Css';

export const Container = styled(ContainerBase)`
  padding-top: 20vh;
`

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  color: ${colors['title']};
`

export const Paper = styled(PaperBase)`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  position: relative;
`

export const FeedbackArea = styled.div`
  transition: all 300ms ease-in-out;
  margin-top: 10px;
`

export const Form = styled.form`
  width: 100%;
`

export const FormItem = styled.div`
  padding: 5px 0 5px 0;
  width: 100%;
`

export const FormButton = styled.div`
  margin-top: 25px;
`

export const Loading = styled(CircularLoading)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -16px;
  margin-top: -16px;
`