import Button from "../UI/Button"
import "./Form.css"

function Form() {
  return (
    <form className="form">
      <div className="input-container">
        <label htmlFor="mail">Email address</label>
        <input type="mail" name="mail" id="mail" placeholder='email@company.com'/>
      </div>
      <Button buttonType="submit"/>
    </form>
  )
}

export default Form
