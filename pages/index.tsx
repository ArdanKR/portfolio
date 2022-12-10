import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { useEffect, useRef } from 'react'
import Nav from '../app/components/Nav'
import Script from 'next/script'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'
import NXJS from "/assets/Nextjs.png";
import Image from 'next/image'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const linearProgressBarRef = useRef<HTMLDivElement>(null)
  const pageableRef = useRef<any>(null)
  const loadPageable = async () => {
    const Pageable = await require('pageable')
    const pageable = new Pageable(containerRef.current, {
      childSelector: '[data-anchor]',
      anchors: [],
      pips: false,
      animation: 300,
      delay: 1,
      throttle: 50,
      orientation: 'vertical',
      swipeThreshold: 50
      ,
      freeScroll: true,
      navPrevEl: false,
      navNextEl: false,
      infinite: false,
      events: {
        wheel: true,
        mouse: false,
        touch: true,
        keydown: true
      }
      // onInit: () => {},
      // onUpdate: (data) => {}
      // onBeforeStart: () => {},
      // onStart: () => {},
      // onFinish: () => {}
    })

    pageableRef.current = pageable
  }

  useEffect(() => {
    loadPageable()
    Array.from(document.querySelectorAll('a')).forEach((el) => {
      if(!el.dataset.href) return
      el.addEventListener('touchend', () => {
        window.open(el.dataset.href, '_blank')
      });
    });
  })


  return (
    <div className='pg-wrapper'>
      <Head>
  <title>Sanghyuk Park - Portfolio</title>
  <meta name="description" content="A High School Student Dev." />

  <meta property="og:url" content="https://ardan.kr" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Sanghyuk Park - Portfolio" />
  <meta property="og:description" content="A High School Student Dev." />
  <meta property="og:image" content="" />
  <meta name="theme-color" content="#3b82f6" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="ardan.kr" />
  <meta property="twitter:url" content="https://ardan.kr" />
  <meta name="twitter:title" content="Sanghyuk Park - Portfolio" />
  <meta name="twitter:description" content="A High School Student Dev." />
  <meta name="twitter:image" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css"
        />
         
      </Head>
      <Nav></Nav>
      <div className='w-full' ref={containerRef}>
      <div data-anchor="1">
      <header className="h-[calc(100vh-50px)] items-center justify-center flex text-center px-2">
        <div>
          <h1 className='logo font-bold text-5xl'><span className={styles.highlightBlue}>Frontend</span> & <span className={styles.highlight}>UI/UX</span> Developer</h1>
          <p className='mt-4'><span className='logo font-semibold'>Sanghyuk Park</span>{"'"}s Portfolio</p>
        </div>
        <div className='z-[-1] absolute blur-xl select-none px-2'>
          <h1 className='logo font-bold text-5xl text-white dark:text-black'><span className={styles.highlightBlue}>Frontend</span> & <span className={styles.highlight}>UI/UX</span> Developer</h1>
          <p className='mt-4'><span className='logo font-semibold text-white dark:text-black'>Sanghyuk Park</span>{"'"}s Portfolio</p>
        </div>
        </header>
        <div className='flex justify-center p-4 mt-[-7rem]'>
          <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="40" height="40" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_167"><rect width="200" height="200" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_167)"><g transform="matrix(0.3134399950504303,0,0,0.3134399950504303,11.139762878417969,46.2999382019043)" opacity="1"><path fill="#cccccc" d=" M283.4639892578125,274.375 C273.343994140625,274.375 263.2250061035156,272.17498779296875 253.79800415039062,267.7760009765625 C253.79800415039062,267.7760009765625 16.750999450683594,157.16299438476562 16.750999450683594,157.16299438476562 C4.238999843597412,151.32400512695312 -1.1710000038146973,136.447998046875 4.668000221252441,123.93599700927734 C10.505999565124512,111.42400360107422 25.381999969482422,106.01499938964844 37.89400100708008,111.85399627685547 C37.89400100708008,111.85399627685547 274.9410095214844,222.46600341796875 274.9410095214844,222.46600341796875 C280.3580017089844,224.9929962158203 286.5710144042969,224.99200439453125 291.98699951171875,222.46600341796875 C291.98699951171875,222.46600341796875 529.0349731445312,111.85399627685547 529.0349731445312,111.85399627685547 C541.5469970703125,106.01399993896484 556.4219970703125,111.42400360107422 562.260986328125,123.93599700927734 C568.0989990234375,136.447998046875 562.6890258789062,151.32400512695312 550.177001953125,157.16299438476562 C550.177001953125,157.16299438476562 313.1300048828125,267.7760009765625 313.1300048828125,267.7760009765625 C303.7040100097656,272.17498779296875 293.5840148925781,274.375 283.4639892578125,274.375z"></path></g></g></svg>
        </div>
      </div>
      <div data-anchor="2" className='content flex justify-center items-center py-16 bg-slate-100 dark:bg-black h-[100vh]'>
        <div className='container'>
          <h1 className='logo font-bold text-3xl sm:text-5xl'>👋 Hi, there</h1>
          <p className='mt-4'>I{"'"}m <span className='marker'>Sanghyuk Park</span>, a high school student developer from South Korea.</p>
          <div className='flex gap-x-2 mt-2'>
          <Link href="https://github.com/ardankr" data-href="https://github.com/ardankr" className="doclink text-2xl shadow-md flex rounded-full dark:bg-black bg-white p-1 cursor-pointer">
            <AiFillGithub></AiFillGithub>
          </Link>
          <Link href="https://twitter.com/kr_ardan" data-href="https://twitter.com/kr_ardan" className="doclink text-2xl shadow-md flex rounded-full dark:bg-black bg-white p-1 cursor-pointer text-[#1d9bf0]">
            <AiOutlineTwitter></AiOutlineTwitter>
          </Link>
          </div>
        </div>
      </div>
      <div data-anchor="3" className='content flex justify-center items-center py-16 bg-white dark:bg-black h-[100vh]'>
        <div className='container'>
          <h1 className='logo font-bold text-3xl sm:text-5xl'>Tech Stacks</h1>
          <p className='mt-4'>These are the techniques I use. This also includes what I am learning.</p>

          <div className='grid gap-x-2 sm:grid-cols-10 grid-cols-5 mt-2 items-center'>
            
            <div className='text-2xl p-2 dark:invert'>
              <Image id="nxjstt" alt="Nextjs" data-tooltip-content="Next.JS" src={"/assets/Nextjs.svg"} width={48} height={48}></Image>
            </div>
            <div className='text-2xl p-2'>
              <Image id="rjs" alt="Reactjs" data-tooltip-content="React.JS" src={"/assets/Reactjs.png"} width={48} height={48}></Image>
            </div>
            <div className='text-2xl p-2'>
              <Image id="vjs" alt="Vuejs" data-tooltip-content="Vue.JS" src={"/assets/Vuejs.png"} width={48} height={48}></Image>
            </div>
            <div className='text-2xl p-2'>
              <Image id="js" alt="Javascript" data-tooltip-content="JavaScript" src={"/assets/Javascript.png"} width={48} height={48}></Image>
            </div>
            <div className='text-2xl p-2'>
              <Image id="ts" alt="Typescript" data-tooltip-content="TypeScript" src={"/assets/Typescript.png"} width={48} height={48}></Image>
            </div>
            <div className='text-2xl p-2'>
              <Image id="tailwindcss" alt="TailWindCSS" data-tooltip-content="TailwindCSS" src={"/assets/Tailwindcss.png"} width={48} height={48}></Image>
            </div>
            <div className='text-2xl p-2'>
              <Image id="docker" alt="Docker" data-tooltip-content="Docker(Learning)" src={"/assets/Docker.png"} width={48} height={48}></Image>
            </div>
          </div>
        </div>
        
      </div>
      <div data-anchor="4" className='content flex justify-center items-center py-16 bg-white dark:bg-black h-[100vh]'>
        <div className='container'>
          <h1 className='logo font-bold text-3xl sm:text-5xl'>Experiences</h1>
          <ul className='mt-4'>
            <li><span className='logo'>DevHub</span> ─ Founder, CEO (2019~2020) (Disbanded)</li>
            <li><span className='logo'>HKDev Korea</span> ─ Head of Developer (2020~2022) (Resigned)</li>
            <li><span className='logo'>HKDev Korea</span> ─ Web Developer (2020~)</li>
            <li><span className='logo'>Pluxcon Network</span> ─ Web Developer (2021~)</li>
            <li><span className='logo'>Team Deplux</span> ─ Web Developer (2021~) (Paused)</li>
          </ul>
        </div>
      </div>
      <div data-anchor="5" className='content flex justify-center items-center py-16 bg-white dark:bg-black h-[100vh]'>
        <div className='container'>
          <h1 className='logo font-bold text-3xl sm:text-5xl'>Projects</h1>
          <ul className='mt-4'>
            <li><span className='logo'>Portfolio</span>: My Portfolio Project. (TailwindCSS, Next.JS, TypeScript)</li>
            <li><span className='logo'>Deplux</span>: Discord Bot Hosting</li>
            <li><span className='logo'>MarioMaker2 Search</span>: This is a Discord bot that helps you search for Mario Maker 2 courses. (Node.JS, Discord.JS)</li>
          </ul>
        </div>
      </div>
      <div data-anchor="6" className='content flex justify-center items-center py-16 bg-white dark:bg-black h-[100vh] flex-col'>
        <div className='container h-[50%] flex items-end'>
          <div>
            <h1 className='logo font-bold text-3xl sm:text-5xl'>Contact</h1>
            <ul className='mt-4'>
              <li>📬 <span className='logo'>Email</span>: <span className='underline'><Link data-href={"mailto:contact@ardan.kr"} href={"mailto:contact@ardan.kr"}>contact@ardan.kr</Link></span></li>
            </ul>
          </div>
        </div>
        <div className='container h-[50%] flex items-end text-center justify-center'>
          <Link className='doclink' data-href="https://github.com/ArdanKR/portfolio" href="https://github.com/ArdanKR/portfolio" target={"_blank"}>Made with <span className="text-[#f8312f]">♥️</span> by Sanghyuk Park.</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
