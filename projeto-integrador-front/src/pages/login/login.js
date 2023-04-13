import { useForm } from "./../../hooks";
import { LoginPageContainer } from "./styled";
import logo from "../../assets/image/logo.png";

import {
    Input,
    Button,
    FormControl,
    HStack
    
  } from '@chakra-ui/react';

export * from './login';


export const LoginPage = ()=>{
    const [ ] = useForm({
        email:"",
        password:""
    });

    const onSubmit = (e) => {
        e.preventDefault();
        return true;
    }

    return (
        <HStack>
            <LoginPageContainer>
                <img src={logo} className="App-logo" alt="logo" align="center" />
                <p>O projeto de rede social da Labenu.</p>
            </LoginPageContainer>
            <form onSubmit={onSubmit}>
                <FormControl>
                    <Input type="email" placeholder="E-mail"></Input>
                </FormControl>
                <FormControl>
                    <Input type="password" placeholder="Senha"></Input>
                </FormControl>

                <Button type="submit" variant="form">Continuar</Button>        
        </form>
      </HStack>
    )
}