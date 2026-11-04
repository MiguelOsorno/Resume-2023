export const About = (): JSX.Element => {
    return (
        <div id="about-section" className="bg-gradient-to-b from-[#ff94e0] to-white">
            <div className="xl:container mx-auto px-4 py-8 md:py-16">
                <div className="rounded-md bg-slate-50 shadow-xl p-8">
                    <h2 className="text-3xl font-medium text-[#282828] title__line relative">
                        About me
                    </h2>
                    <p className="mt-4">
                        Hi, I'm a full-stack developer with 7+ years of experience building web products end to end,
                        from polished, responsive interfaces to the APIs behind them 🤓.
                    </p>
                    <p className="mt-4">
                        I've worked across very different industries. I started at a software consultancy building websites
                        and dashboards for clients, then helped grow a social network that connects creators with fans, and
                        later built the software for Meticulous, a smart espresso machine that makes coffee in ways never seen before.
                        Today I'm at Datoz, working on a real estate intelligence platform where I integrate LLMs and ship
                        features that turn complex data into clear decisions.
                    </p>
                    <p className="mt-4">
                        I'm always learning something new to sharpen my skills 📓. In my free time I play video games with
                        my friends, listen to music 🎮 🎶 and play the guitar 🎸.
                    </p>
                </div>
            </div>
        </div>
    )
}