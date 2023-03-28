import React, { useState, createRef } from 'react';

function Form() {
    const [formData, setFormData] = useState({});
    const [cards, setCards] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const inputRef = createRef<HTMLInputElement>();
    const dateRef = createRef<HTMLInputElement>();
    const selectRef = createRef<HTMLInputElement>();
    const checkboxRef = createRef<HTMLInputElement>();
    const checkboxRef2 = createRef<HTMLInputElement>();
    const checkboxRef3 = createRef<HTMLInputElement>();
    const radioRef = createRef<HTMLInputElement>();
    const fileRef = createRef<HTMLInputElement>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameInput = inputRef.current?.value.trim();
        const dateInput = dateRef.current?.value;
        const dropdownSelect = selectRef.current?.value;
        const checkbox = checkboxRef.current?.checked;
        const checkbox2 = checkboxRef2.current?.checked;
        const checkbox3 = checkboxRef3.current?.checked;
        const radioSwither = radioRef.current?.value;
        const uploadedFile = fileRef.current?.files?.[0] ?? null;

        const errors = {};

        if (!nameInput) {
            errors['name'] = 'Please enter a name.';
        } else if (nameInput.length < 2) {
            errors['name'] = 'Name must be at least 2 characters long.';
        }

        if (!dropdownSelect) {
            errors['dropdown'] = "Please select date";
        }

        if (!checkbox || !checkbox2 || !checkbox3) {
            errors['checkbox'] = "Please select checkbox";
        }

        if (!radioSwither) {
            errors['radio'] = "Please select radio";
        }

        if (!uploadedFile) {
            errors['file'] = "Please upload file";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            alert("Error occure - Please enter valid data");
            console.log(setFormErrors(errors));
            return;
        }

        const newFormData = {
            textInput: inputRef.current?.value,
            dateInput: dateRef.current?.value,
            dropdownSelect: selectRef.current?.value,
            checkbox: checkboxRef.current?.checked,
            checkbox2: checkboxRef2.current?.checked,
            checkbox3: checkboxRef3.current?.checked,
            radioSwitcher: radioRef.current?.value,
            uploadedFile: fileRef.current?.files?.[0] ?? null,
        };

        setCards((cards) => [...cards, newFormData]);
        setFormData({
            textInput: '',
            dateInput: '',
            dropdownSelect: '',
            checkbox: false,
            checkbox2: false,
            checkbox3: false,
            radioSwitcher: '',
            uploadedFile: null,
        });

        // Reset input fields to default values
        inputRef.current.value = '';
        dateRef.current.value = '';
        selectRef.current.value = '';
        checkboxRef.current.checked = false;
        checkboxRef2.current.checked = false;
        checkboxRef3.current.checked = false;
        radioRef.current.checked = false;
        fileRef.current.value = null;
    };

    const renderCard = (card, index) => {
        return (
            <div className="card" key={index}>
                <h2>{card.textInput}</h2>
                <img src={URL.createObjectURL(card.uploadedFile)} alt="" />
                <p>Date: {card.dateInput}</p>
                <p>Dropdown/Select: {card.dropdownSelect}</p>
                <p>Checkbox: {card.checkbox ? 'Checked' : 'Not Checked'}</p>
                <p>Checkbox 2: {card.checkbox2 ? 'Checked' : 'Not Checked'}</p>
                <p>Checkbox 3: {card.checkbox3 ? 'Checked' : 'Not Checked'}</p>
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
                            <option value="option4">Barcelona</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Checkbox:
                        <input type="checkbox" ref={checkboxRef} />
                        <input type="checkbox" ref={checkboxRef2} />
                        <input type="checkbox" ref={checkboxRef3} />
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
