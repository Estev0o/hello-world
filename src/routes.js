import './App.css';
import Inicio from './paginas/inicio';
import SobreMim from './paginas/sobreMim';
import Menu from './componentes/menu';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Rodape from './componentes/rodape';
import PaginaPadrao from './componentes/paginaPadrao';
import Post from './paginas/post';
import NotFound from './paginas/NotFound';
import ScrollToTop from './componentes/scrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Menu/>
      <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path='sobreMim' element={<SobreMim/>}/>
        </Route>
        <Route path='posts/:id/*' element={<Post/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
