import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Pj from './components/Pj'

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Inicio> </Inicio>}> </Route>
          <Route path='/pj/:id' element={<Pj> </Pj>}> </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
