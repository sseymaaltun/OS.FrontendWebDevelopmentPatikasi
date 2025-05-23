import { useState, useEffect, use } from 'react'

const initialFormValues = {
  fullname: '',
  phonenumber: ''
};

function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues) // Reset the form when contacts change
  }, [contacts]) // contacts değiştiğinde inputun içini boşaltır

  const onChangeInput = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const onSubmit = (event) => {
    event.preventDefault() // Prevent the default form submission behavior
    if (form.fullname === '' || form.phonenumber === '') {
      alert('Please fill in all fields')
      return false
    }

    addContact([...contacts, form])
  }

  return (
    <form onSubmit = {onSubmit}>
      <div>
        <input 
        name = "fullname" 
        placeholder="Full name" 
        onChange = {onChangeInput}
        value = {form.fullname} />
      </div>
      <div>
        <input 
        name="phonenumber" 
        placeholder="Phone number" 
        onChange = {onChangeInput}
        value = {form.phonenumber}
         />
      </div>
      <div className='btn'>
        <button>Add</button>
      </div>
      
    </form>
  )
}

export default Form