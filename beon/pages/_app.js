import '../styles/index.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { DefaultSeo } from 'next-seo'
config.autoAddCss = false

library.add(fab)


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="Insert title"
        description="Insert description"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://code-child.com',
          site_name: 'Code Child',
        }}
      />
      <Component {...pageProps} />
    </>

  )
    
}

export function reportWebVitals(metric) {
  console.log(metric)
}