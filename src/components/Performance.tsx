const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="project-card p-8 items-center justify-center shadow-2xl flex flex-col gap-2">
            <h2 className="text-2xl font-bold dark:text-white text-gray-700">{title}</h2>
            <div className="flex flex-col items-center">
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                    {description}
                </p>
            </div>
        </div>
    )
}

const Performance = () => {
    return (
        <section id="performances" className='justify-center items-center bg-indigo-600 dark:bg-slate-800'>
            {/* <h2 className="mb-10 lg:text-5xl ssm:text-3xl font-bold text-center text-white dark:text-slate-400">These are my main skills🏆</h2> */}
            <div className="flex flex-col lg:flex-row md:flex-row gap-10 justify-center w-full">
            <Card title="Web Development 👨🏻‍💻" description="Building and maintaining the website, including front-end and back-end development, as well as content management." />
                <Card title="UI Design 🖥" description="Creating user interfaces, including user experience design, interaction design, and visual design." />
                <Card title="Graphic Design 🖌" description="Drawing and designing logos, icons, and other visual elements for the website." />
            </div>
        </section>
    )
}

export default Performance