import React, { useState, useEffect } from 'react';
import Button from '../../components/UI/Button';
import TextField from '../../components/UI/TextField';
import { Container, SectionTitle, colors } from '../../styles/global';
import { Paper, TextFieldArea } from './styles';
import api from '../../services/api';
import { useSnackbar } from 'snackfy';

const SectionTwo: React.FC = () => {
  const [ contactData, setContactData ] = useState<{[type: string]: string }>({
    contact_email: '',
    contact_phone: '',
    contact_address: ''
  });
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function fetchContent() {
      const contents = [
        'contact_email',
        'contact_phone',
        'contact_address'
      ]

      const response = await api.post('/page_content/get_many', { content_names: contents })
      const { data } = response;
      setContactData(prevState => {
        return {
          ...prevState,
          ...data
        }
      })
    }
    
    fetchContent();
  }, [])

  const handleSubmit = async (content_name: string) => {
    await api.put(`/admin/page_content/${content_name}/update`, { content: contactData[content_name] })
      .then(() => {
        enqueueSnackbar({
          message: 'Conteúdo atualizado!',
          options: {
            variant: 'success'
          }
        })
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar({
          message: 'Erro ao tentar atualizar',
          options: {
            variant: 'error'
          }
        })
      })
  }

  const setEmail = (content: string) => {
    setContactData(prevState => {
      return {
        ...prevState,
        contact_email: content
      }
    })
  }

  const setPhone = (content: string) => {
    setContactData(prevState => {
      return {
        ...prevState,
        contact_phone: content
      }
    })
  }

  const setAddress = (content: string) => {
    setContactData(prevState => {
      return {
        ...prevState,
        contact_address: content
      }
    })
  }

  return (
    <Container size="md">
      <Paper shadow>
        <SectionTitle>
          Alterar "E-mail"
        </SectionTitle>
        <TextFieldArea>
          <TextField
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={contactData.contact_email}/>
        </TextFieldArea>
        <Button 
          onClick={() => handleSubmit('contact_email')}
          color="#FFF"
          background={colors['secondary']}
          variant="contained"
          ripple>
            Salvar
        </Button>
      </Paper>

      <Paper shadow>
        <SectionTitle>
          Alterar "Phone"
        </SectionTitle>
        <TextFieldArea>
          <TextField
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={contactData.contact_phone}/>
        </TextFieldArea>
        <Button 
          onClick={() => handleSubmit('contact_phone')}
          color="#FFF"
          background={colors['secondary']}
          variant="contained"
          ripple>
            Salvar
        </Button>
      </Paper>

      <Paper shadow>
        <SectionTitle>
          Alterar "Address"
        </SectionTitle>
        <TextFieldArea>
          <TextField
            label="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={contactData.contact_address}/>
        </TextFieldArea>
        <Button 
          onClick={() => handleSubmit('contact_address')}
          color="#FFF"
          background={colors['secondary']}
          variant="contained"
          ripple>
            Salvar
        </Button>
      </Paper>
    </Container>
  );
}

export default SectionTwo;