import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import SubNavbar from '../shared/SubNavbar';
import Breadcrumb from '../shared/Breadcrumb';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className='font-poppins '>
            <Navbar/>
            <SubNavbar/>
            <Breadcrumb/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;