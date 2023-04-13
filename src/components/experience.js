import '../App.css';

const experience = () => {

  return (
    // Main Container
    <div class="border-t-2 border-t-accent h-auto w-auto mb-24 mt-[20vh] mx-16">
      {/* skills scroll Container */}
      <div id='skills' className='py-12 w-auto h-auto'></div>
      {/* Experience container */}
      <div className='flex'>
        {/* Left container */}
        <div className='w-2/3'>
          {/* Title */}
          <h2 className='text-5xl font-normal text-portfolioGray mt-4 xl:text-6xl lg:text-5xl sm:text-4xl xs:text-3xl 2xs:text-2xl'>
            <span class='underline decoration-2 underline-offset-4 decoration-accent'>My Experience</span>
          </h2>

          {/* Introduction */}
          <div className='text-portfolioGray font-normal text-xl'>
            <div className=''>
              <p className='mt-5 '>
                While I may not consider myself a master in any particular language, tool, or framework, 
              </p>
              <p>I do have some experience working with certain ones.</p>
              <p className='mt-5'>
                I possess experience and proficiency in the following skills:
              </p>

            </div>
          </div>
          <div className='flex text-portfolioGray font-normal text-xl '>
            {/* Programming Languages Container */}
            <div className='mr-16'>
              <p className='mt-5 underline decoration-2 underline-offset-4 decoration-portfolioGrau'>
                Programming Languages:
              </p>
              <ul class="list-disc mt-2 ml-5">
                <li>HTML</li>
                <li>JavaScript/Typescript</li>
                <li>CSS</li>
                <li>Swift</li>
                <li>Kotlin</li>
                <li>C#</li>
                <li>PHP</li>
              </ul>
            </div>
            {/* Tools & Frameworks Container */}
            <div className=''>
              <p className='mt-5 underline decoration-2 underline-offset-4 decoration-portfolioGrau'>
                Tools & Frameworks:
              </p>
              <ul class="list-disc mt-2 ml-5">
                <li>React</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>.NET</li>
                <li>Native iOS Development</li>
                <li>Native Android Development</li>
                <li>MySQL</li>
                <li>PhpMyAdmin</li>
              </ul>
            </div>

          </div>
        </div>


      </div>
    </div>

  );
};

export default experience;
