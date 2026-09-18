import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Footer() {
    return (
        <footer className="mt-12 w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Timu
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">
                        Built for power users. Computacional fast, simple, and made to get
                        things done.
                    </p>
                </div>
                {/* Links */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <a
                        href="#"
                        className="text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                        About
                    </a>

                    <a
                        href="#"
                        className="text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                        Features
                    </a>

                    <a
                        href="#"
                        className="text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                        Contact
                    </a>

                    <a
                        href="#"
                        className="text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                        Privacy
                    </a>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between dark:text-gray-400">
                    <p>
                        © {new Date().getFullYear()} YourBrand. All rights
                        reserved.
                    </p>

                    <p>
                        Built with Laravel & React
                    </p>
                </div>
            </div>
        </footer>
    );
}

