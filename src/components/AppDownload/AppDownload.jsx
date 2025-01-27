import React from 'react'
import './AppDownload.scss'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
   <>
    <section>
        <div className="container">
            <div className="app-download" id='app-download'>
                <p>For better experience, download <br /> rhs app</p>
                <div className="app-download-platforms">
                    <img src={assets.play_store} alt="" />
                    <img src={assets.app_store} alt="" />
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default AppDownload
