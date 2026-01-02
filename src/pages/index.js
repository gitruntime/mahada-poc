import React, { useEffect } from 'react'
import Layout from '@/Components/Layout'
import Hero from '@/Components/Homepage/Hero'
import PropertyPage from '@/Components/Homepage/Properties/ProperPage'
import PlotsPage from '@/pages/api/VerifiedPlots/PlotsPage'
import Banner from '@/Components/Homepage/Banner'
import AdvicePage from '@/Components/Advice/AdvicePage'
import { useRouter } from 'next/router'
import { useState } from 'react'





const index = () => {

  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    // runs only on client
    const auth = sessionStorage.getItem("isAuthenticated")

    if (!auth) {
      router.replace("/choose")
    } else {
      setIsAuthorized(true)
    }
  }, [router])

  
  if (!isAuthorized) return null

  return (
    <Layout >
      <Hero />
      <PropertyPage />
      <PlotsPage />
      <Banner />
      <AdvicePage />


    </Layout>
  )
}

export default index
