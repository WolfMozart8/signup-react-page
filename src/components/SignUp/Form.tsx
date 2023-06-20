import { useState, ChangeEvent, useContext } from "react"
import Button from "../UI/Button"
import "./Form.css"
import PagesContext from "../../context/page-context"

// interface Props {
//   validate: (value: string) => void
// }

const Form = () => {
  const pages = useContext(PagesContext);

  const [userMail, setUserMail] = useState<string>("");
  const [isValidMail, setIsValidMail] = useState<boolean>(true)
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (regex.test(userMail)) {
      setIsValidMail(true)
      pages?.changePage("submited") // change the app.tsx useState via usecontext
      pages?.submitedEmail(userMail) // show the email in submited page
    } else {
      setIsValidMail(false)

    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserMail(event.target.value);
  }

  return (
    <form className="form">
      <div className={isValidMail ? "input-container" : "input-container error"}>
        <label htmlFor="email">Email address
          {!isValidMail ? <span className="error-msg">Valid email required</span> : null}
        </label>

        <input onChange={handleInputChange} type="email" name="email" id="email" placeholder='email@company.com'/>
      </div>
      <Button clickHandler={isValid} buttonType="submit">Subscribe to monthly newsletter</Button>
    </form>
  )
}

export default Form
