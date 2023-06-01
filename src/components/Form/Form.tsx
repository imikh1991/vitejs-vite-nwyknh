import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addCharacter } from '../../store/reducers/FormSlice';
import { formIsSubmitedSelector } from '../../store/selectors/search';

// set up interface object
interface FormData {
    name: string;
    picture: DataTransfer;
    dateOfBirth: string;
    gender: string;
    agreeToTerms: boolean;
    favoriteColor: string;
}

function Form() {
    const dispatch = useAppDispatch();
    const defaultValues = useMemo(
        () => ({
            name: '',
            picture: '',
            dateOfBirth: '',
            gender: '',
            agreeToTerms: false,
            favoriteColor: '',
        }),
        []
    );
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({});

    const [data, setData] = React.useState<FormData[]>([]);
    const formIsSubmitted = useAppSelector(formIsSubmitedSelector);

    const onSubmit = (data: FormData, event) => {
        try {
            setData((prevData) => [...prevData, data]);
            alert('Form successfully submitted');
            dispatch(addCharacter(data));
            event.preventDefault();
        } catch (e) {
            alert(e);
        }
    };

    const renderCard = (
        { name, picture, dateOfBirth, gender, agreeToTerms, favoriteColor }: FormData,
        index: number
    ) => {
        const imageUrl = URL.createObjectURL(picture[0]);
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

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            alert('SubmitSuccessful');
            setData(formIsSubmitted);
        }
    }, [isSubmitSuccessful, reset, defaultValues, formIsSubmitted]);

    const setOfCards = formIsSubmitted.map((item, index) => renderCard(item, index));

    return (
        <section onSubmit={handleSubmit(onSubmit)}>
            <form className="form-container">
                <h2>Form</h2>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" {...register('name', { required: true })} />
                    {errors.name && <span className='label--error'>This field is required</span>}
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
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            {...register('agreeToTerms', {
                                required: true,
                            })}
                        />
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
