import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Profile from './features/Profiles/Profile';
import AddEditPost from './features/AddEditPost/AddEditPost';
import Messager from './features/Messager/Messager';
import ShowPost from './features/ShowPost/ShowPost';
import Auth from './features/Auth/Auth';
import LoginForm from './features/Auth/AuthForm/LoginForm';
import RegisterForm from './features/Auth/AuthForm/RegisterForm';
import Protected from './features/Auth/Context/ProtectedRoute';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth/>}>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="register" element={<RegisterForm/>}/>
          </Route>
          <Route exact path='/home' element={<Protected Component={Home}/>}/>
          <Route exact path='profile/:userId' element={<Protected Component={Profile}/>}/>
          <Route exact path='addedit' element={<Protected Component={AddEditPost}/>}/>
          <Route exact path='addedit/:postId' element={<Protected Component={AddEditPost}/>}/>
          <Route exact path='/message' element={<Protected Component={Messager}/>}/>
          <Route exact path='post/:postId' element={<Protected Component={ShowPost}/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
