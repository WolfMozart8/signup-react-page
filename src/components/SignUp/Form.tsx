import Button from "../UI/Button"
function Form() {
  return (
    <form>
      <label htmlFor="mail">Email address</label>
      <input type="mail" name="mail" id="mail" placeholder='email@company.com'/>
      <Button buttonType="submit"/>
    </form>
  )
}

export default Form
