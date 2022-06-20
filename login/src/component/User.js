import React, { useState } from 'react'
import '../assets/User.css'


const User = () => {
    
    const [userRegistration, setuserRegistration] = useState({
        email:"",
        password:""

    });

    const handleInput =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);

        setuserRegistration({...userRegistration, [name]:value})
    }

    const handleSubmit= (e) =>{
        e.preventDefault();

        const newRecord = {...userRegistration, id : new Date().getTime().toString()}
        setRecords([...records,newRecord]);
        console.log(newRecord);
        setuserRegistration({email:'',password:''})
    }

    const [records, setRecords] = useState ([]);
  return (
    <>
        <form action='' onSubmit={handleSubmit}>
            <div className='main_div'>
                <div className='inner'>

                      <h1 style={{}}>
                          LoginIn  
                      </h1>

            <div>
                <label htmlFor='Email'>Email</label>
                <input type='email' name='email' value={userRegistration.email}
                placeholder="Email"
                onChange={handleInput}/>

            </div>

            <div>
                <label htmlFor='Password'>Password</label>
                <input type='password' name='password' value={userRegistration.password}
                placeholder="Password"
                onChange={handleInput}/>
 
            </div>

            <button type='submit'>SignIn</button>

            <p style={{marginTop:15}}>Already have an account?
            <strong style={{color: "#323232", fontWeight:'bolder'}}> <a href='#'>Sign Up</a></strong> </p>


                </div>
            </div>
        </form>
{/* DisplayData */}

        <div className='main'> 
{
    records.map((curElem)=>{
        return(
            <div className='showdata' key={curElem.id}>
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
            </div>

        )
    })
}


        </div>

    </>
  )
}

export default User;