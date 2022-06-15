import React from "react";
import { Link } from "react-router-dom";
import CreateAccaunt from "../components/CreateAccaunt";
import MainLayout from "../Layout/MainLayout";

const CreateUsers: React.FC = () => {
   return (
      <MainLayout>
         <div className="container">
            <div className="registration_users_block" style={{ margin: '40px 0 80px 0' }}>
               <div className="go_to_main_page"><Link to="/login">&larr; &nbsp;Страница авторизации</Link></div>
               <h2 style={{ textAlign: 'center' }}>Регистрация</h2>
               <CreateAccaunt />
            </div>
         </div>
      </MainLayout>

   )
}

export default CreateUsers