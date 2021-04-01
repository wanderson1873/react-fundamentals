import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Produtos from './Components/Produtos'
import Produto from './Components/Produto'
import Contato from './Components/Contato'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Produtos />} />
            <Route path="/produto/:id" exact element={<Produto />} />
            <Route path="/contato" exact element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
