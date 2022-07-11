import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const AddResults: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='add-results'/>
            <main className='pb-48'>
            </main>

            <Footer/>
        </>
    );
};

export default AddResults;
