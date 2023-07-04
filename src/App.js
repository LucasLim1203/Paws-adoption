import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PetListing from './PetListing';
import UserCreate from './UserCreate';
import PetDetail from './PetDetail';
import PetEdit from './PetEdit';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';
import Login from './Login';
import Register from './Register';
import AdminPet from './AdminPet';
import AdminPanel from './AdminPanel';
import AddPet from './AddPet';
import Account from './Account';
import AccEdit from './AccEdit';


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Appheader></Appheader>
        <Routes>
          <Route path='/' element={<PetListing />}></Route>
          <Route path='/adminPanel/Account/create' element={<UserCreate />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/adminPanel/adminPet' element={<AdminPet/>}></Route>
          <Route path='/adminPanel' element={<AdminPanel/>}></Route>
          <Route path='/adminPanel/account' element={<Account/>}></Route>
          <Route path='/adminPanel/adminPet/addpet' element={<AddPet/>}></Route>
          <Route path='/addpet' element={<AddPet/>}></Route>


          <Route path='/account/edit/:userid' element={<AccEdit />}></Route>
          <Route path='/adminPet/detail/:petid' element={<PetDetail />}></Route>
          <Route path='/adminPet/edit/:petid' element={<PetEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
