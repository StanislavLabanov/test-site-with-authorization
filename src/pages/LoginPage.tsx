import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { useAppSelector } from "../redusers/rootReduser";

const LoginPage: React.FC = () => {
   const [errPass, seterrPass] = useState(false)

   const [nameFlag, setNameFlag] = useState(false)
   const [passwordFlag, setPasswordFlag] = useState(false)

   const selector = useAppSelector(state => state.user.userMassData)

   const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setNameFlag(false)
      if (e.target.value.length > 1 && e.target.value !== selector.name) {
         e.target.className = 'error_inpt'
      } else if (e.target.value.length === 0) {
         e.target.className = 'enter_inpt'
      } else if (e.target.value === selector.name) {
         setNameFlag(true)
         e.target.className = 'true_inpt'
      }
   }

   const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordFlag(false)
      seterrPass(false)
      if (e.target.value.length > 4 && e.target.value !== selector.password) {
         seterrPass(true)
         e.target.className = 'error_inpt'
      } else if (e.target.value.length === 0) {
         e.target.className = 'enter_inpt'
      } else if (e.target.value === selector.password) {
         setPasswordFlag(true)
         e.target.className = 'true_inpt'
      }
   }

   return (
      <MainLayout>
         <div className="login_page">
            <div className="container">
               <div className="go_to_main_page"><Link to="/">&larr; &nbsp;Главная</Link></div>
               <div className="autorization_flex_block">
                  <div className="autorization_block">
                     <h2>Авторизация</h2>
                     <div className="name_enter">Имя</div>
                     <input type='text' placeholder="Введите имя" className="enter_inpt" onChange={(e) => changeNameHandler(e)} />

                     {nameFlag && <img src="./images/Vector9.png" style={{ marginLeft: '10px' }} />}

                     <div className="name_enter">Пароль</div>
                     <input type='password' placeholder="Введите пароль" className="enter_inpt" onChange={(e) => changePasswordHandler(e)} />

                     {passwordFlag && <img src="./images/Vector9.png" style={{ marginLeft: '10px' }} />}
                     {errPass && <div className="err_password">Неправильный пароль</div>}

                     <div className="storage_computer_flex_block">
                        <input type='checkbox' className="check" />
                        <span>Запомнить меня на этом компьютере</span>
                     </div>
                     <Link to={nameFlag && passwordFlag ? '/pesonal' : '/login'}><div className="button_entrance">Вход</div ></Link>
                     <div className="forgot_password">Забыли свой пароль?</div>
                     <div className="new_autorization" id="one">
                        Авторизация с использованием ЕС ИФЮЛ
                     </div>
                     <div className="new_autorization" id="two">
                        Авторизация с использованием МСИ
                     </div>
                     <div className="not_accaunt">
                        У вас нет аккаунта?<br />
                        <Link to={'/create'}><span>Нажмите сюда чтобы создать</span></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </MainLayout >
   )
}

export default LoginPage