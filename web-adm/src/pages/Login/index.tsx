import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'snackfy';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import api from '../../services/api';
import { login } from '../../store/actions/auth';
import { AuthData } from '../../store/types';
import { colors } from '../../styles/global';
import { Container, Title, Paper, Form, FormItem, FormButton, Loading, FeedbackArea } from './styles';
import TextField from '../../components/UI/TextField';
import Button from '../../components/UI/Button';
import Toast from '../../components/UI/Toast';

interface DispatchProps {
  login(data: AuthData): void;
}

const Login: React.FC<DispatchProps> = ({ login }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ validForm, setValidForm ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ errorMessages, setErrorMessages ] = useState<string[]>([]);

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  useEffect(() => {
    setValidForm(
      email && password ?
      true : false
    );

  }, [ email, password ])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    await api.post('/login', { email, password })
      .then((res) => {
        const data = res.data;

        if(data.error) {
          !!data.error.messages.length &&
            setErrorMessages(data.error.messages);
        } else {
          login(data);
          setTimeout(() => { history.push('/dashboard') }, 200);
        }

      })
      .catch(function(err) {
        console.log(err);
        enqueueSnackbar({
          message: 'Ocorreu um erro, tente novamente mais tarde.',
          options: {
            variant: 'error'
          }
        })
      });
    setLoading(false);
  }
  
  return (
    <Container size="sm">
      <Paper shadow>

        <Title>Login</Title>
        
        <FeedbackArea>
          { !!errorMessages.length && (
            <Toast 
              type="error"
              onClose={ () => setErrorMessages([]) }
              sharp>
                <ul>
                  { errorMessages.map((message, index) => (
                    <li key={index}>{ message }</li>
                  ))}
                </ul>
            </Toast>
          )}
        </FeedbackArea>

        <Form onSubmit={ handleSubmit }>
          <FormItem>
            <TextField label="E-mail"
              value={email}
              type="email"
              onChange={ (e) => setEmail(e.target.value) }
              w100
              required/>
          </FormItem>

          <FormItem>
            <TextField label="Password"
              type="password"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
              w100
              required/>
          </FormItem>

          <FormButton>
            <Button 
              background={colors['primary']}
              color={'#FFF'}
              variant="contained"
              ripple
              w100
              disabled={!validForm}>
                { !loading ?
                  'Entrar' : (
                  <Loading 
                    size="sm"
                    thickness={2.6}/>
                )}
            </Button>
          </FormButton>
        </Form>
      </Paper>
    </Container>
  );
}
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ login }, dispatch);

export default connect(null, mapDispatchToProps)(Login);