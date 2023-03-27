import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import '../main.css';
import '../pages/Home.css';
import '../components/Header/Header.css';
import '../components/SearchBar/SearchBar.css';
import '../components/Form/Form.css';

function FormPage() {
    return (
        <div className="FormPage">
            <Header />
            <Form />
        </div>
    );
}

export default FormPage;
