interface Props {
    coverIsIntersecting: boolean;
}

export const Navigation = ({ coverIsIntersecting }: Props) => {
    return (
        <div className={`z-10 fixed bottom-0 left-0 right-0 bg-[#282828] ${coverIsIntersecting ? 'md:bg-[#282828]' : 'md:bg-transparent md:backdrop-blur-[3px]'} md:right-[auto] md:left-[auto] md:bottom-[auto] md:sticky md:top-0`}>
            <nav className="xl:container mx-auto p-4">
                <ul className="w-full flex justify-evenly md:justify-end space-x-4 text-white">
                    <li className="flex md:hidden">
                        <a href="#home-section" className="flex md:hidden text-2xl">
                            <i className="fas fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <a className={`hidden md:flex ${coverIsIntersecting ? '' : 'text-[#282828]'} font-medium relative navigation__link`} href="#about-section">
                            About
                        </a>
                        <a href="#about-section" className="flex md:hidden text-2xl">
                            <i className="fas fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a className={`hidden md:flex ${coverIsIntersecting ? '' : 'text-[#282828]'} font-medium relative navigation__link`} href="#experience-section">
                            Experience
                        </a>
                        <a href="#experience-section" className="flex md:hidden text-2xl">
                            <i className="fas fa-briefcase"></i>
                        </a>
                    </li>
                    <li>
                        <a className={`hidden md:flex ${coverIsIntersecting ? '' : 'text-[#282828]'} font-medium relative navigation__link`} href="#skills-section">
                            Skills
                        </a>
                        <a href="#skills-section" className="flex md:hidden text-2xl">
                            <i className="fas fa-book"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}