import React, { useState, useEffect } from 'react';
import Button from '../../components/UI/Button';
import { Container, SectionTitle, colors } from '../../styles/global';
import { Paper, TextArea } from './styles';
import api from '../../services/api';
import { useSnackbar } from 'snackfy';

const SectionTwo: React.FC = () => {
  const [ testimonial, setTestimonial ] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function fetchContent() {
      const response = await api.get('/admin/page_content/testimonial');
      const { data } = response;
      if(data.content)
        setTestimonial(data.content);
    }
    
    fetchContent();
  }, [])

  const handleSubmit = async () => {
    await api.put('/admin/page_content/testimonial/update', { content: testimonial })
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

  return (
    <Container size="md">
      <Paper shadow>
        <SectionTitle>
          Alterar "What We Do?" text
        </SectionTitle>
        <TextArea 
          rows={3}
          onChange={(e) => setTestimonial(e.target.value)}
          value={testimonial}/>
        <Button 
          onClick={() => handleSubmit()}
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