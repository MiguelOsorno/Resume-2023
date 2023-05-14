interface Props {
    coverIsIntersecting: boolean;
}

export const Navigation = ({coverIsIntersecting}: Props) => {
    return (
        <div className={`${coverIsIntersecting ? 'bg-[#282828]' : 'backdrop-blur-[2px]'} z-10 sticky top-0`}>
            <nav className="xl:container mx-auto p-4">
                <ul className="w-full flex justify-end space-x-4 text-white">
                    <li>
                        <a className={`${coverIsIntersecting ? '' : 'text-[#282828]'} font-medium relative navigation__link`} href="#about-section">
                            About
                        </a>
                    </li>
                    <li>
                        <a className={`${coverIsIntersecting ? '' : 'text-[#282828]'} font-medium relative navigation__link`}  href="#experience-section">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a className={`${coverIsIntersecting ? '' : 'text-[#282828]'} font-medium relative navigation__link`}  href="#skills-section">
                            Skills
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}