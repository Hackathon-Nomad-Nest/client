// import React from 'react'
import { ReactEventHandler, useState } from 'react'
import travel from '../../Assets/img/travel.jpg'
import { Link } from 'react-router-dom';

const Explore = () => {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange: ReactEventHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value)
  };


  const cards = [
    {
      id: 1,
      title: 'Explore the world',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctorneque sagittis posuere ut et amet.',
      image: 'https://images.pexels.com/photos/19224650/pexels-photo-19224650/free-photo-of-overcast-over-sea-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'Explore the world',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctorneque sagittis posuere ut et amet.',
      image: 'https://images.pexels.com/photos/19224650/pexels-photo-19224650/free-photo-of-overcast-over-sea-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'Explore the world',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctorneque sagittis posuere ut et amet.',
      image: 'https://images.pexels.com/photos/19224650/pexels-photo-19224650/free-photo-of-overcast-over-sea-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'Explore the world',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctorneque sagittis posuere ut et amet.',
      image: 'https://images.pexels.com/photos/19224650/pexels-photo-19224650/free-photo-of-overcast-over-sea-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'Explore the world',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctorneque sagittis posuere ut et amet.',
      image: 'https://images.pexels.com/photos/19224650/pexels-photo-19224650/free-photo-of-overcast-over-sea-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.google.com'
    },

  ]
  return (
    <div>
      {/* head section */}
      <div className="bg-transparent">
        <img src={travel} alt="" className='absolute -z-10 top-0' />
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 className="font-semibold text-white text-4xl md:text-6xl">
            <span className="text-customPeach ">NomadNest</span> Transforming wishes into journey
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-white sm:text-lg text-sm">
              NomadNest: Your Journey, Perfectly Tailored with AI.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-4 ">
          <div className="max-w-sm mx-auto mb-20">
            <div className="relative" data-hs-combo-box='{
    "groupingType": "default",
    "isOpenOnFocus": true,
    "apiUrl": "../assets/data/searchbox.json",
    "apiGroupField": "category",
    "outputItemTemplate": "<div data-hs-combo-box-output-item><span className=\"flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100"><div className=\"flex items-center w-full\"><div className=\"flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5\"><img className=\"shrink-0\" data-hs-combo-box-output-item-attr=&apos;[{\"valueFrom\": \"image\", \"attr\": \"src\"}, {\"valueFrom\": \"name\", \"attr\": \"alt\"}]&apos; /></div><div data-hs-combo-box-output-item-field=\"name\" data-hs-combo-box-search-text data-hs-combo-box-value></div></div><span className=\"hidden hs-combo-box-selected:block\"><svg className=\"shrink-0 size-3.5 text-blue-600" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg></span></span></div>",
    "groupingTitleTemplate": "<div className=\"text-xs uppercase text-gray-500 m-3 mb-1"></div>"
  }'>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg className="shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <input onChange={handleInputChange} className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" type="text" role="combobox" aria-expanded="false" placeholder="Enter any Destination" value={inputValue} data-hs-combo-box-input="" />
              </div>

              <div className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg" style={{ display: 'none' }} data-hs-combo-box-output="">
                <div className="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300" data-hs-combo-box-output-items-wrapper=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* journey cards */}
      <div className="heading sm:mt-24 mt-12 bg-white" >
        <p className='text-4xl text-bold text-customTeal px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto'>Explore Plans</p>
      </div>
      <div className="w-full px-4 py-6 sm:px-6 lg:px-8 lg:pb-14 bg-white">
        <div className="max-w-[85rem] no-scrollbar flex overflow-x-scroll gap-6 w-full scrollbar-none">
          {
            cards.map((item: any, index: number) => {
              return (
                <div key={index} className="group glass min-w-[280px] flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
                  <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                    <img src={item.image} className='h-full w-full rounded-t-xl' alt='destination image' />
                  </div>
                  <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                      {item.title}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Destination
                    </h3>
                    <p className="mt-3 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Customize
                    </a>
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                      View
                    </a>
                  </div>
                </div>
              )
            })
          }


        </div>
      </div>

      {/* section 3 cards*/}
      <div className="heading mt-2">
        <p className='text-4xl text-bold text-customTeal px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto'>Explore Plans</p>
      </div>
      <div className="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <div className="flex overflow-x-scroll gap-6 w-full">
          {
            cards.map((item: any, index: number) => {
              return (
                <div key={index} className="group glass min-w-[280px] flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
                  <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                    <img src={item.image} className='h-full w-full rounded-t-xl' alt='destination image' />
                  </div>
                  <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                      {item.title}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Destination
                    </h3>
                    <p className="mt-3 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Customize
                    </a>
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
                      View
                    </a>
                  </div>
                </div>
              )
            })
          }


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
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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
  )
}

export default Explore