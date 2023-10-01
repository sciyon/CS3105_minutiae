import React from "react";
import { Formik, Field, Form } from 'formik';
import "./style.css";
import { formSchema } from "../../validation/formValidation";
import ShimmerField from "./ShimmerField";


export default function FormsBox(){
  const [isSubmitting, setIsSubmitting] = React.useState(false);


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

        onSubmit={values => {
          setIsSubmitting(true);
          console.log(values);
          setTimeout(() => {
            setIsSubmitting(false);
          }, 5000);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="field">
              <div className="field-label">First Name</div>
              {isSubmitting ? <ShimmerField /> : <Field name='fname'/>}
              {errors.fname && touched.fname ? (<div>{errors.fname}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Last Name</div>
              {isSubmitting ? <ShimmerField /> : <Field name='lname'/>}
              {errors.lname && touched.lname ? (<div>{errors.lname}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Gender</div>
              {isSubmitting ? <ShimmerField /> : (
                <Field name='gender' as='select'>
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Field>
              )}
              {errors.gender && touched.gender ? (<div>{errors.gender}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Describe yourself</div>
              {isSubmitting ? <ShimmerField /> : <Field name='about' as='textarea'/>}
              {errors.about && touched.about ? (<div>{errors.about}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Civil status</div>
              {isSubmitting ? <ShimmerField /> : (
                <Field name='civilStatus' as='select'>
                  <option value="">Select...</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </Field>
              )}
              {errors.civilStatus && touched.civilStatus ? (<div>{errors.civilStatus}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Birth date</div>
              {isSubmitting ? <ShimmerField /> : <Field name="birthdate" type="date" />}
              {errors.birthdate && touched.birthdate ? (<div>{errors.birthdate}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Age</div>
              {isSubmitting ? <ShimmerField /> : <Field name='age' type='number'/>}
              {errors.age && touched.age ? (<div>{errors.age}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Email address</div>
              {isSubmitting ? <ShimmerField /> : <Field name='email' type="email"/>}
              {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Phone number</div>
              {isSubmitting ? <ShimmerField /> : <Field name='phoneNumber'/>}
              {errors.phoneNumber && touched.phoneNumber ? (<div>{errors.phoneNumber}</div>) : null}
            </div>
            <div className="field">
              <div className="field-label">Upload 2x2 photo</div>
              {isSubmitting ? <ShimmerField /> : (
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
              )}
              {errors.photo && touched.photo ? (<div>{errors.photo}</div>) : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
