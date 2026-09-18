import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';


export default function NavBar() {
    const { auth } = usePage().props;

    return (
        <>
            <header className="w-full text-sm dark:bg-black dark:shadow-lg dark:shadow-white/20 z-50 py-2 sticky top-0">
                <nav className="flex items-center justify-between gap-4 mx-6"> 
                    <div className='flex flex-row justify-between gap-2'>
                        <div className='w-8 h-8 bg-amber-100'>
                        </div>  
                        <h1 className='text-3xl items-center font-sans dark:text-[#EDEDEC]'>
                            Timu
                        </h1>
                    </div> 
                    <div>              
                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="inline-block rounded-sm border border-[#19140035] mx-1 px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="inline-block rounded-sm border border-[#19140035] mx-1 px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={register()}
                                className="inline-block rounded-sm border border-[#19140035] mx-1 px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                    </div>
                </nav>
            </header>
        </>
    );
}
