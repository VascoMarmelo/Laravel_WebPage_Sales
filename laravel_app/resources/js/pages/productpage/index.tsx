import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import FrontPage from '../frontpage/index';
import NavBar from '../frontpage/navbar';
import Footer from '../frontpage/footer';
import { Product } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CardImage } from '../shadcn_blocks/cardimage';

type Props = {
    product: Product;
}

export default function ProductPage({productProp} : Props) {
    
    const { auth } = usePage().props;

    let product = productProp.product;

    console.log(product)

    if (Array.isArray(product.data)){  
        return (
            <div className='m-10 grow'>
                <h2 className='text-4xl font-bold px-1 mb-1'>{product.data[0].type}</h2>
                <div className='m-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4'>
                    {product.data.map((elem, index) => (
                        <div className="">
                            <CardImage product={elem}/>
                        </div>
                    ))}
                </div>
                <div className="mt-1 flex items-center justify-between">
                    <p className='text-sm text-muted-foreground'>
                        Showing page {product.meta.current_page} of {' '}
                        {product.meta.last_page} ({product.meta.total}{' '} total item)
                    </p>
                    {product.meta.links && product.meta.links.length > 1 && (
                        <div className='flex gap-1'>
                            {product.meta.links.map((link:any, index:any) => (
                                <Button 
                                    key={index}
                                    variant='ghost'
                                    size="sm"
                                    disabled={!link.url}
                                    asChild    
                                >
                                    <Link href={link.url || '#'} className={link.active ? 'bg-accent' : ''}>
                                        <span dangerouslySetInnerHTML={{ __html:link.label }}/>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
    else{
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
}