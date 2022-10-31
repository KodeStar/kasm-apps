function App({ Component, pageProps, app }) {
    return (
        <div className="rectangular tile transition-all relative cursor-pointer group flex p-2 items-center justify-center bg-slate-100/90 dark:bg-slate-900/90 shadow rounded hover:shadow-xl hover:bg-gradient-to-r hover:from-slate-600 hover:to-blue-500">
            <div className="w-full h-full">
                <div className="show-grid flex h-full items-center">
                    <div className="kasmcard-img flex h-full w-20 mx-4 items-center">
                        <img className=" " src={ 'icons/' + app.icon} />
                    </div>
                    <div className="kasmcard-detail settingPad">
                        <h5 className="">{ app.name }</h5>
                        <p>{ app.categories[0] }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App