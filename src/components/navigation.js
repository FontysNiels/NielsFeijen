import '../App.css';

const navbar = () => {    
    // lg: md: (tablet)sm: (mobile L)xs: (mobile M + S)2xs: 
    return (
            <div id='navbar' class="z-50 flex fixed top-0 left-0 right-0 lg:justify-between xs:justify-start border-b bg-black text-white">
                <div class="font-medium xs:w-1/3 xs:text-left m-4 xs:ml-10 sm:text-4xl xs:text-2xl 2xs:text-xl 2xs:w-screen 2xs:text-center">
                    <a href="#">Niels Feijen</a>
                </div>
                <div class='mt-5 sm:text-xl 2xs:text-base text-center text-portfolioGray xs:block 2xs:hidden sm:w-1/3 xs:w-auto sm:ml-0 xs:ml-4'>
                    <button class="no-underline hover:underline sm:mr-12 2xs:mr-5 hover:text-white decoration-accent" onClick={() => { document.getElementById("about").scrollIntoView({ behavior: "smooth" }) }}>About</button>
                    <button class="no-underline hover:underline hover:text-white decoration-accent" onClick={() => { document.getElementById("skills").scrollIntoView({ behavior: "smooth" }) }}>My Experience</button>
                </div>
                <div className='w-1/3 text-right text-portfolioGray mr-10 mt-5 hover:text-white sm:block 2xs:hidden'>
                    <a href='https://www.linkedin.com/in/niels-feijen-13838816b/' target="_blank" >
                        <i class="fa-brands fa-linkedin text-3xl"></i>
                    </a>
                    
                </div>
                
            </div>
    )
}

export default navbar;
