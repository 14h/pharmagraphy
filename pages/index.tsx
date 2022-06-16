import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const Home: NextPage = () => {
    return (
        <div className='relative h-full overflow-hidden'>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='home'/>

            <main className='flex flex-row justify-center items-center'>

                <div className='text-white text-2xl p-64 text-center'>
                    <span className='text-accent-3 font-bold text-3xl'>Pharmagraphy</span> is an interactive library of drugs, plants and fungi <br/>
                    analysis results. The database contains results from peer-reviewed publications, <br/>
                    harm-reduction NGOs and home users using TLC and reagents. <br/>
                    <span className='text-accent-5 font-bold'>Join</span> if you want to add your results!
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default Home;
