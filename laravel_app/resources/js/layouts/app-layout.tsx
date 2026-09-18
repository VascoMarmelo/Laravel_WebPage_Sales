import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { toast } from 'sonner';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {

    const page = usePage();

    useEffect(() => {
        if (page.props.flash.message){
            toast.success(page.props.flash.message);
        }
        if (page.props.flash.error){
            toast.error(page.props.flash.error);
        }
    }, [page.props.flash]);

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            <Toaster position='top-center' richColors/>
            {children}
        </AppLayoutTemplate>
    );
}
