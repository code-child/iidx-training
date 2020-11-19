import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import { createContext } from 'react'
import Abouties from '../pages/about/main'

export const globalContext = createContext()

const { Provider } = globalContext

export default function About({title}) {
    return (
        <Provider>
            <Layout>
                <NextSeo title={title} />
                <Abouties />
            </Layout>
        </Provider>
    )
}
