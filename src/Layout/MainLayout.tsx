import React from 'react';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';


interface MaynLayoutPropsType {
   children: ReactNode
}

const MainLayout: React.FC<MaynLayoutPropsType> = ({ children }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}

export default MainLayout