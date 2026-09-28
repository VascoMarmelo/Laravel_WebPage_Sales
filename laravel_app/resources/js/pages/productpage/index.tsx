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

    return (
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
    );
    
    
    return (
        <div>

        </div>
    );
}