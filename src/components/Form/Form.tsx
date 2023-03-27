import React, { useState, createRef } from 'react';

function Form() {
    const [setFormData] = useState({});
    const [cards, setCards] = useState([]);
    const [formErrors] = useState({});
    const inputRef = createRef();
    const dateRef = createRef();
    const selectRef = createRef();
    const checkboxRef = createRef();
    const radioRef = createRef();
    const fileRef = createRef();

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const newFormData = {
            textInput: inputRef.current.value,
            dateInput: dateRef.current.value,
            dropdownSelect: selectRef.current.value,
            checkbox: checkboxRef.current.checked,
            radioSwitcher: radioRef.current.checked,
            uploadedFile: fileRef.current.files[0],
        };

        setCards((cards) => [...cards, newFormData]);
        setFormData({});
        inputRef.current.value = '';
        dateRef.current.value = '';
        selectRef.current.value = '';
        checkboxRef.current.checked = false;
        radioRef.current.checked = false;
        fileRef.current.value = null;
    };

    const renderCard = (card: React.ReactElement, index: React.ReactElement) => {
        return (
            <div className="card" key={index}>
                <h2>{card.textInput}</h2>
                <img src={URL.createObjectURL(card.uploadedFile)} alt="" />
                <p>Date: {card.dateInput}</p>
                <p>Dropdown/Select: {card.dropdownSelect}</p>
                <p>Checkbox: {card.checkbox ? 'Checked' : 'Not Checked'}</p>
                <p>Switcher/Radio: {card.radioSwitcher ? 'On' : 'Off'}</p>
            </div>
        );
    };

    return (
        <section className="form-container">
            <h2>Form</h2>
            <div className="form">
                <form className="register-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" ref={inputRef} />
                    </label>
                    <br />
                    {formErrors.name && <div className="error">{formErrors.textInput}</div>}
                    <label>
                        Date Input:
                        <input type="date" ref={dateRef} />
                    </label>
                    <br />
                    <label>
                        Select your city:
                        <select ref={selectRef}>
                            <option value="option1">New York</option>
                            <option value="option2">Hanoi</option>
                            <option value="option3">Malaga</option>
                            <option value="option3">Barcelona</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Checkbox:
                        <input type="checkbox" ref={checkboxRef} />
                        <input type="checkbox" ref={checkboxRef} />
                        <input type="checkbox" ref={checkboxRef} />
                    </label>
                    <br />
                    <label>
                        Switcher/Radio:
                        <input type="radio" ref={radioRef} />
                    </label>
                    <br />
                    <label>
                        File Upload (Image):
                        <input type="file" ref={fileRef} accept="image/*" />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>

                <p>Confirmation message goes here.</p>

                <div className="card-grid-container">{cards.map(renderCard)}</div>
            </div>
        </section>
    );
}

export default Form;
