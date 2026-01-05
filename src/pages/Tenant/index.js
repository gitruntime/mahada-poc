import React, { useEffect } from 'react'
import Layout from '@/Components/Layout'
import HeroT from '@/Components/Homepage/HeroT'
import ProperPageTenant from '@/Components/Homepage/Properties/ProperPageTenant'
import PlotsPage from '@/pages/api/VerifiedPlots/PlotsPage'
import Banner from '@/Components/Homepage/Banner'
import AdvicePage from '@/Components/Advice/AdvicePage'
import { useRouter } from 'next/router'
import { useState } from 'react'





const index = () => {

  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)


  return (
    <Layout >
      <HeroT />
      <ProperPageTenant />
      <PlotsPage />
      <Banner />
      <AdvicePage />


    </Layout>
  )
}

export default index
