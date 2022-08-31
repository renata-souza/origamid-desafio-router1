import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Helmet} from "react-helmet";
import style from './App.module.css';
import Contato from '../Contato/Contato';
import Navbar from '../Navbar/Navbar';
import Produtos from '../Produtos/Produtos';
import Produto from '../Produto/Produto';

function App() {
  return (
    <div className={style.container}>
      <Helmet>
        <title>My Store | Home</title>
      </Helmet>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produtos/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
