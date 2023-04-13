import '../App.css';
import Background from './background';
const TitleScreen = () => {
    return (
        <div class='h-[70vh] '>
            <div className='text-center text-white mt-32'>
                <h1 className='text-9xl font-bold'>Niels Feijen</h1>
                <h2 className='text-5xl font-semibold text-portfolioGray mt-4'>
                    <span className='text-accent'>Frontend</span>
                    ,
                    <span className='text-accent'> Web </span>
                    &
                    <span className='text-accent'> Mobile </span>
                    Developer
                </h2>

                <div class="flex flex-row justify-center w-1/2 ml-auto mr-auto mb-10 mt-[340vh] animate-bounce cursor-pointer text-portfolioGray hover:text-white">
                    <i class="fa-solid fa-angles-down mr-2"></i>
                    <h2 data-v-8c3645f7="">
                        Find out more about me
                    </h2>
                    <i class="fa-solid fa-angles-down ml-2"></i>
                </div>
            </div>
        </div>
    )
}

export default TitleScreen;
