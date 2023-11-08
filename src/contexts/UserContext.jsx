import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [ values, setValues ] = useState({
        username: '',
        password: ''
      })
    
      const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
      }
    
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