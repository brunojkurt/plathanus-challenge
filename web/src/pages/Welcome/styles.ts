import styled from 'styled-components';
import { Container as ContainerBase, SectionTitle as SectionTitleBase, colors, breakpoints } from '../../styles/global';
import ButtonBase from '../../components/UI/Button';

export const PageWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100%;
  position: relative;
`
interface TSection {
  backgroundImage?: string;
  backgroundColor?: string;
}

export const Section = styled.section<TSection>`
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
  font-size: 18px;
  color: #808080;

  ${({backgroundImage}) => backgroundImage && {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}

  ${({backgroundColor}) => backgroundColor && {
    backgroundColor: backgroundColor
  }}

  .text-center {
    text-align: center;
  }
`

export const Button = styled(ButtonBase)`
  font-size: 21px;
  padding: 15px 20px;
  border-radius: 35px;
`

export const Container = styled(ContainerBase)`
  padding-top: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CallText = styled.h1`
  font-size: 6rem; 
  text-align: center;
  color: #FFF;
  padding: 15px;

  @media screen and (max-width: ${breakpoints['sm']}) {
    font-size: 3rem;
  }
`

export const SectionTitle = styled(SectionTitleBase)`
  font-size: 2rem;
  padding: 80px 0px 15px;
  position: relative;
  display: flex;
  justify-content: center;
  
  :before {
    content: " ";
    border: 2px solid ${colors['title']};
    z-index: 1;
    position: absolute;
    box-sizing: border-box;
    width: 60px;
    bottom: 5px;
  }
`

export const CardWrapper = styled.div`
  margin: 80px 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints['sm']}) {
    display: none !important;
  }
`

export const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 15px;
  max-width: 400px;

  svg {
    font-size: 100px;
    color: ${colors['secondary']};
    margin-bottom: 15px;
  }
`

export const CardButton = styled(ButtonBase)`
  margin-top: 20px;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 20px;
`

export const TestimonialArea = styled.div`
  padding: 80px 0;
  font-style: italic;
  font-size: 21px;
  text-align: center;
`

export const ContactUsArea = styled.div`
  ul {
    list-style: none;
  }
`