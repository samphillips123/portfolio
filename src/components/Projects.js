const Projects = () => {
    return (
        <div id='projects' className='min-h-screen flex items-center justify-center'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                    <h2
                        data-aos-once='true'
                        data-aos='fade-up'
                        data-aos-duration='500'
                        className='flex justify-end text-4xl font-bold tracking-tight text-primary-green sm:text-6xl'
                    >
                        Projects
                    </h2>
                    <p
                        data-aos-once='true'
                        data-aos='fade-up'
                        data-aos-duration='500'
                        data-aos-delay='50'
                        className='mt-6 text-lg leading-8'
                    >
                        <a href='https://monopoly-lite.netlify.app/' target='_blank' >
                            <strong>
                                Monopoly Lite
                            </strong>
                        </a>
                        <br />
                        Built with JavaScript, CSS Grid and Flexbox layouts, and HTML. Created a slimmed down version of the “Monopoly” game to showcase my ability to create efficient and modular logic.
                    </p>
                    <p
                        data-aos-once='true'
                        data-aos='fade-up'
                        data-aos-duration='500'
                        data-aos-delay='100'
                        className='mt-6 text-lg leading-8'
                    >
                        <a href='https://track-my-project-1d1124b69159.herokuapp.com/projects' target='_blank' >
                            <strong>
                                Track My Project
                            </strong>
                        </a>
                        <br />
                        RESTful and CRUD app built with Express, EJS, and Mongoose, and MongoDB. App to allow the user to keep track of their projects and associated materials in a user friendly way.
                    </p>
                    <p
                        data-aos-once='true'
                        data-aos='fade-up'
                        data-aos-duration='500'
                        data-aos-delay='100'
                        className='mt-6 text-lg leading-8'
                    >
                        <a href='https://adventure-list.netlify.app/' target='_blank' >
                            <strong>
                                Adventure List 2.0
                            </strong>
                        </a>
                        <br />
                        Group project built as a RESTful and CRUD app utilizing the MERN (MongoDB, Express, React, Node.js) stack, and MongoDB. Platform for users to login to create and view adventures they have completed or plan on taking.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects