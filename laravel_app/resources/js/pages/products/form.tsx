import { Form, Head, Link, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import products from '@/routes/products';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Product } from '@/types';
import InputError from '@/components/input-error';

type Props = {
    product: Product
}
 
export default function ProductForm({product} : Props) {
    const action = product.id ? products.update.form({product: product.id}) : products.store.form()
    const {url} = usePage()
    return (
        <>
            <Head title="Products" />
            <Form {...action}> 
                {({ errors, processing }) => (


                    <div className="absolute inset-0 flex flex-col items-center gap-4 rounded-xl p-4 md:p-6">
                        <div className="flex w-1/2 justify-between gap-4">
                            <h1 className="text-2xl">
                                {url != '/products/create' ? 'Edit Product' : 'Create Product'}
                            </h1>
                            <Button disabled={processing}>
                                {processing ? 'Saving...' : 'Save Product'}
                            </Button>
                        </div>
                        <div className='grid w-1/2 gap-4'>
                            <div className='flex gap-2 pt-8'>
                                <Card className="md-4 w-full p-4">
                                    <div className="grid w-full gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input 
                                            id="name" 
                                            name="name" 
                                            defaultValue={product.name} 
                                            placeholder="Product Name"
                                            aria-invalid={!!errors.name}
                                        />
                                        <InputError message={errors.name}/>
                                    </div>
                                    <div className="grid w-full gap-2">
                                        <Label htmlFor="name">Description</Label>
                                        <Textarea 
                                            id="description" 
                                            name="description" 
                                            defaultValue={product.description} 
                                            placeholder="Product Description"
                                            
                                        />
                                        <InputError message={errors.description}/>
                                    </div>
                                    <div className="grid w-full gap-2">
                                        <Label htmlFor="name">Type</Label>
                                        <Input 
                                            id="type" 
                                            name="type" 
                                            defaultValue={product.type} 
                                            placeholder="Product Type"
                                            aria-invalid={!!errors.type}
                                            
                                        />
                                        <InputError message={errors.type}/>
                                    </div>
                                    <div className="grid w-full gap-2">
                                        <Label htmlFor="name">Price</Label>
                                        <Input 
                                            id="price" 
                                            name="price"
                                            type="price"
                                            defaultValue={product.price} 
                                            placeholder="Product Price"
                                            aria-invalid={!!errors.price}
                                            
                                        />
                                        <InputError message={errors.price}/>
                                    </div>                                  
                                </Card>
                            </div>
                        </div>
                        <div className='mt-8 flex w-1/2 justify-between'>
                            <Button type="button" variant="secondary">
                                <Link href={products.index()}>
                                    Cancel
                                </Link>
                            </Button>
                            <Button disabled={processing}>
                                {processing ? 'Saving...' : 'Save Product'}
                            </Button>
                        </div>
                    </div>
                )}
                
            </Form>
            
        </>
    );
}

ProductForm.layout = {
    breadcrumbs: [
        {
            title: 'Product',
            href: products.index(),
        },
    ],
};
