import { StyledForm } from "./RegisterForm.style";
import { useFormik } from "formik";
import { ContactFormSchema } from "../../utils/ValidationSchema";
import { ShowRules } from "../../utils/ShowRules";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { AsYouType } from 'libphonenumber-js';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createContactToCRM1, createContactToCRM2 } from "../../redux/Modal/data-operation";
import useGeoLocation from "react-ipgeolocation";
// import { openModalRegister } from "../../redux/Modal/modal-slice";



export const RegisterForm = () => {
    const [formChanged, setFormChanged] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const location = useGeoLocation();
    const country = location.country ? location.country.toLowerCase() : "";


    const {
        values,
        errors,
        touched,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
      } = useFormik({


        initialValues: {
            name: '',
            surname: '',
            email: '',
            phone: phoneNumber,
            resource: 'neuralink'
        },
        
        validationSchema: ContactFormSchema,
        
        onSubmit: (values) => {
            const phoneNumberWithPlus = '+' + phoneNumber;
            const formattedNumber = new AsYouType().input(phoneNumberWithPlus);

            dispatch(createContactToCRM1({
                name: values.name,
                lastName: values.surname,
                email: values.email,
                phone: formattedNumber,
                resource: 'neuralink'
            }));

            dispatch(createContactToCRM2({
                name: values.name,
                lastName: values.surname,
                email: values.email,
                phone: formattedNumber,
                resource: 'neuralink'
            }));
            
            resetForm({
                values: {
                    name: '',
                    surname: '',
                    email: '',
                    phone: ''
                },
            })
            setPhoneNumber('')
        },
        // onSubmit:(values) => {
        //     const phoneNumberWithPlus = '+' + phoneNumber;
        //     const formattedNumber = new AsYouType().input(phoneNumberWithPlus);
        //     console.log(values.name);
        //     console.log(values.surname);
        //     console.log(values.email);
        //     console.log(formattedNumber);
        //     console.log(values.resource);
        //     dispatch(openModalRegister());
        //     setPhoneNumber('');
        //     resetForm({
        //         values: {
        //             name: '',
        //             surname: '',
        //             email: '',
        //             phone: ''
        //         },
        //     })
        //     setPhoneNumber('')
        // }
    });


    const {
        getInputClass,
        getInputAlert,
    } = ShowRules(values, touched, errors);


    useEffect(() => {
        if (
          values.name !== '' ||
          values.surname !== '' ||
          values.email !== '' ||
          values.phone !== ''
        ) {
            setFormChanged(true);
        } 
    },[values.name, values.surname, values.email, values.phone]);

    


    return(
        <StyledForm onSubmit={handleSubmit}>
            <h2 className="form-title">SIGN UP FOR FREE</h2>
            <label className="form-label" htmlFor="name">
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("name")}`}
                        type="text" 
                        name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder='Name'
                        id='name'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("name")}
                </div>
            </label>
            <label className="form-label" htmlFor="surname">
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("surname")}`}
                        type="text" 
                        name="surname"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder='Last name'
                        id='surname'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.surname}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("surname")}
                </div>
            </label>
            <label className="form-label" htmlFor="email">
                <div className="form-group">
                    <input 
                        className={`form-field ${getInputClass("email")}`}
                        type="email" 
                        name="email"
                        title=""
                        placeholder='Email'
                        id='email'
                        autoComplete="on"
                        required
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {getInputAlert("email")}
                </div>
            </label>
            <div className="form-group">
                <PhoneInput
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false,
                        id: "phone",
                    }}
                    onBlur= {handleBlur} 
                    value={phoneNumber}
                    onChange={phone => {
                        handleChange({ target: { name: 'phone', value: phone } });
                        setPhoneNumber(phone);
                    }}
                    containerClass = 'form-label form-label-pnone'
                    inputClass = {`form-field form-field-number `}
                    buttonClass = "dropdown-cont"
                    country={country}
                    placeholder="enter your number"
                    autoFormat={true}
                    countryCodeEditable={false}
                    enableSearch={true}
                    disableSearchIcon={false}
                />
                {getInputAlert("phone")}
            </div>
            <div className="btn-cont">
                <button type="submit" className="submit-button"
                    disabled={!isValid || !formChanged}
                >Sign Up
                </button>
            </div>
        </StyledForm>
    )
}; 