'use client';
import '../app/font.css';
import { useState } from 'react';
import Bell from '../assets/bell.svg';
import Image from "next/image";
import { Card } from "@/components/card/card";
import bell from '../src/assets/bell.svg';


export default function Home() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const closeAside = () => {
    setIsAsideOpen(false);
  };
  return (
    <body className="relative h-[1000vh]">
        <nav className="flex justify-between items-center relative z-10">
          <div className="flex space-x-[1.198vw]">
            <div
              className="bg-white w-[5.052vw] h-[3.125vw] flex justify-center items-center rounded-[1.042vw]"
              onClick={toggleAside}
            >
              <ul className="space-y-[0.313vw]">
                <li>
                  <div className="w-[1.875vw] h-[0.104vw] bg-dark"></div>
                </li>
                <li>
                  <div className="w-[1.875vw] h-[0.104vw] bg-dark"></div>
                </li>
                <li>
                  <div className="w-[1.875vw] h-[0.104vw] bg-dark"></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-[1.198vw]">
            <div className="bg-white w-[5.969vw] h-[3.125vw] flex justify-center items-center rounded-[1.042vw]">
              <a href="">
                <img src="/assets/bell.svg" alt="" className="w-[1.25vw] h-[1.25vw]" />
              </a>
            </div>
            <div className="bg-white w-[4.896vw] h-[3.125vw] flex justify-center items-center rounded-[1.042vw]">
              <a href="">
                <div className="space-x-[0.677vw] flex items-center">
                  <img src="/assets/language.svg" alt="" className="w-[1.25vw] h-[1.25vw]" />
                  <h2 className="text-[0.833vw] text-dark">ID</h2>
                </div>
              </a>
            </div>
            <div className="w-[3.125vw] h-[3.125vw] flex justify-center items-center rounded-[1.042vw]">
              <a href="">
                <img src="/assets/profile.png" alt="Profile" />
              </a>
            </div>
          </div>
        </nav>

      <aside
        className={`fixed top-0 left-0 z-30 w-[20vw] h-full bg-light_dark transform ${
          isAsideOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
          >
        <div className="p-[1.5vw] text-white relative">
          <button
            className="absolute top-[1vw] right-[1vw] text-white p-[0.5vw] rounded"
            onClick={closeAside}
          >
            <div
              className="bg-light_dark w-[5.052vw] h-[3.125vw] flex justify-center items-center rounded-[1.042vw]"
              onClick={toggleAside}
            >
              <ul className="space-y-[0.313vw]">
                <li>
                  <div className="w-[1.875vw] h-[0.104vw] bg-white"></div>
                </li>
                <li>
                  <div className="w-[1.875vw] h-[0.104vw] bg-white"></div>
                </li>
                <li>
                  <div className="w-[1.875vw] h-[0.104vw] bg-white"></div>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </aside>

  <section>
      <div className="">
        <img src="/assets/hero.png" alt="" className="absolute inset-0 w-full h-[52.083vw] object-cover"/>
        <div className="absolute inset-0 w-full h-[52.604vw] bg-gradient-to-b from-dark/40 to-dark"></div>
        <div className="absolute inset-0 flex items-center px-[4.01vw] max-h-[52.083vw]">
          <div className="space-y-[1.25vw]">
            <button className="px-[1.563vw] py-[0.521vw] bg-white text-dark text-[0.833vw] rounded-[1.042vw]" disabled>#1 Reality Show</button>
            <h1 className="text-[3.333vw] font-semibold max-w-[32.188vw]">The American Show : Nerd Girl</h1>
            <p className="text-[0.938vw] font-light max-w-[31.406vw]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
            <div className="space-x-[1.25vw]">
              <button className="px-[2.083vw] py-[1.042vw] text-[1.042vw] bg-white text-dark rounded-[1.042vw]">Watch Now</button>
              <button className="px-[2.083vw] py-[1.042vw] text-[1.042vw] border-[0.052vw] border-white  text-white rounded-[1.042vw]">Details</button>
            </div>
          </div>
        </div>
      </div>  
  </section>

  <section className="pt-[50vw] space-y-[2.5vw]">
    <div className="w-full space-y-[1.25vw]">
      <div>
        <h1 className="text-[1.667vw] font-medium">You might like</h1>
      </div>
      <div className="grid grid-cols-6">
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-1.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-2.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-3.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-4.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-5.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-6.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
      </div>
    </div>
    <div className="w-full space-y-[1.25vw]">
      <div>
        <h1 className="text-[1.667vw] font-medium">Continue Watching</h1>
      </div>
      <div className="grid grid-cols-6">
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-1.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <Card
                image='/assets/movie-2.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              <Card
                image='/assets/movie-3.png'
                title='tiris'
                label='tiris'
              />
            </div>
          </div>
      </div>
    </div>
  </section>

</body>

  );
}
