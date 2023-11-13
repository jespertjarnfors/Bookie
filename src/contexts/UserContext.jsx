import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {

         // Initialising the state.
      const [ values, setValues ] = useState({
        username: '',
        password: '',
        email: ''
      })
 
      // Updating the state with the values from the Login/Register-form.
      const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
      }
    
      // Preventing the page from refreshing upon submitting.
      const handleSubmit = (e) => {
        e.preventDefault()
      }

  
    return (
        <UserContext.Provider value={{values, handleChange, handleSubmit}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider