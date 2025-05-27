import './App.css';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        gender: 'male',
        hobbies: [],
        country: '',
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {
        ({handleSubmit, handleChange, values}) => (
        //formik özelliği handleSubmit: Form gönderildiğinde çalışan fonksiyondur.handleChange: Her input’a veri girildiğinde Formik’in state’ini günceller.

        //Yani kullanıcı formu gönderdiğinde, Formik otomatik olarak verileri toplayıp onSubmit fonksiyonuna aktarır.
          <form onSubmit={handleSubmit}> 
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" value = {values.firstName} onChange ={handleChange} placeholder="Jane" />

            <br />  
            <br /> 

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" value = {values.lastName} onChange ={handleChange} placeholder="Doe" />

            <br />  
            <br /> 

            <label htmlFor="email">Email</label>
            <input id="email" name="email"
              value = {values.email}
              placeholder="jane@acme.com"
              type="email"
              onChange ={handleChange} // Kullanıcı yazdıkça Formik veriyi günceller.
            />

            <br />  
            <br /> 

            <span>Male</span>
            <input type='radio' name="gender" value = "male" checked = {values.gender === 'male'} onChange ={handleChange} />
            
            <span>Female</span>
            <input type='radio' name="gender" value = "female" checked = {values.gender === 'female'}onChange ={handleChange} />

            <br />  
            <br /> 

            <div>
              <input type='checkbox' name = "hobbies" value = "Football" onChange={handleChange} />
              Football
            </div>
            
            <div>
              <input type='checkbox' name = "hobbies" value = "Cinema" onChange={handleChange} />
              Cinema
            </div>
            
            <div>
              <input type='checkbox' name = "hobbies" value = "Photography" onChange={handleChange} />
              Photography
            </div>

            <br />  
            <br /> 

            {/* dropdown */}
            <select name='country' 
            value={values.country}  
            onChange={handleChange}>
              <option value= 'tr'>TURKEY</option>
              <option value= 'en'>ENGLAND</option>
              <option value= 'usa'>USA</option>
            </select> 
            
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
  );
}

export default App;
