import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Container from './container'

const name = 'jojobudiman'
export const siteTitle = 'Beatmania IIDX'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Header />
      <Container>
        <div className="flex-1 w-full p-4 mx-auto md:px-8 md:py-16">   
        {children}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;

Layout.PropTypes = {
  children: PropTypes.node.isRequired
}