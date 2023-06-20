import "./Image.css"
import imgMobile from "./../img/illustration-sign-up-mobile.svg"
import imgDesktop from "./../img/illustration-sign-up-desktop.svg"

function Image() {
  return (
    <div className="img-container">
			<img className="img-mobile" src={imgMobile} alt="image" />
			<img className="img-desktop" src={imgDesktop} alt="image" />
		</div>
  )
}

export default Image
