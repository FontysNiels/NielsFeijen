import '../App.css';

const navbar = () => {    
    // lg: md: sm: xs: 2xs: 
    return (
            <div id='navbar' class="z-50 flex fixed top-0 left-0 right-0 justify-between border-b bg-black text-white">
                <div class="font-medium w-1/3 text-left text-4xl m-4 ml-10 ">
                    <a href="#">Niels Feijen</a>
                </div>
                <div class='mt-5 text-xl w-1/3 text-center text-portfolioGray'>
                    <button class="no-underline hover:underline mr-12 hover:text-white decoration-accent" onClick={() => { document.getElementById("about").scrollIntoView({ behavior: "smooth" }) }}>About</button>
                    <button class="no-underline hover:underline hover:text-white decoration-accent" onClick={() => { document.getElementById("about").scrollIntoView({ behavior: "smooth" }) }}>My Skills</button>
                </div>
                <div className='w-1/3 text-right text-portfolioGray mr-10 mt-5 hover:text-white'>
                    <a href='https://www.linkedin.com/in/niels-feijen-13838816b/' target="_blank" >
                        <i class="fa-brands fa-linkedin text-3xl"></i>
                    </a>
                    
                </div>
                
            </div>
    )
}

export default navbar;
