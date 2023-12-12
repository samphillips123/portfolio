import LinkedInLogo from '../assets/linkedin.png'
import GitHubLogo from '../assets/github.png'

const Contact = () => {
    return (
        <div id='contact' className='min-h-screen flex items-center justify-center'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                    <h2 className='text-4xl font-bold tracking-tight text-primary-green sm:text-6xl'>
                        Contact Sam
                    </h2>
                    <p className='mt-6 text-lg leading-8'>

                    </p>
                    <p className='mt-4 text-lg leading-8'>
                        If you'd like to connect, feel free to send me an email!
                    </p>
                    <span className='font-bold text-2xl'>
                        sphillips123@gmail.com
                    </span>.
                    <div className='flex justify-center'>
                        <a className='m-5' href='https://www.linkedin.com/in/samuel-phillips/' target='_blank' >
                            <img src={LinkedInLogo} alt='LinkedIn logo with link to profile.' />
                        </a>
                        <a className='m-5' href='https://github.com/samphillips123' target='_blank' >
                            <img src={GitHubLogo} alt='GitHub logo with link to profile.' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact