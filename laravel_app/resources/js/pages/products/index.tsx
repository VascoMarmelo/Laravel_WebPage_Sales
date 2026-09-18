import { Form, Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import products from '@/routes/products';
import { Pencil, Save, Search, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';

type Props = {
    collection: Product;
    search: string | null
}

export default function ProductIndex({collection, search}: Props) {
    console.log('collection', collection)

    const onDelete = (product: any) => {
        if (window.confirm("Are you sure you want to delete this product ?")){
            router.delete(products.destroy(product))
        }
    }
    return (
        <>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="absolute top-1.5 flex items-center justify-end gap-2 right-4">
                    <Button>
                        <Link href={products.create()} className="flex gap-1">
                            <Save />
                            Add Product
                        </Link>
                    </Button>
                </div>
                <div className='mb-0'>
                    <Form method='get' href='/products' className="flex gap-2">
                        <Input placeholder='Search Product' name="search" defaultValue={search ?? ''} className='max-w-sm'/>
                        <Button type='submit' variant="secondary">
                            <Search/> Search
                        </Button> 
                    </Form>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className='text-end'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {collection.data.map((item: any) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell className='text-end'>
                                    <Button size='sm' className='mr-2' variant='secondary'>
                                        <Link href={products.edit(item.id)}>
                                            <Pencil/>
                                        </Link>              
                                    </Button>    
                                    <Button 
                                        size='sm' 
                                        className='mr-2' 
                                        title='Delete' 
                                        variant='destructive'
                                        onClick={() => onDelete(item)}    
                                    >
                                        <Trash/>            
                                    </Button> 
                                </TableCell>                                    
                            </TableRow>
                        ))}
                        </TableBody>
                </Table>
                <div className="mt-1 flex items-center justify-between">
                    <p className='text-sm text-muted-foreground'>
                        Showing page {collection.meta.current_page} of {' '}
                        {collection.meta.last_page} ({collection.meta.total}{' '} total item)
                    </p>
                    {collection.meta.links && collection.meta.links.length > 1 && (
                        <div className='flex gap-1'>
                            {collection.meta.links.map((link:any, index:any) => (
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
        </>
    );
}

ProductIndex.layout = {
    breadcrumbs: [
        {
            title: 'Product',
            href: products.index(),
        },
    ],
};
