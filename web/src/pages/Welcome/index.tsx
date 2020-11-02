import React, { useState, useEffect, useRef } from 'react';
import Bar from '../../components/Bar';
import { PageWrapper, Section, Button, Container, CallText, SectionTitle, CardWrapper, Card, CardButton, TestimonialArea, ContactUsArea } from './styles';
import { SectionTitle as Title, colors } from '../../styles/global';
import { FaCameraRetro } from 'react-icons/fa';
import { IoIosSpeedometer, IoIosBriefcase } from 'react-icons/io';
import api from '../../services/api';

const Welcome: React.FC = () => {
  const [ bannerImage, setBannerImage ] = useState();
  const [ pageContent, setPageContent ] = useState({
    banner_title: '',
    wwdo_text: '',
    testimonial: '',
    contact_email: '',
    contact_phone: '',
    contact_address: ''
  });

  const [ visibleSection, setVisibleSection ] = useState<string>();

  const pageRef = useRef<HTMLDivElement>(null);
  const firstSection = useRef<HTMLDivElement>(null);
  const secondSection = useRef<HTMLDivElement>(null);
  const thirdSection = useRef<HTMLDivElement>(null);
  const fourthSection = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      label: 'Home',
      ref: firstSection,
      onClick: () => scrollTo(firstSection.current)
    },
    {
      label: 'What we do?',
      ref: secondSection,
      onClick: () => scrollTo(secondSection.current)
    },
    {
      label: 'Testimonial',
      ref: thirdSection,
      onClick: () => scrollTo(thirdSection.current)
    },
    {
      label: 'Contact us',
      ref: fourthSection,
      onClick: () => scrollTo(fourthSection.current)
    }
  ];

  const scrollTo = (el: HTMLElement | null) => {
    if(el)
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  
  useEffect(() => {
    async function fetchBannerImage() {
      const response = await api.get('/banner_image');
      const { data } = response;

      if(!data.errors) {
        setBannerImage(data.path);
      }
    }

    fetchBannerImage();
  }, [])

  useEffect(() => {
    async function fetchPageContent() {
      const page_contents = [
        'banner_title',
        'wwdo_text',
        'testimonial',
        'contact_email',
        'contact_phone',
        'contact_address'
      ]
      const response = await api.post('/page_content/get_many', { content_names: page_contents });
      const { data } = response;
      setPageContent(prevState => {
        return {
          ...prevState,
          ...data
        }
      });
    }

    fetchPageContent();
  }, [])

  useEffect(() => {
    const page = pageRef.current;

    function handleScroll() {
      if(page) {
        const scrollPosition = page.scrollTop;
        menuItems.forEach(item => {
          const el = item.ref.current;
          if(el) {
            const { height } = el.getBoundingClientRect();
            const offsetTop = el.offsetTop;
            const offsetBottom = el.offsetTop + height;
            let isSelected = scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
            if(isSelected) {
              setVisibleSection(item.label);
            }
          }
        })
      }      
    }

    handleScroll();
    page?.addEventListener("scroll", handleScroll);

    return () => {
      page?.removeEventListener("scroll", handleScroll);
    }
  }, [menuItems])

  return (
    <>
      <Bar 
        menuItems={menuItems}
        currentSection={visibleSection}
        background={visibleSection === 'Home' ? 'transparent' : 'rgba(0,0,0,0.3)'}/>
      <PageWrapper ref={pageRef}>

        <Section 
          ref={firstSection}
          backgroundColor="rgba(0,0,0,0.1)"
          backgroundImage={bannerImage}>
            <Container size="lg">
              { pageContent.banner_title && (
               <CallText>
                { pageContent.banner_title }
               </CallText> 
              )}
              <div>
                <Button 
                  variant="contained"
                  size="lg"
                  background={colors['secondary']}
                  color="#FFF"
                  onClick={() => scrollTo(fourthSection.current)}>
                  WORK WITH US
                </Button>
              </div>
            </Container>
        </Section>

        <Section 
          ref={secondSection}      
          backgroundColor="#f9f9f9">
            <Container size="lg">
              <div>
                <SectionTitle>What we do?</SectionTitle>
              </div>
              <div className="text-center">
                { pageContent.wwdo_text }
              </div>
              <CardWrapper>
                <Card>
                  <div>
                    <FaCameraRetro/>
                  </div>
                  <div>
                    <Title>Loren Ipsum</Title>
                  </div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                  <div>
                    <CardButton
                      color="#FFF"
                      background={colors['secondary']}
                      variant="contained"
                      onClick={() => alert('Learn more action')}>
                        Learn More
                    </CardButton>
                  </div>
                </Card>
                <Card>
                  <div>
                    <IoIosSpeedometer/>
                  </div>
                  <div>
                    <Title>Loren Ipsum</Title>
                  </div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                  <div>
                    <CardButton
                      color="#FFF"
                      background={colors['secondary']}
                      variant="contained"
                      onClick={() => alert('Learn more action')}>
                        Learn More
                    </CardButton>
                  </div>
                </Card>
                <Card>
                  <div>
                    <IoIosBriefcase/>
                  </div>
                  <div>
                    <Title>Loren Ipsum</Title>
                  </div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                  <div>
                    <CardButton
                      color="#FFF"
                      background={colors['secondary']}
                      variant="contained"
                      onClick={() => alert('Learn more action')}>
                        Learn More
                    </CardButton>
                  </div>
                </Card>
              </CardWrapper>
            </Container>
        </Section>

        <Section
          ref={thirdSection}        
          backgroundColor="rgba(0,0,0,0.1)">
            <Container size="lg">
              <TestimonialArea>
                "{pageContent.testimonial || 'Write a testimonial'}"
              </TestimonialArea>
            </Container>
        </Section>

        <Section
          ref={fourthSection}
          backgroundColor="#f9f9f9">
            <Container size="lg">
              <ContactUsArea>
                <ul>
                  <li>{`E-mail: ${pageContent.contact_email || 'Não informado'}`}</li>
                  <li>{`Phone: ${pageContent.contact_phone || 'Não informado'}`}</li>
                  <li>{`Address: ${pageContent.contact_address || 'Não informado'}`}</li>
                </ul>
            </ContactUsArea>
            </Container>
        </Section>
      </PageWrapper>
    </>
  );
}

export default Welcome;