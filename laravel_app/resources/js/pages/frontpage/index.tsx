import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import { CardImage } from '../shadcn_blocks/cardimage';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

type Props = {
    collection: Product;
    search: string | null
}

export default function FrontPage({collection} : Props) {
    
    const { auth } = usePage().props;

    let carrouselSize = 10;

    return (
        <>
            <div className="flex flex-col w-full h-full justify-center dark:bg-black dark:text-[#EDEDEC]">
                <div className="flex items-center gap-4 xs:max-h-full xl:max-h-96 overflow-hidden">
                    <img className="h-full
                        max-w-2/3
                        object-cover
                        [mask-image:radial-gradient(100%_100%_at_left,black_40%,transparent_100%),linear-gradient(to_bottom,black_75%,transparent_100%)]
                        [mask-composite:intersect]
                    " src="/storage/images/banner.jpg" alt="Banner" />
                    <div className="font-medium">
                        <p className="font-mono text-xs text-blue-500 uppercase dark:text-blue-400">Speed</p>
                        <p className="mt-2 text-base text-gray-700 dark:text-gray-300">Built for power users</p>
                        <p className="mt-1 text-sm leading-relaxed text-balance text-gray-500">
                        Work faster than ever with customizable desktop components
                        </p>
                    </div>
                </div>
                <div className="relative w-full p-4 mt-5">
                    <h4 className='text-xl font-bold px-1 border-b dark:border-gray-800 mb-1'>Used Laptops</h4>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full py-1"
                    >
                        <CarouselContent>
                            {Array.from({ length: carrouselSize }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8"
                                >
                                    <div className="p-1">
                                        <CardImage />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="hidden lg:flex left-2" />
                        <CarouselNext className="hidden lg:flex right-2" />
                    </Carousel>
                    <Button className='flex m-auto mt-4'>View More</Button>
                </div>
                <div className="relative w-full p-4 mt-5">
                    <h4 className='text-xl font-bold px-1 dark:border-gray-800 border-b mb-1'>Used Desktops</h4>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full py-1"
                    >
                        <CarouselContent>
                            {Array.from({ length: carrouselSize }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8"
                                >
                                    <div className="p-1">
                                        <CardImage />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="hidden lg:flex left-2" />
                        <CarouselNext className="hidden lg:flex right-2" />
                    </Carousel>
                    <Button className='flex m-auto mt-4'>View More</Button>
                </div>
            </div>
        </>
    );
}
