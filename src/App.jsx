import React from 'react';
import NavBer from './Components/NavBer/NavBer';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Pages from './Components/Pages/Pages';

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBer></NavBer>
      <Banner></Banner>
      <Pages></Pages>
      <Footer></Footer>
    </div>
  );
};

export default App;