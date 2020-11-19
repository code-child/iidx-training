import Link from 'next/link'
import Image from 'next/image'

function AboutContainer() {
    return (
        <>
            <div className="flex flex-col mx-auto p-16 lg:py-32">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 className="text-3xl text-pink-800 tracking-tight font-extrabold sm:text-5xl">An independent community</h2>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                        </p>
                    </div>
                </div>
                <div className="lg:flex lg:flex-warp pt-12">
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="mx-auto h-full flex justify-center items-center">
                            <Image src="/img/beon-cabinets.jpg" alt="BEON Cabinets" width={611} height={298} layout="intrinsic" className="rounded" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <h2 className="text-2xl">POGGERS</h2>
                        <p className="w-full text-base">This is a pen!</p>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default AboutContainer;