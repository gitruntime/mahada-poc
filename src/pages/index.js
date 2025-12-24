import React from 'react'
import Layout from '@/Components/Layout'
import Hero from '@/Components/Homepage/Hero'
import PropertyPage from '@/Components/Homepage/Properties/ProperPage'
import PlotsPage from '@/Components/VerifiedPlots/PlotsPage'
import Banner from '@/Components/Homepage/Banner'
import AdvicePage from '@/Components/Advice/AdvicePage'




const index = () => {
  return (
    <Layout >
      <Hero/>
     <PropertyPage/>
     <PlotsPage/>
     <Banner/>
     <AdvicePage/>
  
      
    </Layout>
  )
}

export default index
