import { useState, useEffect } from 'react'
import Head from 'next/head'
import App from '../components/App'
import Bubbles from '../components/Bubbles'
import styles from '../styles/Home.module.css'

export default function Home() {

  const host = 'http://localhost:3000/'

  const [apps, setApps] = useState(null)
  const [searchText, setSearchText] = useState('')


  useEffect(() => {
    fetch('list.json')
      .then((res) => res.json())
      .then((apps) => {
        setApps(apps)
      })
  }, [])

  let filteredapps = apps && apps.apps && apps.apps.length > 0 ? [...apps.apps] : [];
  const lowerSearch = searchText.toLowerCase();
  if (searchText !== "") {
    filteredapps = filteredapps.filter((i) => {
      const category = i.categories.filter((i) =>
        i.toLowerCase().includes(lowerSearch)
      );
      return (
        i.name.toLowerCase().includes(lowerSearch) ||
        category.length > 0
      );
    });
  }

  const changeSearch = event => {
    setSearchText(event.target.value)
  }


  return (
    <div className="">
      <Head>
        <title>Kasm Apps</title>
        <meta name="description" content="List of apps for Kasm Webspaces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative overflow-hidden bg-gradient-to-tr from-slate-900 to-cyan-800 p-32 py-16 text-white flex justify-between items-center">
        <Bubbles />
        <div className='relative z-10'>
          <div className="text-7xl">Kasm</div>
          <div className="text-sm uppercase"><span className='opacity-70 tracking-wide'>Application</span> <span className='opacity-50 tracking-wide'>Database</span></div>
        </div>
        <div className="grow flex justify-center relative z-10">
          <div className='bg-cyan-400/50 shadow border border-1 border-white/30 rounded flex w-full max-w-md'>
            <input
              name="search" 
              className='bg-transparent shadow-inner text-lg font-light w-full p-4 placeholder:text-white/40' 
              placeholder='Search for application' 
              type="text"
              value={searchText}
              onChange={changeSearch}
              />

          </div>

        </div>
        <div className='shadow flex flex-col bg-cyan-400/50 border border-1 border-white/30 rounded relative z-10'>
          <div className='flex justify-between text-sm p-2 pb-0'><span className=''>Applications: </span><span className=''>{apps && apps.appcount}</span></div>
          <div className='p-2 pt-1 text-xs text-white/70'>{process.env.NEXT_PUBLIC_APPURL}</div>
        </div>
      </header >

      <main className="p-20">
        <div className="flex flex-wrap gap-1 justify-center">
        {filteredapps && filteredapps.length > 0 && filteredapps.map(function (app, i) {
            return <App key={app.sha} app={app} />
          })}
          {filteredapps && filteredapps.length === 0 && (
            <p>No applications found {searchText !== '' && ('matching "' + searchText + '"')}</p>
          )}
        </div>


        <div className={styles.grid}>

        </div>
      </main>
    </div >
  )
}