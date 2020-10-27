import Head from 'next/head'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { createContext } from 'react'

export const globalContext = createContext()

const { Provider } = globalContext

export default function Home() {
  return (
    <Provider>
    <SEO title="Home" keywords={[
      `beatmania`, `iidx`, `jojobudiman`
    ]} />
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="p-4 shadow rounded bg-white">
          <h1 className="text-purple-500 leading-normal">Next.js</h1>
          <p className="text-gray-500">with Tailwind CSS</p>
        </div>
      </div>
    </Layout>
    </Provider>
  )
}
