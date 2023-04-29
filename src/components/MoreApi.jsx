import React, {useState} from 'react'


const MoreApi = () => {
    const [users, setUsers] = useState([])

    const getApi = async (event) => {
        const apiUrl = await fetch('https://randomuser.me/api/?results=3')
        const response = await apiUrl.json()
        setUsers(response.results)
        event.target.value = 'Next'
    }

    const render = users.map((item, idx)=> {
        return(
            <div style={{backgroundColor:'black', fontFamily:'cursive'}} className='container'>
                <img src={item.picture.large} alt=''/>
                <p style={{textTransform:'capitalize'}}>{item.gender}</p>
                <p style={{color:'pink'}}>My name is {item.name.title} {item.name.first} {item.name.last}</p>
                <p style={{color:'pink'}}>I am {item.dob.age} years old</p>
                <p style={{color:'pink'}}>I live at No. {item.location.street.number} {item.location.street.name} {item.location.city}
                {item.location.state} {item.location.country}</p>
                <p style={{color:'pink'}}>phone : {item.cell}</p>
                <p style={{color:'pink'}}>email : {item.email}</p>
                <p style={{color:'pink'}}>password : {item.login.password}</p>
                
            </div>
        )
    })

  return (
    <div>
      <h1 style={{backgroundColor:'pink'}}>Rando User✅</h1>
      {render}
    <input style={{color:'pink', fontSize:'x-large'}} type='button' npm start
    
    
    
    
    
    
    
    
    
    onClick={getApi} value='fetch me a user' />

    <br/><br/><br/><br/>
     <p style={{boxSizing:'border-box', color:'maroon'}}>Designed And Developed By Ahmed.Olamide</p>
    </div>
  )
}

export default MoreApi
