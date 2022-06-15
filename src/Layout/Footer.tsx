import React from "react";

const Footer: React.FC = () => {
   return (
      <div className='footer'>
         <div className='container_footer'>
            <div className='top_footer_block'>
               <div className='footer_general_information'>
                  <img src='./images/mainlogo.png' className='footer_mainlogo' />
                  <p className='footer_general_information_p'>Открытое акционерное общество<br />
                     «Реестр ПО» начало практическую<br />
                     деятельность с 1 марта 2014 г</p>
                  <ul className='footer_general_information_list'>
                     <li className='developer'>Разработчик</li>
                     <li className='company'>ОАО «Агентство сервисизации и реинжиниринга»</li>
                     <li className='location'>Минск, улица Клары Цеткин, 24</li>
                  </ul>
               </div>
               <div className='footer_information'>
                  <div className='header_block'>Информация</div>
                  <li>Реестры</li>
                  <li>Новости</li>
                  <li>Документы</li>
                  <li>Вопросы</li>
               </div>
               <div className='footer_technical_support'>
                  <div className='header_block'>Техническая поддержка</div>
                  <p className='footer_technical_support_p'>Ежедневно с 8.00 до 19.00,<br />
                     за исключением выходных (суббота,<br />
                     воскресенье) и праздничных дней.</p>
                  <ul className='footer_technical_support_list'>
                     <li>+375 25 111 22 33</li>
                     <li>+375 29 222 44 55</li>
                     <li>ReestrPOsupport@mail.ru</li>
                  </ul>
               </div>
               <div className='footer_contacts'>
                  <div className='header_block'>Контакты</div>
                  <ul className='footer_contacts_list'>
                     <li>+375 33 112 22 45</li>
                     <li>+375 29 222 44 88</li>
                     <li>ReesrtPO@mail.ru</li>
                     <li>220004 г. Минск, ул. Карла Маркса, 38</li>
                     <li className='href_contacts'>Связаться с поддержкой</li>
                  </ul>
               </div>
            </div>
            <div className='bottom_footer_block'>
               <div className='text_bottom_footer_block'>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</div>
            </div>
         </div>
      </div>
   )
}

export default Footer;