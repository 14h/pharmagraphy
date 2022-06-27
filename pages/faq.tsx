import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const Faq: NextPage = () => {

    return (
        <>
            <Head>
                <title>Kykeon Analytics</title>
                <meta name="description" content="Kykeon Analytics"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header selected='faq'/>
            <div className='text-white max-w-4xl mx-auto pt-64'>
                <p><strong>How can I test my samples?</strong></p>
                <br/>
                <p>
                    If you want to test at home, you can test with TLC (recommended). To
                    learn how TLC works or tips on interpreting the results,
                    <a href="https://www.dmt-nexus.me/forum/default.aspx?g=posts&amp;t=91678"><u>click here</u></a>.
                </p>
                <br/>
                <p>
                    There are at the moment two TLC kit providers, bunk police or
                    protestkit.eu
                </p>
                <br/>
                <p>
                    A significantly cheaper and easier, but much less reliable method, is
                    simply using a reagent kit. It is highly recommended to use TLC or other
                    lab methods described below to prevent issues of misidentification or
                    hidden adulterants. If you insist in using just reagents, please use
                    multiple reagents, the more different reagents you use the better. You
                    can find a list of suppliers
                    &nbsp;<a href="https://www.dmt-nexus.me/forum/default.aspx?g=posts&amp;t=25771"><u>here</u></a>, and an
                    explanation how it works
                    &nbsp;<a href="https://www.dmt-nexus.me/forum/default.aspx?g=posts&amp;m=260190"><u>here</u></a></p>
                <br/>
                <p>
                    You can also hire a professional lab to test for you with GC or LC-MS,
                    NMR or other methods. The prices can be free for local users in some
                    countries in Europe, to paid services costing 40USD to 150USD per
                    analysis. Below is a list of some of the known lab services:

                </p>
                <br/>
                <p>International Services:</p>
                <p><a href="https://energycontrol-international.org/"><u>Energy
                    Control</u></a>
                    (based in Spain but receives international samples) - 60 - 120 euros
                    depending on type of substance and test
                </p>
                <br/>
                <p>UK:</p> <p><a href="https://wearetheloop.org/"><u>The loop</u></a> -
                </p> <p><a href="https://wedinos.org/"><u>WEDINOS (Wales)</u></a> -
                </p>
                <br/>
                <p>USA:</p> <p><a href="https://www.solarisanalytical.com/services"><u>Solaris Analytical</u></a>
                    - 40USD per sample
                </p> <p><a href="https://drugsdata.org/contact.php"><u>Drugsdata.org</u></a> -
                    100USD per sample
                </p>
                <br/>
                <p>Netherlands:</p> <p><a
                    href="https://www.jellinek.nl/preventie/horeca/drugs-test-service/"><u>Jellinek</u></a>
                    - Free for local residents
                </p>
                <br/>
                <p>Austria:</p> <p><a href="https://checkit.wien/"><u>Checkit</u></a> - Free for local
                    residents (??)
                </p> <p><a href="https://www.drogenarbeitz6.at/mda-basecamp.html"><u>MDA Basecamp</u></a>
                    - ??
                </p>
                <br/>
                <p>Italy:</p> <p><a href="http://coopalice.net/baonps/"><u>BAONPS</u></a> -
                </p>
                <br/>
                <p>Switzerland:</p> <p><a href="https://saferparty.ch/drug-checking.html"><u>Saferparty.ch</u></a>
                    - Free for local residents (??)
                </p>
                <br/>
                <p>Spain</p> <p><a href="https://energycontrol-international.org/"><u>Energy Control</u></a>
                    (based in Spain but receives international samples) - Free or up to 30e
                    for local residents, 60 - 120 euros for international samples or
                    specialized tests
                </p>
                <br/>
                <br/>
                <p><strong>How can I properly identify a plant of interest?</strong></p>
                <br/>
                <p>
                    We are not a plant identification website. Please at least tentatively
                    identify your plant of interest before adding results to our database.
                    Check
                    <a href="https://wiki.dmt-nexus.me/FAQ#Does_this_plant_contain_DMT_.3F"><u>this</u></a>
                    for more info and tips on identifying plants
                </p>
                <br/>
                <br/>
                <p><strong>Are results trustable?</strong></p>
                <br/>
                <p>
                    The results in the database follow a standardized classification of
                    reliability. Please check the reliability level of the result in
                    question. This classification is based on the methodology used for the
                    test, (so for example an LC-MS test will always be considered more
                    reliable than a simple reagent test) as well as the level of the user
                    adding the results. By default, new users results will appear as low
                    trust level, while verified users, NGOs and peer reviewed publications
                    added by verified users will have a higher trust level. By default, low
                    reliability results do not appear in searches and must be specifically
                    toggled to appear in search results. Please trust only results that are
                    green in reliability scale. *
                </p>
                <br/>
                <br/>
                <p><strong>Can anybody add results to the database?</strong></p>
                <br/>
                <p>
                    In short, yes. You must register in the database, but as an unverified
                    member, your added results will naturally have a low trust level. In
                    order to become a verified member, you need to add a minimum of 10 test
                    results that have mass spectra and/or videos and pictures of your
                    results, and then mods will automatically check your if the results you
                    added are correctly interpreted. If so, you will be verified, which will
                    raise the trust level of your results in the database.
                </p>
                <br/>
                <br/>
                <p><strong>How can I become a verified member?</strong></p>
                <br/>
                <p>
                    In order to become a verified member, you need to add a minimum of 10
                    test results that have mass spectra and/or videos and pictures of your
                    results, and then mods will automatically check your if the results you
                    added are correctly interpreted. If so, you will be verified, which will
                    raise the trust level of your results in the database.
                    <br/>
                </p>
                <br/>
                <br/>
                <p><strong>I have noticed a bug or there's something I can't understand about
                    this page</strong></p>
                <br/><p>Please contact us pharmagraphy@abdallah.dev</p>
            </div>

            <div className='bottom-0 bg-transparent px-4 lg:px-16 py-4 lg:py-16 flex flex-col lg:flex-row justify-between items-center lg:items-end text-white'>
                <div>
                    © 2022 All rights reserved.
                </div>
            </div>
        </>
    );
};

export default Faq;
