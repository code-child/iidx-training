import dynamic from 'next/dynamic'

const Home = dynamic(() => import('../pages/home/main'))

function Homepage() {
    return (
        <>
          <Home />
        </>
    )
}

export default Homepage;