import "./Info.css"
import iconList from "../img/icon-list.svg";

function Info() {
return (
    <div className='info'>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
            <li><span><img src={iconList} alt="check icon"/></span>Product discovery and building what matters</li>
            <li><span><img src={iconList} alt="check icon"/></span>Measuring to ensure updates are a success</li>
            <li><span><img src={iconList} alt="check icon"/></span>And much more!</li>
        </ul>
    </div>
  )
}

export default Info
