import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/navigation'
import { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative ">

            <Navigation />
            
            <main className="overflow-hidden relative lg:flex lg:items-center">
              <div className="w-full py-12 px-4 sm:px-6 lg:py-32 lg:px-8 z-20">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Technology with</span>{' '}<br />
                  <span className="block text-red-600 xl:inline">social impact.</span>
                </h1>
                <p className="text-md mt-4 text-gray-100">
                  We create a human centered solutions, technology, and platforms that leverages data to enable the next evolution of our society, making a positive impact and enabling wealth generation for everyone.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                  <div className="mt-12 inline-flex rounded-md shadow">
                    <button type="button" className="py-3 px-8  bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-8/12 flex items-center gap-8 p-8 lg:p-24">
                <img src="/hero.png" className="rounded-lg" alt="Tree" />
                
              </div>
            </main>

          </div>
        </div>

        <div className="w-full bg-gradient-to-tr from-gray-900 to-gray-700 text-white shadow-sm">
          <div className="max-w-7xl mx-auto">
            <section className="">
              <div className="w-full py-12 px-4 sm:px-6 lg:py-32 lg:px-8 z-20">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">We are team of</span>{' '}
                  <span className="block text-red-600 xl:inline">product builders.</span>
                </h1>
                <p className="text-md text-3xl mt-4 text-gray-100">
                  Who believe in a democratic world that will be driven by digital innovation, through technologies like Blockchain and Artificial Intelligence.

                </p>
              </div>
            </section>
          </div>
        </div>


        <div className="w-full">
          <div className="max-w-7xl mx-auto">
            <section className="">
              <div className="w-full py-12 px-4 sm:px-6 lg:py-32 lg:px-8 z-20">
                <h1 className="text-4xl text-center tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Join us in</span>{' '}
                  <span className="block text-red-600 xl:inline">our mission</span>
                </h1>
                <p className="text-md text-center text-3xl mt-4 text-gray-100">
                  contact@hominis.io

                </p>
              </div>
            </section>
          </div>
        </div>


        <div className="w-full bg-black text-white shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="w-full relative px-4 sm:px-6 lg:px-8 pt-12 flex flex-col sm:flex-row space-y-2  justify-start">
              <div className="w-full text-left sm:w-2/5 pr-6 flex flex-col space-y-4">
                <img className=" self-start text-left h-6" src="/hominis.svg"/>
                <p className="opacity-60 text-sm">
                  Av. Chapultepec Sur #223-int 11, <br />
                  Col Americana, Guadalajara, Mexico.
                </p>
              </div>
              <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                <a className="opacity-60">About Us</a>
                <a className="opacity-60">Responsibilities</a>
                <a className="opacity-60">Out Services</a>
                <a className="opacity-60">Contact</a>
              </div>
              <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                <a className="opacity-60">Disclaimer</a>
                <a className="opacity-60">Testimonials</a>
                <a className="opacity-60">Privacy Policy</a>
                <a className="opacity-60">Terms of Service</a>
              </div>
              <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                <div className="flex flex-row space-x-4">
                  <FontAwesomeIcon className="text-white h-6 hover:text-red-500" icon={faFacebookSquare} />
                  <FontAwesomeIcon className="text-white h-6 hover:text-red-500" icon={faTwitter} />
                  <FontAwesomeIcon className="text-white h-6 hover:text-red-500" icon={faInstagram} />
                  <FontAwesomeIcon className="text-white h-6 hover:text-red-500" icon={faGithub} />
                </div>
              </div>
            </div>
            <div className="opacity-60 px-4 sm:px-6 lg:px-8 py-6 font-light text-sm">
              <p>© 2021 Hominis SAPI de CV.</p>
            </div>
          </div>
        </div>

      </div>
      
      
    </>
  )
}
