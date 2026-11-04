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
                                    <img className="w-full h-full object-cover" src="./datoz-logo.jpg" alt="datoz-logo" />
                                </div>
                                <h4>Datoz Oct 2024 - Present</h4>
                            </div>
                            <p className="mt-4">Building new features for a real estate intelligence platform.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                     <li>
                                       Integrated LLMs with prompt and token optimization strategies, cutting context usage by 20% while keeping answers accurate.
                                    </li>
                                    <li>
                                        Implemented analytics and event tracking to drive product and UX decisions.
                                    </li>
                                    <li>
                                        Shipped new features for the internal operations application.
                                    </li>
                                    <li>
                                        Refined the UI layout and information hierarchy so key metrics are easier to scan and users stay oriented in complex workflows.
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
                                <h4>Freelance Oct 2024 - Apr 2025</h4>
                            </div>
                            <p className="mt-4">Built new features for a no-code site builder.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                      Added new modules to the low-code platform, enabling new workflows without extra engineering effort.
                                    </li>
                                    <li>
                                        Delivered theme-based style customization so teams can launch brand-consistent pages in minutes.
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
                                    <img className="w-full h-full object-cover" src="./fuego-logo.jpg" alt="fuego-logo" />
                                </div>
                                <h4>Fuego Oct 2022 - Oct 2024</h4>
                            </div>
                            <p className="mt-4">
                                Built the apps for{' '}
                                <a className="underline text-pink-500" href="https://www.kickstarter.com/projects/meticulous/meticulous-espresso/description" target="_blank">
                                Meticulous
                                </a>, a smart espresso machine that makes coffee in ways never seen before.
                            </p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Designed animations and transitions for a smooth, intuitive experience across components and screens.
                                    </li>
                                    <li>
                                        Integrated WebSockets to display real-time machine data.
                                    </li>
                                    <li>
                                        Built responsive layouts for mobile, tablet and desktop.
                                    </li>
                                    <li>
                                        Optimized components to improve rendering performance.
                                    </li>
                                    <li>
                                        Set up GitHub Actions pipelines to publish packages to npm.
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
                                <h4>Freelance Jan 2024 - Mar 2024</h4>
                            </div>
                            <p className="mt-4">Built core features for an online marketplace MVP.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Implemented the shopping cart and order management flow.
                                    </li>
                                    <li>
                                        Built the product feed to browse available items.
                                    </li>
                                    <li>
                                        Created the orders section to track pending, paid and canceled orders.
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
                            <p className='mt-4'>Rebuilt the website and shipped new features for a social network that connects creators with fans.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Rebuilt the website from scratch.
                                    </li>
                                    <li>
                                        Built a landing page that increased platform revenue by $20K USD per month.
                                    </li>
                                    <li>
                                        Integrated payment processors (PayPal, Conekta), increasing monthly revenue by 10%.
                                    </li>
                                    <li>
                                        Developed new flows that unlocked features unavailable in the previous version, such as a notification system.
                                    </li>
                                    <li>
                                        Integrated third-party services (Intercom, Google Analytics, Algolia).
                                    </li>
                                    <li>
                                        Set up repository tooling and conventions (Prettier, Commitizen, semantic-release).
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
                                    <img className="w-full h-full object-cover" src="./stackcode.jpg" alt="stackcode-logo" />
                                </div>
                                <h4>Stackcode Dec 2019 - Feb 2021</h4>
                            </div>
                            <p className="mt-4">Built web apps and websites for clients at a software consultancy.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>
                                        Built a restaurant dashboard to manage orders and customers.
                                    </li>
                                    <li>
                                        Built WordPress websites that helped businesses such as optical stores and real estate agencies reach more customers.
                                    </li>
                                    <li>
                                        Built a responsive website for a construction company with AJAX-powered contact forms.
                                    </li>
                                    <li>
                                        Developed the front-end layout for a delivery website with Angular 8.
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