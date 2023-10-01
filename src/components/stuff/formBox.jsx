import React from "react";
import "./style.css";
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';


export default function FormsBox(){
  const MAX_FILE_SIZE = 1024000; 
  const validFileExtensions = ['jpg','JPG', 'jpeg', 'png', 'gif', 'svg', 'webp'];

  function isValidFileType(fileName) {
    return validFileExtensions.includes(fileName.split('.').pop());
  }

  const phoneRegExp = /^((\+63)|0)[1-9][0-9]{9}$/;

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }

  const formSchema = Yup.object().shape({
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
          .required("Required"),
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
          .required("Age is required"),
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

  return(
    <div className="formik-form">
      <Formik
        initialValues={{
          fname: '',
          lname: '',
          gender: '',
          about: '',
          civilStatus: '',
          birthdate: formatDate(new Date()),
          age: '',
          email: '',
          phoneNumber: '',
          photo: '',
        }}
        validationSchema = {formSchema}
        onSubmit={values =>{
          console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="field">
              <div className="field-label">First Name</div>
              <Field name='fname'/>
              {errors.fname && touched.fname ? (<div>{errors.fname}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Last Name</div>
              <Field name='lname'/>
              {errors.lname && touched.lname ? (<div>{errors.lname}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Gender</div>
              <Field name='gender' as='select'>
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              {errors.gender && touched.gender ? (<div>{errors.gender}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Describe yourself</div>
              <Field name='about' as='textarea'/>
              {errors.about && touched.about ? (<div>{errors.about}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Civil status</div>
              <Field name='civilStatus' as='select'>
                <option value="">Select...</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </Field>
              {errors.civilStatus && touched.civilStatus ? (<div>{errors.civilStatus}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Birth date</div>
              <Field name="birthdate" type="date" />
              {errors.birthdate && touched.birthdate ? (<div>{errors.birthdate}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Age</div>
              <Field name='age' type='number'/>
              {errors.age && touched.age ? (<div>{errors.age}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Email address</div>
              <Field name='email' type="email"/>
              {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Phone number</div>
              <Field name='phoneNumber'/>
              {errors.phoneNumber && touched.phoneNumber ? (<div>{errors.phoneNumber}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Upload 2x2 photo</div>
              <Field name='photo'>
                {({ field, form }) => (
                  <input
                    id='photo'
                    name='photo'
                    type='file'
                    onChange={(event) => {
                      form.setFieldValue(field.name, event.currentTarget.files[0]);
                    }}
                  />
                )}
              </Field>
              {errors.photo && touched.photo ? (<div>{errors.photo}</div>) : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}