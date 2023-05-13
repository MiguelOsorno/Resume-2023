export const Experience = () => {
    return (
        <div className="">
            <div className="xl:container mx-auto p-4">
                <div className="flex justify-center mt-12">
                    <h2 className="text-3xl font-medium text-[#282828] title__line relative">Experience</h2>
                </div>
                <div className="grid grid-cols-2 gap-12 mt-10 px-16">
                    <div className="rounded-md bg-slate-50 shadow-xl p-8">
                        <div className="flex items-center space-x-2">
                            <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src="/fuego-logo.jpeg" alt="mipriv-logo" />
                            </div>
                            <h4>Fuego</h4>
                        </div>
                        <div className="mt-4">
                            <ul className="list-disc">
                                <li>Development of Dashboard for expresso machine.</li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="rounded-md bg-slate-50 shadow-xl p-8">
                        <div className="flex items-center space-x-2">
                            <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src="/priv.png" alt="mipriv-logo" />
                            </div>
                            <h4>Priv Social Inc.</h4>
                        </div>
                        <div className="mt-4">
                            <ul className="list-disc">
                                <li>Development of Landing page.</li>
                                <li>Integration of payment processor such as paypal and conekta.</li>
                                <li>Development of new website version using MERN Stack.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-md bg-slate-50 shadow-xl p-8">
                        <div className="flex items-center space-x-2">
                            <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src="/stackcode.jpeg" alt="mipriv-logo" />
                            </div>
                            <h4>Stackcode</h4>
                        </div>
                        <div className="mt-4">
                            <ul className="list-disc">
                                <li>Development of Dashboard for a restaurant using AngularJS.</li>
                                <li>Development of websites using Angular 10, JS, CSS3, JQuery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}