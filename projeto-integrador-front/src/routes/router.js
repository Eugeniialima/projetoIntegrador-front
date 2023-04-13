import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import{
LoginPage, CadastroPage, PostsPage, ComentariosPage
} from '../pages'


export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/cadastro" element={<CadastroPage/>} />
            <Route path="/posts" element={<PostsPage/>} />
            <Route path="/comentarios" element={<ComentariosPage/>} />            
        </Routes>
        </BrowserRouter>
    )
}