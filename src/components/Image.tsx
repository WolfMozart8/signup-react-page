import "./Image.css"

function Image() {
  return (
    <div className="img-container">
			<img className="img-mobile" src="/src/assets/img/illustration-sign-up-mobile.svg" alt="image" />
			<img className="img-desktop" src="/src/assets/img/illustration-sign-up-desktop.svg" alt="image" />
		</div>
  )
}

export default Image
