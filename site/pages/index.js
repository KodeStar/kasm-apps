import { useState, useEffect } from 'react'
import Head from 'next/head'
import App from '../components/App'
import Bubbles from '../components/Bubbles'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [apps, setApps] = useState(null)
  const [searchText, setSearchText] = useState('')

  const listUrl = process.env.listUrl;

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

  const copyToClipboard = () => {
    var textField = document.createElement('textarea')
    textField.innerText = listUrl
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    alert('URL copied to clipboard')
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
          <button className='p-2 px-5 bg-cyan-500 m-2 rounded items-center pt-1 font-bold text-xs text-white/70 flex cursor-pointer' onClick={() => { copyToClipboard() }}><span className="mr-3">Store URL</span><svg style={{ height: '14px', fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"/></svg></button>
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
