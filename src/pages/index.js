import React, { useEffect } from 'react'
import Layout from '@/Components/Layout'
import Hero from '@/Components/Homepage/Hero'
import ProperPageGuest from '@/Components/Homepage/Properties/ProperPageGuest'
import PlotsPage from '@/pages/api/VerifiedPlots/PlotsPage'
import Banner from '@/Components/Homepage/Banner'
import AdvicePage from '@/Components/Advice/AdvicePage'
import { useRouter } from 'next/router'
import { useState } from 'react'
import HeroGuest from '@/Components/Homepage/HeroGuest'





const index = () => {

  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)


  return (
    <Layout >
      <HeroGuest />
      <ProperPageGuest />
      <PlotsPage />
      <Banner />
      <AdvicePage />


    </Layout>
  )
}

export default index
