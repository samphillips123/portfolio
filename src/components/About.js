const About = () => {
    return (
        <div id='about' className='min-h-screen flex items-center justify-center'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2
                data-aos-once='true'
                data-aos='fade-up'
                data-aos-duration='500'
                className='text-4xl font-bold tracking-tight text-primary-green sm:text-6xl'
              >
                About
              </h2>
              <p
                data-aos-once='true'
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='50'
                className='mt-6 text-lg leading-8'
              >
                Sam is a Software Engineer with a diverse background in data and business analytics, product management, testing, and research methods. Coming from a career in the engineering world and a background in kinesiology research, I bring a detail oriented and analytical mindset to improve complex and time consuming processes with the goal of being accessible and intuitive for the user. 
              </p>
              <p
                data-aos-once='true'
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='100'
                className='mt-6 text-lg leading-8'
              >
                In his spare time, Sam is an avid cyclist. After retiring from his successful collegiate cycling career at Colorado Mesa University, you will find him chasing around the 'groms' from the Salinas HS mtb team and riding for the pure joy of the sport. When not riding, you can find Sam tending to his native plant gardens, cooking another paella or baked goods, or spending time with his partner, Sused, and their fur baby, Moby, the whippet. 
              </p>
            </div>
          </div>
        </div>
    )
}

export default About