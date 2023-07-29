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
                                <div className="bg-[#191827] h-8 w-8 flex justify-center items-center rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="./fuego-logo.jpeg" alt="mipriv-logo" />
                                </div>
                                <h4>Fuego Oct 2022 - Currently</h4>
                            </div>
                            <p className='mt-4'>In charge of Develop aplications to create expresso on ways never seen before.</p>
                            <div className="mt-4">
                                <ul className="list-disc">
                                    <li>Development of aplications for expresso machine. <a className='underline text-pink-500' href="https://www.kickstarter.com/projects/meticulous/meticulous-espresso/description" target='_blank'>Meticulous</a></li>
                                </ul>
                                <ul className='list-disc'>
                                    <li>
                                        Development of animations and transitions to friendly and intuitive user's interface.
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
                                    <li>Development of Landing page which means an increase imcome of 20k USD every month.</li>
                                    <li>Integration of payment processor such as paypal, which means an increase in month revenue over 10%</li>
                                    <li>Development of new website version.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
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
                                    <li>Development of admin panel for a restaurant to allow have a control over different types of orders and users in the business</li>
                                    <li>Development of websites to increase the reach of the target audience. Establishments such as construction, opticians</li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}