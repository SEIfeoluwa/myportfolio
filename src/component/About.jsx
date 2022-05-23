

export default function About() {

    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Ife.
              <br className="hidden lg:inline-block" />A Full-Stack Software Engineer.
            </h1>
            <p className="mb-8 leading-relaxed">
            As a Software Engineer I strive to accurately and efficiently find the best solutions to any problems encounter. I would say that my curiosity to solve new problems and my teamwork skills are two consistent values throughout my career. My value lies in my technical skill set to efficiently create and navigate software applications.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
            //   src="https://s10.gifyu.com/images/Profile-pic2.jpg"
              src="https://s10.gifyu.com/images/Old-me.jpg"
            />
          </div>
        </div>
      </section>
    )
}