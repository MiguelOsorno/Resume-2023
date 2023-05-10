
export const Cover = (): JSX.Element => {
    return (
        <div className="h-[450px] relative">
            <img className="h-full w-full object-cover absolute" src="https://phantom-expansion.unidadeditorial.es/42a6fd905354817f2133e4818947738e/crop/0x689/2041x1836/resize/1200/f/webp/assets/multimedia/imagenes/2022/06/13/16551536156804.jpg" alt="" />
            <div className="absolute h-full w-full" style={{
                backgroundColor: 'rgba(0,0,0,.3)'
            }}>
            </div>
            <div className="z-10 h-full relative flex flex-col">
                <nav className="xl:container mx-auto">
                    <ul className="w-full flex justify-end space-x-4">
                        <li>
                            <a href="#about">
                                about
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                skills
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                experience
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-6">
                            <img className="h-32 w-32 object-cover rounded-full"
                                src="/image.png" alt="" />
                        </div>
                        <h2 className="text-center text-white text-4xl font-medium">
                            Miguel Osorno
                        </h2>
                        <h4 className="text-center text-white">
                            Fullstack Software Developer
                        </h4>
                        <div className="flex space-x-2 mt-4">
                            <button className="bg-green-500 hover:bg-green-600 w-36 text-white font-bold py-2 px-4 rounded">
                                Hire me
                            </button>
                            <button className="bg-green-500 hover:bg-green-600 w-36 text-white font-bold py-2 px-4 rounded">
                                Download Cv
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center -mb-4">
                    <ul className="flex justify-center space-x-2">
                        <li className="h-10 w-10 justify-center items-center bg-black flex rounded-full text-white">
                            <a
                                href="https://github.com/MiguelOsorno"
                                target="_blank">
                                <span className="text-2xl">
                                    <i className="fab fa-github"></i>
                                </span>
                            </a>
                        </li>
                        <li className="h-10 w-10 justify-center items-center bg-black flex rounded-full text-white">
                            <a
                                href="https://www.linkedin.com/in/miguel-angel-osorno-linares-344b941aa/"
                                target="_blank">
                                <span className="text-2xl">
                                    <i className="fab fa-linkedin"></i>
                                </span>
                            </a>
                        </li>
                        <li className="h-10 w-10 justify-center items-center bg-black flex rounded-full text-white">
                            <a href="mailto:miguelangel.osornolinares@gmail.com">
                                <span className="text-2xl">
                                    <i className="far fa-envelope"></i>
                                </span>
                            </a>
                        </li>
                        <li className="h-10 w-10 justify-center items-center bg-black flex rounded-full text-white">
                            <a href="https://codepen.io/miguel_osorno"
                                target="_blank">
                                <span className="text-2xl">
                                    <i className="fab fa-codepen"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}