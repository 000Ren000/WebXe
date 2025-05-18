import './App.css';
import {Route, Routes} from 'react-router-dom';
import {PageCalcFinishedProduct} from '../../pages/PageCalcFinishedProduct';
import {PageCalcProduct} from '../../pages/PageCalcProduct';
import {Footer} from '../Footer/Footer';
import {Header} from  '../Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<PageCalcFinishedProduct />} />
        <Route path='/product' element={<PageCalcProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
