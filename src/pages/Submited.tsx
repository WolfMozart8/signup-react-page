import {useContext} from 'react'
import PagesContext from '../context/page-context'
import Button from '../components/UI/Button'

import "./Submited.css"

const Submited = () => {
    const pages = useContext(PagesContext)
    const reloadPage = () => {
        pages?.changePage("home")
    }

  return (
    <main className='submited'>
        <div>
        <img src={"../img/icon-success.svg"} alt="icon success" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <strong>{pages?.email}</strong>.
  Please open it and click the button inside to confirm your subscription.</p>
  </div>
        <div className='button-container'>
            <Button clickHandler={reloadPage} buttonType='button'>Dismiss message</Button>
        </div>
    </main>
  )
}

export default Submited
