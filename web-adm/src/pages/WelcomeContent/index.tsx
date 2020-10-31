import React, { useState, useEffect } from 'react';
import { Container, SectionTitle, colors } from '../../styles/global';
import { Paper, Preview, FeedbackArea } from './styles';
import DropArea from '../../components/UI/DropArea';
import { CircularProgressbar } from "react-circular-progressbar";
import { MdError } from "react-icons/md";

import api from '../../services/api';

interface TImage {
  name: string;
  url?: string;
}

interface TState {
  image?: TImage;
  text?: string;
}

const WelcomeContent: React.FC = () => {
  const [ contentState, setContentState ] = useState<TState>({});
  const [ uploadProgress, setUploadProgress ] = useState<number>(0);
  const [ uploadError, setUploadError ] = useState(false);

  useEffect(() => {
    async function fetchContent() {
      const response = await api.get('/admin/welcome_content');
      const { data } = response;
      
      setContentState(prevState => {
        return {
          ...prevState,
          image: {
            name: data.img_name,
            url: data.img_url
          }
        }
      })
    }

    fetchContent();
  }, [])

  const processUpload = async (uploadedFile: File) => {
    setUploadProgress(0);
    setUploadError(false);

    const data = new FormData();

    data.append("file", uploadedFile, uploadedFile.name);

    await api.post('/admin/welcome_content/image/upload', data, {
        onUploadProgress: e => {
          const progress = Math.floor((e.loaded * 100) / e.total);

          setUploadProgress(progress)
        }
      })
      .then(response => {
        const { data } = response;
        setContentState(prevState => {
          return {
            ...prevState,
            image: {
              name: data.img_name,
              url: data.img_url
            }
          }
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
          Alterar imagem
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

        { (contentState.image && contentState.image.url) && (
          <Preview 
            src={ contentState.image.url }/>
        )}
      </Paper>
    </Container>
  );
}

export default WelcomeContent;