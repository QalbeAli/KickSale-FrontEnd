import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Display from './components/Display'
import Tier from './components/Tier'
import Faqs from './components/Faqs'
import Ethereum from './components/Ethereum'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KickSale</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <Navbar />
    <Hero />
    <Display />
    <Tier />
    <Faqs />
    <Ethereum />
    <Footer />

    </div>
  )
}

export default Home
