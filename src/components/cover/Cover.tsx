
interface Props {
    coverRef: React.MutableRefObject<null | HTMLDivElement>
}

export const Cover = ({ coverRef }: Props): JSX.Element => {
    return (
        <div ref={coverRef} className="h-[450px] relative bg-[#282828]">
            {/* <img className="h-full w-full object-cover absolute" src="/blackpink-bg.jpg" alt="" />
            <div className="absolute h-full w-full" style={{
                backgroundColor: 'rgba(0,0,0,.6)'
            }}>
            </div> */}
            <div className="h-full relative flex flex-col">
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-6">
                            <img className="h-36 w-36 object-cover rounded-full"
                                src="https://avatars.githubusercontent.com/u/36206351?v=4" alt="my-photo" />
                        </div>
                        <h2 className="text-center text-white text-4xl font-medium">
                            Miguel Osorno
                        </h2>
                        <h4 className="text-center text-white">
                            Fullstack Software Developer
                        </h4>
                        <div className="flex space-x-2 mt-4">
                            <button type="button" className="bg-[#ff59c7] hover:bg-[#ff76d8] w-36 text-white font-bold py-2 px-4 rounded">
                                Hire me
                            </button>
                            <button type="button" className="bg-[#ff59c7] hover:bg-[#ff76d8] w-36 text-white font-bold py-2 px-4 rounded">
                                Download Cv
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center -mb-4">
                    <ul className="flex justify-center space-x-2">
                        <li className="h-10 w-10 justify-center items-center bg-[#282828] hover:bg-[#ff59c7] flex rounded-full text-white">
                            <a
                                href="https://github.com/MiguelOsorno"
                                target="_blank">
                                <span className="text-2xl">
                                    <i className="fab fa-github"></i>
                                </span>
                            </a>
                        </li>
                        <li className="h-10 w-10 justify-center items-center bg-[#282828] hover:bg-[#ff59c7] flex rounded-full text-white">
                            <a
                                href="https://www.linkedin.com/in/miguel-angel-osorno-linares-344b941aa/"
                                target="_blank">
                                <span className="text-2xl">
                                    <i className="fab fa-linkedin"></i>
                                </span>
                            </a>
                        </li>
                        <li className="h-10 w-10 justify-center items-center bg-[#282828] hover:bg-[#ff59c7] flex rounded-full text-white">
                            <a href="mailto:miguelangel.osornolinares@gmail.com">
                                <span className="text-2xl">
                                    <i className="far fa-envelope"></i>
                                </span>
                            </a>
                        </li>
                        <li className="h-10 w-10 justify-center items-center bg-[#282828] hover:bg-[#ff59c7] flex rounded-full text-white">
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