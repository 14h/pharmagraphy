import Head from 'next/head';
import React from 'react'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { Animated } from '../components/animated';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

const Demo = () => {
    const AuthUser = useAuthUser();

    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='about'/>
            <main className='text-white pb-48 max-w-4xl mx-auto pt-32'>
                <div className='max-w-screen-5xl mx-auto'>
                    <Animated delay={75} className='font-thin text-6xl text-white'>
                        About us {AuthUser?.email}
                    </Animated>
                    <br/>
                    <Animated delay={75} className='w-48 border-2 border-solid border-accent-8'/>
                    <br/>

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

}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Demo)
