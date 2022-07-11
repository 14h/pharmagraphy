import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

const Statistics: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='results'/>
            <main className='pb-48'>
            </main>

            <Footer/>
        </>
    );
};

export default Statistics;
