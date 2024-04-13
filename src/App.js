import './App.css';
import React from 'react';
import { AuthProvider } from './AuthContext';
import RoutersPath from './Routes/Routes';
import NavBar from './Pages/NavBar';
import Footer from './Pages/Footer';
import { useNavigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <NavBar/>
          <RoutersPath/>
          <Footer/>
      </AuthProvider>
    </div>
  );
};

export default App;
