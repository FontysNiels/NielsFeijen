import '../App.css';
import image from '../Images/bread.webp'

const TitleScreen = () => {
    return (
        // Main Container
        <div class="flex flex-row xs:mt-20 2xs:mt-10 mx-16 xs:mx-10">
            {/* Main Left Container */}
            <div class='w-2/3 2xs:w-full sm:w-full sm:mb-0 2xs:mb-[10vh]'>
                {/* All Text Container */}
                <div className='text-left text-white mt-12 '>
                    {/* Title (name) */}
                    <h1 className='lg:text-9xl md:text-8xl sm:text-8xl xs:text-5xl 2xs:text-3xl font-normal'>Niels Feijen</h1>

                    {/* <h2 className='text-5xl font-normal text-portfolioGray mt-4'>
                        <span class='underline decoration-2 underline-offset-4 decoration-accent'>Student</span>
                        <span>&nbsp;&&nbsp;</span>
                        <span class='underline decoration-2 underline-offset-4 decoration-accent'>Software</span>
                        &nbsp;
                        <span class='underline decoration-2 underline-offset-4 decoration-accent'>Developer</span>
                    </h2> */}

                    {/* Intro Container */}
                    <div>
                        <h2 className='text-5xl font-normal text-portfolioGra mt-4 text-portfolioGray xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl 2xs:text-2xl'>
                            <span class='underline decoration-2 underline-offset-4 decoration-accent'>Who is that?</span>
                        </h2>
                        {/* 3xl meer dan 96 maar dan is image kut */}
                        <div className='text-portfolioGray font-normal text-xl md:mr-16 lg:mr-16 xl:mr-16 2xl:mr-40 3xl:mr-44 2xs:mr-0'>

                            <p className='mt-5'>
                                Hi, I am Niels Feijen, A 21 year old student at Fontys University of Applied Sciences in Eindhoven. Here I Study HBO ICT & Software Engineering.
                            </p>
                            <p className='mt-5'>
                                Currently I am in my fourth semester and chose Smart Mobile as my specialization. In this semester I have been working with Kotlin/Jetpack Compose (android) and Swift/SwiftUI (iOS)
                            </p>
                            <p className='mt-5'>
                                I completed a three-year study in Application and Media Design at Summa College in Eindhoven before joining Fontys University.
                            </p>

                        </div>
                    </div>

                    <div class=' flex justify-center mt-8 w-full sm:w-1/3 md:hidden'>
                        <img src={image} class='border-2 border-accent aspect h-fit' alt="Profile Picture" />
                    </div>
                    {/* Find out more button */}
                    <div class="flex flex-row xs:justify-center sm:justify-start w-full  mb-10 mt-12 animate-bounce cursor-pointer text-portfolioGray hover:text-white">
                        <i class="fa-solid fa-angles-down mr-2"></i>
                        <h2 class='hover:underline decoration-accent' onClick={() => { document.getElementById("about").scrollIntoView({ behavior: "smooth" }) }}>
                            Find out more about me
                        </h2>
                        <i class="fa-solid fa-angles-down ml-2"></i>
                    </div>

                </div>
            </div>
            {/* Main Right Container / Image     h-[70vh]*/}
            <div class=' flex justify-center mt-6 mb-8 w-1/3 2xs:hidden md:block '>
                <img src={image} class='border-2 border-accent aspect h-fit' alt="Profile Picture" />
            </div>


        </div>
    )
}

export default TitleScreen;
