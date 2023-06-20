import {useState} from "react"
import './App.css'
import SignUp from './components/SignUp'
import Submited from "./pages/Submited"

import PagesContext from "./context/page-context"

function App() {
  const [currentPage, setCurrentPage] = useState<string>("home")
  const [email, setEmail] = useState<string>("")


  const changePage = (page: string) => {
    setCurrentPage(page)
  }

  const submitedEmail = (email: string) => {
    setEmail(email)
  }



  return (
    <PagesContext.Provider value={{currentPage, changePage, email, submitedEmail}}>
    {currentPage == "submited" && <Submited />}
    {currentPage == "home" && <SignUp />}
    </PagesContext.Provider>
  )
}

export default App
