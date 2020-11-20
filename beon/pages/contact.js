import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import { createContext } from 'react'
import Contacties from '../pages/contact/main'

export const globalContext = createContext()

const { Provider } = globalContext

export default function Contact({title}) {
    return (
        <Provider>
            <Layout>
                <NextSeo title={title} />
                <Contacties />
            </Layout>
        </Provider>
    )
}
