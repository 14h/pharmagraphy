import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: NextPage = () => {

    return (
        <div className='absolute bottom-0 bg-transparent px-4 lg:px-16 py-4 lg:py-16 flex flex-col lg:flex-row justify-between items-center lg:items-end text-white'>
            <div>
                © 2022 All rights reserved.
            </div>
        </div>
    );
};
