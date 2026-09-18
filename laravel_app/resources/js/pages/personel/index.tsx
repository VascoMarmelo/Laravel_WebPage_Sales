import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import personels from '@/routes/personel';
import { Button } from '@/components/ui/button';
import { Pen, Save, Trash } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Personel } from '@/types/personel';


type Props = {
    collection: Personel;
}

export default function PersonelIndex({collection} : Props) {


    const onDelete = (personel: any) => {
        if (window.confirm("Are you sure you want to delete this product ?")){
            router.delete(personels.destroy(personel))
        }
    }

    return (
        <>
            <Head title="Personel" />
            <div className="h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Coloca em sitio absoluto, fora do seu container*/}
                <div className="absolute top-3 flex items-center justify-end gap-2 right-4">
                    <Button asChild className='p-2'>
                        <Link className='flex gap-2 items-center' href={personels.create()}>
                            <Save />
                            Add Personel
                        </Link>                    
                    </Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Post</TableHead>
                            <TableHead>Local</TableHead>
                            <TableHead className='text-end'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {collection.data.map((item: any) => (
                            <TableRow>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.post}</TableCell>
                                <TableCell>{item.local}</TableCell>
                                <TableCell className='text-end'>
                                    <Button asChild size='sm' className='mr-2 hover:bg-gray-600' variant='secondary'>
                                        <Link href={personels.edit(item)}><Pen></Pen></Link>
                                    </Button>
                                    <Button size='sm' className='mr-2 hover:bg-red-800' onClick={() => onDelete(item)} variant='destructive'><Trash></Trash></Button>
                                </TableCell>
                            </TableRow>
                        ))}                      
                    </TableBody>
                </Table>
                
            </div>
        </>
    );
}

PersonelIndex.layout = {
    breadcrumbs: [
        {
            title: 'Personel',
            href: personels.index(),
        },
    ],
};
