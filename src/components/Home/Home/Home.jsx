import React from 'react';
import AddItem from '../../Dashboard/AddItem/AddItem';
import AllProduct from '../../Dashboard/AllProduct/AllProduct';
import Menubar from '../../Share/Menubar';
import Header from '../Header/Header';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <AddItem></AddItem>
            {/* <AllProduct></AllProduct> */}
        </div>
    );
};

export default Home;