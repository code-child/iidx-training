function ContactContainer() {
    return (
        <>
            <div className="flex flex-col mx-auto py-24 md:py-32">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 className="text-3xl text-pink-800 tracking-tight font-extrabold sm:text-5xl">Let's talk</h2>
                        <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
                        You can contact us through the form or our Discord server/ If you want to know more about us, kindly follow our social networks!
                        </p>
                    </div>
                </div>
                <div className="max-w-xl mx-auto lg:flex lg:flex-wrap lg:max-w-screen-xl">
                    <div className="mt-12 lg:mt-24 items-center">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                                        <input type="text" id="first_name" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                                        <input type="text" id="last_name" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                                        <input type="text" id="email_address" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
                                        <select id="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>

                                    <div class="col-span-6">
                                        <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                                        <input type="text" id="street_address" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" id="city" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                                        <input type="text" id="state" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                                        <input type="text" id="postal_code" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                    Save
                                    </button>
                                </div>
                                </div>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ContactContainer;