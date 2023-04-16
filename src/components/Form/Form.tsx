import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import { useAppDispatch } from '../../store/hooks';
import { formIsSubmited } from '../../store/reducers/FormSlice';

// set up interface object
interface FormData {
    name: string;
    picture: FileList;
    dateOfBirth: string;
    gender: string;
    agreeToTerms: boolean;
    favoriteColor: string;
}

function Form() {
    const defaultValues = {
        name: '',
        picture: '',
        dateOfBirth: '',
        gender: '',
        agreeToTerms: false,
        favoriteColor: '',
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm({ defaultValues });
    const [data, setData] = React.useState<FormData[]>([]);

    // dispatch работает в связке с событием которое нужно обработать
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(formIsSubmited(data));
    }, [data, dispatch]);

    const onSubmit = (data, event) => {
        try {
            console.log(typeof data);
            if (data.picture) {
                console.log(data.picture);
            }
            setData((prevData) => [...prevData, structuredClone(data)]);
            alert('Form successfully submitted');
            event.preventDefault();
        } catch (e) {
            console.error(e);
        }
    };

    const renderCard = ({ name, picture, dateOfBirth, gender, agreeToTerms, favoriteColor }, index: number) => {
        const imageUrl = picture.length > 0 ? URL.createObjectURL(picture[0] as Blob) : '';
        return (
            <div className="card" key={index}>
                <h2>{name}</h2>
                {imageUrl && <img src={imageUrl} alt="" />}
                <p> Date: {dateOfBirth}</p>
                <h2>Gender: {gender === 'male' ? '👦' : '👧'}</h2>
                <p>Checkbox: {agreeToTerms}</p>
                <p>Color: {favoriteColor}</p>
                <a href="#">Go somewhere</a>
            </div>
        );
    };
    const setOfCards = data.map((item, index) => renderCard(item, index));

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            console.log('SubmitSuccessful');
            reset(defaultValues);
        }
    });

    return (
        <section onSubmit={handleSubmit(onSubmit)}>
            <form className="form-container">
                <h2>Form</h2>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" {...register('name', { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>

                <div>
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        type="date"
                        data-testid="dateOfBirth"
                        id="dateOfBirth"
                        {...register('dateOfBirth', { required: true })}
                    />
                    {errors.dateOfBirth && <span>This field is required</span>}
                </div>

                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" {...register('gender', { required: true })}>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <span>This field is required</span>}
                </div>

                <div>
                    <label htmlFor="agreeToTerms">
                        <input type="checkbox" id="agreeToTerms" {...register('agreeToTerms', { required: true })} />
                        Agree to terms and conditions
                    </label>
                    {errors.agreeToTerms && <span>Please agree to the terms and conditions</span>}
                </div>

                <div>
                    <label htmlFor="favorite color">Favorite color:</label>
                    <input type="radio" id="red" value="red" {...register('favoriteColor', { required: true })} />
                    <label htmlFor="red">Red</label>
                    <input type="radio" id="green" value="green" {...register('favoriteColor', { required: true })} />
                    <label htmlFor="green">Green</label>
                    <input type="radio" id="blue" value="blue" {...register('favoriteColor', { required: true })} />
                    <label htmlFor="blue">Blue</label>
                    {errors.favoriteColor && <span>Please select your favorite color</span>}
                </div>

                <div>
                    <label aria-labelledby="file Upload" htmlFor="file-upload" id="file-upload-label">
                        File Upload:
                    </label>
                    <input {...register('picture', { required: true })} type="file" id="file-upload" alt="" />
                    {errors.picture && <span>This field is required</span>}
                </div>
                <button disabled={!data} type="submit">
                    Submit
                </button>
            </form>
            <div className="card-grid-container">{setOfCards}</div>
        </section>
    );
}

export default Form;
