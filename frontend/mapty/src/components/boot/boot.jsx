import './boot.scss';
import img from '../../Drawables/logo-removebg-preview.png';


const Boot = () => {
    return (
        <div className="root-container">
            <div className="container">
                <img src={img} alt="img" className="image"/>
                <h1 className="heading">Mapty</h1>
                <h6 className="sub-heading">Geolocation</h6>
        </div>
        </div>
    )
}

export default Boot