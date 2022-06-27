import { useAuthUser } from 'next-firebase-auth';
import React, { useState } from 'react';
import Link from 'next/link';
import FirebaseAuth from './FirebaseAuth';

type TProps = {
    selected: 'about' | 'home' | 'add-results' | 'faq' | 'results';
}

export const Header = ({selected}: TProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const AuthUser = useAuthUser();

    return (
        <div className='fixed w-full px-4 lg:px-16 text-white transition-all ease-in duration-75 bg-black'>
            <div className='py-8 flex justify-between'>
                <div className='flex flex-row justify-center items-center hidden lg:flex'>
                    <Link href='/'>
                        <div className={`p-2 px-8 transition-all ease-in duration-75 hover:bg-accent-6 cursor-pointer text-xl ${selected === 'home' ? 'bg-accent-5' : ''}`}>
                            HOME
                        </div>
                    </Link>
                    <Link href='/results'>
                        <div className={`p-2 px-8 transition-all ease-in duration-75 hover:bg-accent-6 cursor-pointer text-xl ${selected === 'results' ? 'bg-accent-5' : ''}`}>
                            TEST RESULTS
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div className={`p-2 px-8 transition-all ease-in duration-75 hover:bg-accent-6 cursor-pointer text-xl ${selected === 'add-results' ? 'bg-accent-5' : ''}`}>
                            ADD YOUR RESULTS
                        </div>
                    </Link>
                    <Link href='/faq'>
                        <div className={`p-2 px-8 transition-all ease-in duration-75 hover:bg-accent-6 cursor-pointer text-xl ${selected === 'faq' ? 'bg-accent-5' : ''}`}>
                            FAQ
                        </div>
                    </Link>
                    <Link href='/about'>
                        <div className={`p-2 px-8 transition-all ease-in duration-75 hover:bg-accent-6 cursor-pointer text-xl ${selected === 'about' ? 'bg-accent-5' : ''}`}>
                            ABOUT US
                        </div>
                    </Link>
                </div>

                {
                    AuthUser.email ?
                        (<div className={`p-2 px-8 transition-all ease-in duration-75 hover:bg-accent-6 cursor-pointer text-xl`}> {AuthUser.email}</div>) : (
                            <FirebaseAuth />
                        )
                }

            </div>
            {
                open && (
                    <div className='flex flex-col justify-center items-center'>
                        <Link href='/'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'home' ? 'text-accent-8' : ''}`}>
                                Home
                            </div>
                        </Link>
                        <Link href='/services'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'add-results' ? 'text-accent-8' : ''}`}>
                                Our services
                            </div>
                        </Link>
                        <Link href='/about'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'about' ? 'text-accent-8' : ''}`}>
                                Who we are
                            </div>
                        </Link>
                        <Link href='/news'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'results' ? 'text-accent-8' : ''}`}>
                                News
                            </div>
                        </Link>
                        <Link href='/results'>
                            <div className={`p-8 transition-all ease-in duration-75 hover:text-accent-8 cursor-pointer text-xl ${selected === 'results' ? 'text-accent-8' : ''}`}>
                                Results
                            </div>
                        </Link>
                        <Link href='mailto:info@kykeonanalytics.com'>
                            <div
                                className='px-8 py-4 my-4 bg-accent-8 text-black font-bold transition-all duration-75 ease-in hover:bg-accent-9 cursor-pointer text-xl shadow-xl rounded-lg'
                            >
                                CONTACT US
                            </div>
                        </Link>
                        <br/>
                        <br/>
                    </div>
                )
            }
        </div>
    );
};
