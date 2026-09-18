import { Form, Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import personels from '@/routes/personel';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Personel } from '@/types/personel';
import { Input } from '@/components/ui/input';

type Props = {
    personel: Personel,
};

export default function PersonelForm({personel} : Props) {
    const action = personel.id ? personels.update.form({personel: personel.id}) : personels.store.form();
    return (
        <>  
            <Head title="Personel" />
            <Form {...action}>
                {({ errors, processing }) => (
                    <div className="flex flex-col items-center rounded-xl p-4 md:p-6">
                        {/* Coloca em sitio absoluto, fora do seu container*/}
                        <div className='grid w-2/3 gap-4'>
                            <div className='pt-8'>
                                <Card className="md-4 w-full p-4">
                                    <div className='flex gap-2 justify-between pb-4 border-b'>
                                        <h2 className='text-2xl'>{action ? 'Edit Personel' : 'Create Personel'}</h2>  
                                        <Button className='flex items-center'>
                                            <Save/>
                                            {action ? 'Save Edited Personel' : 'Save New Personel'}
                                        </Button>
                                    </div>
                                    <div className="grid w-full gap-2">
                                        <Label className='pb-2 font-medium' htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            defaultValue={personel.name}
                                            aria-invalid={!! errors.name !!}
                                            placeholder="Personel's name"
                                        />
                                    </div>
                                    <div className="grid w-full gap-2">
                                        <Label className='pb-2 font-medium' htmlFor="name">Post</Label>
                                        <Input
                                            id="post"
                                            name="post"
                                            aria-invalid={!! errors.post !!}
                                            defaultValue={personel.post}
                                            placeholder="Personel's post assigned"
                                        />
                                    </div>
                                    <div className="grid w-full gap-2">
                                        <Label className='pb-2 font-medium' htmlFor="name">Location</Label>
                                        <Input
                                            id="local"
                                            name="local"
                                            aria-invalid={!! errors.local !!}
                                            defaultValue={personel.local}
                                            placeholder="Personel's work localization"
                                        />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                )}
            </Form>
        </>
    );
}

PersonelForm.layout = {
    breadcrumbs: [
        {
            title: 'Personel',
            href: personels.index(),
        },
    ],
};
