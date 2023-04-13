import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/login/login';
import {CadastroPage} from './pages/cadastro';
import {PostsPage} from './pages/posts/index';
import {ComentariosPage} from './pages/comentarios/index'
import statusbarImage from "./assets/image/Statusbar.png";
import { ChakraProvider } from '@chakra-ui/react';
import {theme} from './theme';
import { GlobalStyle } from '@chakra-ui/react';

function App() {
  return (
    <div>
        <header className="App-header">
          <img src={statusbarImage} className="status-bar" alt ="bar"/>
        </header>
        <body>
      <div className="App">
        <ChakraProvider theme={theme}>
          <GlobalStyle/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/cadastro' element={<CadastroPage/>} />
          <Route path='/posts' element={<PostsPage/>} />
          <Route path='/comentarios' element={<ComentariosPage/>} />
          </Routes>
          </BrowserRouter>
          </ChakraProvider>
      </div>
      </body>
    </div>
  );
}

export default App;
