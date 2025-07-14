import { motion } from 'framer-motion'

export const Experience = () => {
    return (
        <div id="experience-section" className="overflow-hidden">
            <div className="xl:container mx-auto py-6 px-4">
                <div className="flex justify-center md:pt-10">
                    <h2 className="text-3xl font-medium text-[#282828] title__line relative">Experience</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:gap-6 lg:gap-12 mt-10 md:px-8 lg:px-16">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }} >
                        <motion.div className="rounded-md bg-slate-50 shadow-xl p-8" variants={{
                            offscreen: {
                                x: -300,
                                opacity: 0,
                            },
                            onscreen: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8
                                }
                            }
                        }}>
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden"></div>
                                <h4>Unknown April 2024 - Currently</h4>
                            </div>
                            <p className="mt-4">Development of new features for a real estate applications.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Development of new features for analytics application.
                                    </li>
                                    <li>
                                        Development of new features for internal application.
                                    </li>
                                    <li>
                                        Integration of thirty parties.
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className='hidden md:block'></div>
                    <div className='hidden md:block'></div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }} >
                        <motion.div className="rounded-md bg-slate-50 shadow-xl p-8" variants={{
                            offscreen: {
                                x: 300,
                                opacity: 0,
                            },
                            onscreen: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8
                                }
                            }
                        }}>
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="./fuego-logo.jpeg" alt="fuego-logo" />
                                </div>
                                <h4>Fuego Oct 2022 - Oct 2024</h4>
                            </div>
                            <p className="mt-4">
                                In charge of Develop aplications to create expresso on ways never seen before. 
                                <a className="underline text-pink-500" href="https://www.kickstarter.com/projects/meticulous/meticulous-espresso/description" target="_blank">
                                Meticulous
                                </a>
                            </p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Development of animations and transition to create a friendly and intuitive user interface between components and screens.
                                    </li>
                                    <li>
                                        Integration of sockets to display Realtime data.
                                    </li>
                                    <li>
                                        Layout development for mobile, tablet and desktop.
                                    </li>
                                    <li>
                                        Optimization of components to improve performance.
                                    </li>
                                    <li>
                                        Add GitHub actions configurations to deploy new package to NPM.
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className='hidden md:block'></div>
                    <div className='hidden md:block'></div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }} >
                        <motion.div className="rounded-md bg-slate-50 shadow-xl p-8" variants={{
                            offscreen: {
                                x: -300,
                                opacity: 0,
                            },
                            onscreen: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8
                                }
                            }
                        }}>
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden"></div>
                                <h4>Freelance January 2024 - March 2024</h4>
                            </div>
                            <p className="mt-4">Development of new features for a MVP online marketplace.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Development of shopping cart flow (CRUD for orders).
                                    </li>
                                    <li>
                                        Development of feed to list products availables.
                                    </li>
                                    <li>
                                        Development of order section (list of pending, paid and canceled orders).
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className='hidden md:block'></div>
                    <div className='hidden md:block'></div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }} >
                        <motion.div className="rounded-md bg-slate-50 shadow-xl p-8" variants={{
                            offscreen: {
                                x: 300,
                                opacity: 0,
                            },
                            onscreen: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8
                                }
                            }
                        }}>
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="./priv.png" alt="mipriv-logo" />
                                </div>
                                <h4>Priv Social Inc Feb 2021 - Oct 2022</h4>
                            </div>
                            <p className='mt-4'>Development of new website version and integration of new features.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Development of new version of website from scratch.
                                    </li>
                                    <li>
                                        Development of landing-page that caused an increase of 20k USD in revenue every month to the platform.
                                    </li>
                                    <li>
                                        Integration of payments processors such as Paypal, Conekta that caused an increase of 10% in revenue every month to the platform.
                                    </li>
                                    <li>
                                        Development of new flows to allow new functionality that were not available until this new version of website (system of notifications)
                                    </li>
                                    <li>
                                        Integration of thirty parties (intercom, google analytics, algolia)
                                    </li>
                                    <li>
                                        Configuration for new repositories (prettier, commitizen, semantic release)
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className='hidden md:block'></div>
                    <div className='hidden md:block'></div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }} >
                        <motion.div className="rounded-md bg-slate-50 shadow-xl p-8" variants={{
                            offscreen: {
                                x: -300,
                                opacity: 0,
                            },
                            onscreen: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 0.8
                                }
                            }
                        }}>
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="./stackcode.jpeg" alt="mipriv-logo" />
                                </div>
                                <h4>Stackcode Dic 2019 - Feb 2021</h4>
                            </div>
                           <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Development of a dashboard for a restaurant that allows control over kinds of orders and users (CRUD for orders and clients).
                                    </li>
                                    <li>
                                        Development of websites to increase the scope over target users of business like optics, real estate. (using CMS like WordPress)
                                    </li>
                                    <li>
                                        Development of website for a construction company (Responsive design, ajax integration to send information by emails.)
                                    </li>
                                    <li>
                                        Development of layout for delivery website using Angular 8
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>    
                </div>
            </div>
        </div>
    )
}