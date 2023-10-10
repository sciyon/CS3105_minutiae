import * as Yup from 'yup';

const phoneRegExp = /^((\+63)|0)[1-9][0-9]{9}$/;
const MAX_FILE_SIZE = 1024000; 
const validFileExtensions = ['jpg','JPG', 'jpeg', 'png', 'gif', 'svg', 'webp'];

function isValidFileType(fileName) {
  return validFileExtensions.includes(fileName.split('.').pop());
}

export const formSchema = Yup.object().shape({
  
  fname:  
    Yup .string()
        .min(2, 'Too short')
        .max(30, 'Too long')
        .required('First name required'),
  lname:  
    Yup .string()
        .min(2, 'Too short')
        .max(40, 'Too long')
        .required('Last name required'),
  gender: 
    Yup .string()
        .oneOf(["Male", "Female", "Other"], "Invalid gender")
        .required("Gender is required"),
  about:
    Yup .string()
        .min(20, "About you is too short")
        .required("About you is required"),
  civilStatus:
    Yup .string()
        .oneOf(["Single","Married","Divorced","Widowed"], "Invalid civil status")
        .required("Civil Status is required"),
  birthdate:
    Yup .date()
        .min(new Date(1900, 0, 1), "Invalid birthdate")
        .required("Birthdate is required"),
  age:
    Yup .number()
        .positive("Age must be positive")
        .max(100, "Age must be a valid age")
        .min(7, "Age is too low")
        .required("Age is required")
        .test('is-age-valid', 'Age does not match with birthdate', function (value) {
          const { birthdate } = this.parent;
          const birthYear = new Date(birthdate).getFullYear();
          const currentYear = new Date().getFullYear();
          const calculatedAge = currentYear - birthYear;
          return calculatedAge === value;
        }),
  email:
    Yup .string()
        .email("Invalid email")
        .required("Email is required"),
  phoneNumber:
    Yup .string()
        .matches(phoneRegExp, "Must be a valid Philippine mobile number starting with +63 or 0")
        .required("Phone number is required"),
  photo:
    Yup .mixed()
        .test("filesize", "File size is too large", value => {
          if (!value) return true;
          return value.size <= MAX_FILE_SIZE;
        })
        .test("fileFormat", "Unsupported format", value => {
          if (!value || !(value instanceof File)) return true;
          return isValidFileType(value.name.toLowerCase());
        })
        .required("Image is required")
})