import Link from 'next/link'
import Image from 'next/image'

function HomeContainer() {

  return (
    <>
        <div className="md:px-20 md:py-40">
            <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                        An <span className="text-pink-800">independent {` `}</span>
                        <br className="xl:hidden" />
                        community
                    </h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        As a wonderful opportunity to further grow and expand the BEMANI community in our local region,  a sub community was created under the umbrella of BEMANI Indonesia, beginning with our location at AEON Mall BSD City.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                            Learn more
                            </a>
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link href="/">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-300 focus:outline-none focus:shadow-outline-pink focus:border-pink-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                            How to join
                            </a>
                            </Link>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img/beon.png" alt="BEON Community" layout="fill" />
        </div>
    </>
  );
}

export default HomeContainer;