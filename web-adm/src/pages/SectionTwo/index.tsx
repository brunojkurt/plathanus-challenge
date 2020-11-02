import React, { useState, useEffect } from 'react';
import Button from '../../components/UI/Button';
import { Container, SectionTitle, colors } from '../../styles/global';
import { Paper, TextArea } from './styles';
import api from '../../services/api';
import { useSnackbar } from 'snackfy';

const SectionTwo: React.FC = () => {
  const [ wwdoText, setWwdoText ] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function fetchContent() {
      const response = await api.get('/admin/page_content/wwdo_text');
      const { data } = response;
      if(data.content)
        setWwdoText(data.content);
    }
    
    fetchContent();
  }, [])

  const handleSubmit = async () => {
    await api.put('/admin/page_content/wwdo_text/update', { content: wwdoText })
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
          onChange={(e) => setWwdoText(e.target.value)}
          value={wwdoText}/>
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