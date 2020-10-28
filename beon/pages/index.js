import Head from 'next/head'
import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import { createContext } from 'react'
import Homies from '../pages/home/main'

export const globalContext = createContext()

const { Provider } = globalContext

export default function Home({ title }) {

  return (
    <Provider>
      <Layout>
        <NextSeo title={title} />
        <Homies />
      </Layout>
    </Provider>
  )
}
