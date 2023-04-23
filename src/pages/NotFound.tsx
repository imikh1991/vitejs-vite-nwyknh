import img from '../assets/notFound.png';
import '../components/Modal/Modal.css';

function NotFound() {
    return (
        <div>
            <h1>This is Not Found This Universe it does not exist. Wubba Lubba Dub Dub!</h1>
            <img src={img} alt="" />
        </div>
    );
}

export default NotFound;
