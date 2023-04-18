import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Users from './Pages/Users/Users';
import Trannsaction from './Components/Transactions/Transactions'
import Signup from './Pages/SignUP/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>} />
          <Route path='/users/:id' element={<Trannsaction/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
