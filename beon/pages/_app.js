import '../styles/index.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

library.add(fab)


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric) {
  console.log(metric)
}