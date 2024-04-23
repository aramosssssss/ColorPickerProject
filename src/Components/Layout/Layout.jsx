import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

function Layout(props) {
  const { children } = props;
  return (
    <div className="wrapper">
      <Header />
      <div className="page-container">{children}</div>

      <Footer />
    </div>
  );
}
export default Layout;
