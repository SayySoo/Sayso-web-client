import FAQ from '@/components/landing/FAQ'
import Footer from '@/components/landing/footer'
import Hero from '@/components/landing/hero-section'
import Navbar from '@/components/landing/navbar'
import Testimonials from '@/components/landing/testimonials'
import Workflow from '@/components/landing/work-flow'
import React from 'react'

export default function Home() {
  return (
     <>
     <main className='min-h-screen'>
      <Navbar/>
      <Hero/>
      <Workflow/>
      <Testimonials/>
      <FAQ/>
      <Footer/>

     </main>
     </>
  )
}