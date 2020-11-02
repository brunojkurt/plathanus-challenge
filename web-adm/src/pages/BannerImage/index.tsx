import React, { useState, useEffect } from 'react';
import { Container, SectionTitle, colors } from '../../styles/global';
import { Paper, Preview, FeedbackArea } from './styles';
import DropArea from '../../components/UI/DropArea';
import { CircularProgressbar } from "react-circular-progressbar";
import { MdError } from "react-icons/md";

import api from '../../services/api';

interface TImage {
  name?: string;
  url?: string;
}

const BannerImage: React.FC = () => {
  const [ state, setState ] = useState<TImage>();
  const [ uploadProgress, setUploadProgress ] = useState(0);
  const [ uploadError, setUploadError ] = useState(false);

  useEffect(() => {
    async function fetchContent() {
      const response = await api.get('/admin/banner_image');
      const { data } = response;
      
      setState({
        name: data.filename,
        url: data.path
      })
    }

    fetchContent();
  }, [])

  const processUpload = async (uploadedFile: File) => {
    setUploadProgress(0);
    setUploadError(false);

    const data = new FormData();

    data.append("file", uploadedFile, uploadedFile.name);

    await api.post('/admin/banner_image/upload', data, {
        onUploadProgress: e => {
          const progress = Math.floor((e.loaded * 100) / e.total);

          setUploadProgress(progress)
        }
      })
      .then(response => {
        const { data } = response;
        console.log(data);
        setState({
          name: data.filename,
          url: data.path
        })
      })
      .catch(() => {
        setUploadError(true);
      })
    setUploadProgress(0);
  }

  return (
    <Container size="md">
      <Paper shadow>
        <SectionTitle>
          Alterar imagem banner
        </SectionTitle>

        <DropArea
          onUpload={(file: File[]) => processUpload(file[0])}
          multiple={false}/>

        <FeedbackArea>
          { uploadProgress !== 0 && (
            <CircularProgressbar 
              styles={{
                root: { width: 32 },
                path: { stroke: colors['secondary'] }
              }}
              strokeWidth={10}
              value={uploadProgress}
              />
          )}

          { uploadError && (
            <MdError style={{ color: colors['error'], fontSize: '30px' }}/>
          )}
        </FeedbackArea>

        { state?.url ? (
          <Preview 
            src={ state.url }/>
        ) : (
          <span>Nenhuma imagem adicionada.</span>
        )}
      </Paper>
    </Container>
  );
}

export default BannerImage;