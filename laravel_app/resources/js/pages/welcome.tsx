import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import FrontPage from './frontpage/index';
import NavBar from './frontpage/navbar';
import Footer from './frontpage/footer';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
                <NavBar/>
                <FrontPage/>
                <Footer/>
            </div>            
        </>
    );
}
