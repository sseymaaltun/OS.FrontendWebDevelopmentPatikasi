import React from 'react'
import { Formik } from 'formik';
import validationSchema from './validations';

function Signup() {
  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={validationSchema} // Formik, Yup ile tanımlanan validationSchema’yı kullanarak form verilerini doğrular.
      onSubmit={(values) => {
        console.log(values) // Form gönderildiğinde bu fonksiyon çalışır. values, form verilerini içerir.
      }}
    >
      {
        ({handleSubmit, handleChange, handleBlur, values, errors, touched}) => (
        //formik özelliği handleSubmit: Form gönderildiğinde çalışan fonksiyondur.handleChange: Her input’a veri girildiğinde Formik’in state’ini günceller.

        //Yani kullanıcı formu gönderdiğinde, Formik otomatik olarak verileri toplayıp onSubmit fonksiyonuna aktarır.
          <form onSubmit={handleSubmit}> 
            <label>Email</label>
            <input id="email" name="email"
              value = {values.email}
              placeholder="jane@acme.com"
              type="email"
              onChange ={handleChange} // Kullanıcı yazdıkça Formik veriyi günceller.
              onBlur={handleBlur}
            />
           {errors.email && touched.email && <div className="error">{errors.email}</div>} 
           {/* touched özelliği, kullanıcı formu doldururken hangi alanlara dokunduğunu takip eder. Böylece hata mesajları sadece kullanıcı o alana dokunduğunda gösterilir. */}

            <br />  
            <br /> 

            <label>Password</label>
            <input id="password" name="password"
              value = {values.password}
              onChange ={handleChange} // Kullanıcı yazdıkça Formik veriyi günceller.
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <div className="error">{errors.password}</div>}
            
            <br />  
            <br /> 

            <label htmlFor="email">Confirm Password</label>
            <input id="passwordConfirm" name="passwordConfirm"
              value = {values.passwordConfirm}
              onChange ={handleChange} // Kullanıcı yazdıkça Formik veriyi günceller.
              onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
            
            <br />  
            <br /> 

            <button type="submit">Submit</button>

            <br />  
            <br /> 

            <code>{JSON.stringify(values)}</code>
          </form>
        )
      }
    </Formik>
    </div>
  )
}

export default Signup