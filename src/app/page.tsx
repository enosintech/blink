import About from '@/components/about';
import Clients from '@/components/clients';
import Footer from '@/components/footer';
import Hero from '@/components/hero'
import Highlights from '@/components/highlights';
import Services from '@/components/services';
import Video from '@/components/video';
import Work from '@/components/work';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Highlights />
      <Work />
      <Clients />
      <Video />
      <Footer />
    </div>
  )
}

export default Home;

