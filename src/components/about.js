import '../App.css';

const about = () => {

  return (
    // Main Container
    <div class=" h-auto w-auto mb-24 mt-[20vh] mx-16">
      {/* About Container */}
      <div id='about'>
        {/* Title */}
        <h2 className='text-5xl font-normal text-portfolioGray mt-4'>
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
          </p>
        </div>

      </div>
    </div>

  );
};

export default about;
