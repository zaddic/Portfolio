import Image from "next/image";
import Link from "next/link";
import React from "react";

function Intro() {
  return (
    <div className=" flex w-full h-screen font-sans">
            {/* sidebar */}
            <div className="side flex border-r border-solid border-r-white/50 sm:h-5/6">
                <div className="flex flex-col justify-center sec1">
                    <p className=" text-white/50 font- text-xs -rotate-90 w-4 sm:w-8 pt-1 font-normal">
                        Designer/Developer
                    </p>
                </div>
                <div className="flex flex-col justify-between px-4">
                    <section className="flex -rotate-90">
                        <h3 className="flex text-2xl font-bold text-white/50 font-mono ">
                            H <span className="text-mblue">R</span> S
                        </h3>
                    </section>
                    <ul className="text-white/50 flex flex-row justify-between rotate-90 w-4 sm:w-8 h-fit spa">
                        <li><img src="/Image/instagram.png" alt="" className="-rotate-90 pt-4 " /></li>
                        <li><img src="/Image/facebook.png" alt="" className="-rotate-90 pt-4" /></li>
                        <li><img src="/Image/linkedin.png" alt="" className="-rotate-90 pt-4" /></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <h4 className="text-white/50 text-xs -rotate-90 w-4 sm:w-8">
                        Welcome
                    </h4>
                </div>
            </div>
            {/* Main Content */}
            <div className="main w-full">
                <nav className="flex justify-between items-center p-4">
                    <Link href="/" className="text-white font-bold text-3xl">
                        Hassan <span className="text-mblue">Raza</span>
                    </Link>
                    <ul className="flex sm:justify-center gap-4 text-white pr-30 sm:pr-36">
                        <li>
                            <Link href="/">About Me</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>
                        <li>
                            <Link href="/" className="border-1 border-solid border-2 border-mblue px-2 rounded-xl text-sm w-14 bg-black/30 animate-pulse">Hire me</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col sm:flex-row w-full p-4 text-white relative">
                    <div className="flex flex-col pt-12 sm:pt-16 h-full w-full sm:w-1/2" data-aos="fade-right"
          data-aos-duration="1500">
                        <p className="text-4xl font-bold"><span className="text-lg font-medium">HELLO THERE WELCOME TO MY SITE </span><h1>I&apos;M HASSAN RAZA</h1>
                            <h2 className="text-mblue">A FULL STACK DEVELOPER</h2>
                            <h2> & UI/UX DESIGNER</h2>
                        </p>
                        <div className="btn flex gap-7 p-2">
                            <Link href='/' className="bg-mblue px-2 border-1 w-36 rounded-3xl flex justify-center">See Work</Link>
                            <Link href='/' className="border-1 border-solid border-2 border-mblue px-2 rounded-3xl text-sm w-36 flex justify-center bg-black/30">Contact Me</Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center h-full w-full sm:w-1/2">
                        <div className=" w-52 sm:w-60 z-10 h-96" data-aos="fade-left" data-aos-duration="2000">
                            <Image width={100} height={100} alt="my-picture" src="/Image/hassan1.jpg" className="border-8 border-solid border-mblue rounded-3xl" />
                        </div>
                    </div>

                </div>
            </div>
            {/* welcome Text */}
            <div className="welbg bg-opacity-5 absolute bottom-0 right-0 " data-aos="zoom-in"
          data-aos-duration="1000">
                <h1 className="flex item-baseline text-[130px] sm:text-[256px] text-white/10">Welcome</h1>
            </div>
        </div>
  );
}

export default Intro;
