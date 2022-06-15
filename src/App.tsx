import React from 'react';
import Documents from './components/Documents';
import MainPhoto from './components/MainPhoto';
import Registries from './components/Registries';
import RegistryNews from './components/RegistryNews';
import MainLayout from './Layout/MainLayout';
import { registyNewsMass } from './massElements/registryNewsMass';
import { documentsMass } from './massElements/documentsMass';
import Questions from './components/Questions';
import { questionsMass } from './massElements/questionsMass';
import { registriesMass } from './massElements/registriesMass';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateUsers from './pages/CreateUsers';
import PersonalAccount from './pages/PersonalAccount';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <MainPhoto />
          <Registries registriesMass={registriesMass} />
          <RegistryNews objectsData={registyNewsMass} />
          <Documents documentsMass={documentsMass} />
          <Questions questyonsMass={questionsMass} />
        </MainLayout>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create" element={<CreateUsers />} />
      <Route path='/pesonal' element={<PersonalAccount />} />
    </Routes>
  )
}

export default App;
