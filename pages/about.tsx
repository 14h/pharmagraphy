import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Animated } from '../components/animated';

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pharmagraphy</title>
                <meta name="description" content="Pharmagraphy"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='about'/>
            <main className='text-white pb-48 max-w-4xl mx-auto pt-32'>
                <div className='max-w-screen-5xl mx-auto'>

                    <br/>
                    Eleusis database is a non-profit endeavor with the aim of disseminating reliable analysis information of drugs and plants. We aim to spread this information for professionals, researchers, students, home chemists and others interested
                    <br/>
                    The Eleusis Database workgroup is composed of professionals and volunteers, including:
                    <br/>
                    Endlessness @@ DMT-Nexus
                    <br/>
                    The Traveler @@ DMT-Nexus
                    <br/>
                    Vodsel @@ DMT-Nexus
                    <br/>
                    Safrol @@ DMT-Nexus
                    <br/>
                    If you are looking to help financially, please donate to: XXXXXXX
                    <br/>
                    If you want to help, contribute or collaborate in other ways, please write to us: XXXX@XXXX.com
                </div>
            </main>

            <Footer/>
        </>
    );
};

export default About;
