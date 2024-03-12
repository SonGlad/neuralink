import * as Yup from "yup";


const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, { 
      message: 'Name can only contain letters and spaces', 
      excludeEmptyString: true,
      excludeTrailingSpace: true 
    })
    .trim()
    .min(2, 'Name is too short')
    .max(40, 'Name is too long')
    .required("The field is required"),
  surname: Yup.string()
    .matches(/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, { 
      message: 'Last name can only contain letters and spaces', 
      excludeEmptyString: true,
      excludeTrailingSpace: true 
    })
    .trim()
    .min(2, 'Last name is too short')
    .max(40, 'Last name is too long')
    .required("The field is required"),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email')
    .email("Invalid email")
    .required("The field isrequired"),
  phone: Yup.string()
    .matches(/^\d+$/, 'Phone number can only contain digits')
    .min(8, 'Number is too short')
    .max(15, 'Number is too long')
    .required("Please enter valid phone number"),
});


export {
  ContactFormSchema,
};
