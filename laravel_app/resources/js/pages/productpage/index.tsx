import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import FrontPage from '../frontpage/index';
import NavBar from '../frontpage/navbar';
import Footer from '../frontpage/footer';
import { Product } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
    product: Product;
}

export default function ProductPage({productProp} : Props) {
    
    const { auth } = usePage().props;

    let product = productProp.product;

    /*return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
                <div className="my-4 flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-stretch">
                    <div className='flex-1'>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="relative z-20 aspect-video w-full object-cover brightness-60 basis-full"
                        />
                    </div>
                    <Card className="w-full max-w-sm flex-column basis-full mx-2">
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>
                                {product.price}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-auto">
                            {product.description}
                        </CardContent>
                        <CardFooter className="justify-end gap-2">
                            <Button>Buy</Button>
                        </CardFooter>
                        </Card>
                </div>        
            </div>            
        </>
    );*/
    
    
    return (
        <div className='container mx-auto grow flex justify-center'>
            <div className='mx-2 my-10 block md:hidden'>
                <Card className="flex-column mx-5 mb-2">
                    <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-auto">
                        <div className='flex-1'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="object-full aspect-video"
                            />
                        </div>
                        <div className="flex-auto mx-2 mt-2 text-md font-bold">
                            {product.price} €
                        </div>
                        <div className='mt-4'>
                            <Button className='w-full'>Buy</Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex-column mx-5 mb-2">
                    <CardHeader>
                        <CardTitle>Description</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-auto">
                        <div className='mx-1'>
                            {product.description}
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='mx-2 my-10 flex-col grow hidden md:block'>
                <div className="">
                    <div className="mx-5 mb-2 flex flex-row">
                        <Card className='mr-3'>
                            <CardContent className="flex-auto">
                                <div className=''>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className=""
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='min-w-1/2'>
                            <CardContent className=''>
                                <CardTitle className='text-2xl py-2'>{product.name}</CardTitle>
                                <div className="flex-auto text-md font-bold">
                                    {product.price} €
                                </div>
                                <div className='mt-4'>
                                    <Button className='w-full'>Buy</Button>
                                </div>
                                <div className='mx-1 my-10'>
                                    {product.description}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}