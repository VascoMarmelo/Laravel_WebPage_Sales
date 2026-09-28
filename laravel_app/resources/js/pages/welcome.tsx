import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import FrontPage from './frontpage/index';
import NavBar from './frontpage/navbar';
import Footer from './frontpage/footer';
import { Product } from '@/types';
import ProductPage from './productpage';

type Props = {
    collection: Product;
    //search: string | null
}

export default function Welcome(collection : Product) {
    const { auth } = usePage().props;
    const { url } = usePage()

    const isHome = url === '/';
    const isProduct = /^\/product\/(\d+)$/.test(url);

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
                <NavBar/>
                {isHome && (
                    <FrontPage collection={collection} />
                )}
                {isProduct && (
                    <ProductPage productProp={collection} />
                )}
                <Footer/>            
            </div>            
        </>
    );
}
