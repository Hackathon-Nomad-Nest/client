import {
  Link,
  // useNavigate
} from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './style.css';
import mount from '../../Assets/mountains-trimmed.mp4'
// import forest from '../../Assets/forest-trimmed.mp4'
import wing from '../../Assets/img/planeWing.jpg'
import { routes } from "src/routes/routeConstants";

const Home = () => {
  // const navigate = useNavigate();
  // const handleExploreClick = () => {
  //   navigate('/');
  //   // navigate to explore page
  //   console.log('navigate to explore page')
  // }
  return <div>
    <div className='xl:mt-[140px]'>
      <video className='bg-img' src={mount} autoPlay loop muted />
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 xl:mx-[80px] md:items-center p-10">
        <div>
          <h1 className="block text-3xl font-bold text-gray-100 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-natural-100">Start your journey with <span className="text-gray-900">NomadNest</span></h1>
          <p className="mt-3 text-lg text-gray-100 dark:text-natural-100">Hand-picked journey with cuttingedge AI.</p>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link to='/explore' className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-gray-100 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Explore
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link to='' className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-100 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              Plan a trip
            </Link>
          </div>
        </div>

      </div>
    </div>
    <div className="bg-transparent py-12 xl:mt-[270px]" data-aos="fade-in">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">Our approach</h2>
          <p className="mt-1 text-gray-800">Our approach to creating customized travel itinerary plans is centered around collecting user inputs, such as preferred destinations, budget, and travel dates. We then personalize the itinerary using this data, combined with the response from the integrated AI, to suggest tailored travel plans that best match the user's preferences.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img className="w-full object-cover rounded-xl" src={wing} alt="Features Image" />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-gray-800 text-xs font-medium uppercase">
                Steps
              </h3>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-customTurquoiseGreen">
                  <span className="text-gray-800">Location Selection : </span>
                  Identify and choose destinations based on user preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-customTurquoiseGreen">
                  <span className="text-gray-800">Types of Trip : </span>
                  Determine the nature of the trip—relaxing, adventurous, etc.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-customTurquoiseGreen">
                  <span className="text-gray-800">Travel Party Size : </span>
                  Gather information on the number of travelers.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-customTurquoiseGreen">
                  <span className="text-gray-800">Duration : </span>
                  Specify the number of days for the itinerary.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
                    5
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-customTurquoiseGreen">
                  <span className="text-gray-800">Budget Range : </span>
                  Request the user's budget range.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
                    6
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-customTurquoiseGreen">
                  <span className="text-gray-800">Mode of Transport : </span>
                  Determine preferred modes of transportation.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-800 font-semibold text-xs uppercase rounded-full">
                    7
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-customTurquoiseGreen">
                <span className="text-gray-800">Duration : </span>
                  Specify the number of days for the itinerary.
                </p>
              </div>
            </div>

            <Link to={routes.EXPLORE} className="group inline-flex items-center gap-x-2 py-2 px-3 bg-customTeal font-medium text-sm text-neutral-100 rounded-full focus:outline-none">
              Create Itinerary <AddCircleOutlineIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* about us */}
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
              Nomad Nest
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Ultimate Trip Planner
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600">At <strong>NomadNest</strong>, we redefine the way you travel by combining the power of AI with personalized trip planning. Our platform offers fully customizable itineraries, allowing you to explore the world on your terms. Whether it's finding hidden gems or crafting a seamless travel experience, NomadNest ensures every journey is tailored to your unique preferences, delivering an unforgettable adventure every time.</p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <Link to='' className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Explore
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
              <Link to='' className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">

                Plan a trip
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Home;
