import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { SlOptionsVertical } from "react-icons/sl";


export default function NavBar() {
    const { auth } = usePage().props;

    return (
        <>
            <header className="w-full text-sm dark:bg-black dark:shadow-lg dark:shadow-white/20 z-50 py-2 sticky top-0">
                <div className='hidden md:block'>
                    <nav className="flex items-center justify-between gap-4 mx-6"> 
                        <div className='flex flex-row justify-between gap-2'>
                            <div className='w-8 h-8 bg-amber-100'>
                            </div>  
                            <h1 className='text-3xl items-center font-sans dark:text-[#EDEDEC]'>
                                <Link href="/">
                                    Enterprise A
                                </Link>                               
                            </h1>
                        </div> 
                        {/* Desktop: 768px and above */}
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
                </div>
                <div className='block md:hidden'>
                    <nav className="flex items-center justify-between gap-4 mx-6"> 
                        <div className='flex flex-row justify-between gap-2'>
                            <div className='w-6 h-6 bg-amber-100'>
                            </div>  
                            <h1 className='text-xl items-center font-sans dark:text-[#EDEDEC]'>
                                <Link href="/">
                                    Enterprise A
                                </Link>  
                            </h1>
                        </div>
                        <div>
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="size-10 rounded-full p-1"
                                >
                                <SlOptionsVertical className='dark:text-[#EDEDEC]'/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-24" align="end">
                                <div className='flex flex-col'>              
                                    {auth.user ? (
                                        <Link
                                            href={dashboard()}
                                            className="inline-block rounded-sm border border-b-[#19140035] mx-1 px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={login()}
                                                className="inline-block border-b border-[#19140035] mx-1 px-5 py-2 text-sm leading-normal text-[#1b1b18] dark:border-[#3E3E3A] dark:text-[#EDEDEC]"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={register()}
                                                className="inline-block border-b border-[#19140035] mx-1 px-5 py-2 text-sm leading-normal text-[#1b1b18] dark:border-[#3E3E3A] dark:text-[#EDEDEC]"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                    </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </div>
                    </nav>
                </div>              
            </header>
        </>
    );
}
