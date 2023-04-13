import '../App.css';
import swissImage from '../Images/swiss.webp'
import psvImage from '../Images/psv.webp'
import summaImage from '../Images/summa.webp'

const about = () => {

  return (
    // Main Container
    <div class="border-t-2 border-t-accent h-auto w-auto mb-24 sm:mt-[20vh] xs:mt-[60vh] 2xs:mt-[70vh] mx-16">
      <div id='about' className='sm:py-12 2xs:py-8'></div>
      {/* About Container */}
      <div>
        {/* Title */}
        <h2 className='text-5xl font-normal text-portfolioGray mt-4 xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl 2xs:text-2xl'>
          <span class='underline decoration-2 underline-offset-4 decoration-accent'>About Me</span>
        </h2>

        {/* Introduction */}
        <div className='text-portfolioGray font-normal text-xl mr-10 3xl:w-5/6 '>
          <p className='mt-5 3xl:mr-32'>
            As stated earlier, my name is Niels Feijen. I am a Dutch 20 years old software development student at Fontys University of Applied Sciences in Eindhoven. I was born on June 7th 2002 and live in Nederwetten, Noord-Braband.
          </p>
          <p className='mt-5 3xl:mr-28'>
            As you can see in the picture, currently I work at Jumbo. At the bread department to be more specific. I started this job in March of 2020, before this I worked for another supermarket named Jan Linders. I worked there from September 2017 until June 2018, so not that long.
          </p>
          <p className='mt-5 3xl:mr-28'>
            Between the two jobs I have had two internships. These where done for my MBO study at Summa College. The first one lasted from August 2019 to February 2020, I held this internship at 4People in Nuenen. The second internship was from February 2021 to June 2021, and this one was held at Ninebits in Eindhoven.
          </p>
          <p className='mt-5 3xl:mr-28'>
            I am also a big PSV supporter / fan, I have had a season ticket for around 9 years now and don’t plan on quitting any time soon. What also is a hobby of mine is gaming, but come on did you really expect a software developer to not like gaming.
            During holidays I love going on vacation to Switzerland, me and my family have been doing this for some years now, and we still love it.
          </p>
        </div>

      </div>
      {/* Find out more button */}
      <div class="flex flex-row justify-left sm:w-1/2 2xs:w-auto mb-10 mt-12 animate-bounce cursor-pointer text-portfolioGray hover:text-white">
        <i class="fa-solid fa-angles-down mr-2"></i>
        <h2 class='hover:underline decoration-accent' onClick={() => { document.getElementById("skills").scrollIntoView({ behavior: "smooth" }) }}>
          Find out more my skills
        </h2>
        <i class="fa-solid fa-angles-down ml-2"></i>
      </div>
      <div className='sm:flex sm:space-x-6 text-portfolioGray '>
        <div class='sm:w-1/5 2xs:w-auto 2xs:mt-6 sm:mt-0'>
          <img src={psvImage} class='border-b-2 border-b-accent aspect-4/3' alt="Profile Picture" />
          <p className='italic underline decoration-1 underline-offset-2'>My view at PSV</p>
        </div>
        <div class='sm:w-1/5 2xs:w-auto 2xs:mt-6 sm:mt-0'>
          <img src={swissImage} class=' border-b-2 border-b-accent aspect-4/3' alt="Profile Picture" />
          <p className='italic underline decoration-1 underline-offset-2'>Vacation Switzerland 2022</p>
        </div>
        <div class='sm:w-1/5 2xs:w-auto 2xs:mt-6 sm:mt-0'>
          <img src={summaImage} class='border-b-2 border-b-accent aspect-4/3' alt="Profile Picture" />
          <p className='italic underline decoration-1 underline-offset-2'>Summa Graduation</p>
        </div>

      </div>
    </div>

  );
};

export default about;
