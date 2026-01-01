import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import UserProfileComponent from './components/User';
import UserList from './components/UserList';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <UserProfileComponent/>
      <UserList/>
    </div> 
  )
}

export default App;

