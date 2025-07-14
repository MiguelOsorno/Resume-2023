export const About = (): JSX.Element => {
    return (
        <div id="about-section" className="bg-gradient-to-b from-[#ff94e0] to-white">
            <div className="xl:container mx-auto px-4 py-8 md:py-16">
                <div className="rounded-md bg-slate-50 shadow-xl p-8">
                    <h2 className="text-3xl font-medium text-[#282828] title__line relative">
                        About me
                    </h2>
                    <p className="mt-4">
                        Hello I'm a fullstack developer, I have been a developer for more than 5 years 🤓.
                        I have worked with companies that are very different each other, for instance, 
                        I have worked with a consultory and I was in charge of developing some websites. 
                        After that I was working with a company about social network and I learned many things about this sector that is very interesting.
                        I was working with people that are creating a new espresso machine that will allows making coffee in ways never seen before.
                        Now I am working in real estate intelligence platform.
                    </p>
                    <p className="mt-4">I'm always learning new things to improve my skills 📓.
                        <br/>I like playing video games with my friends, listen to music in my free time 🎮 🎶 and play the guitar 🎸.
                    </p>
                </div>
            </div>
        </div>
    )
}