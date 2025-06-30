import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import SubNavbar from '../shared/SubNavbar';
import Breadcrumb from '../shared/Breadcrumb';
import Footer from '../shared/Footer';
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div className='font-poppins '>
            <Navbar/>
            <SubNavbar/>
            <Breadcrumb/>
            <Outlet/>
            <Footer/>
            <Toaster />
        </div>
    );
};

export default MainLayout;