import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Animated } from '../components/animated';
import Image from 'next/image';

const Results: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='services'/>
            <main className='pb-48'>
            </main>

            <Footer/>
        </>
    );
};

export default Results;
