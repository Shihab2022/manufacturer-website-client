const { useState, useEffect } = require("react")

const useToken=user=>{
    const [token,setToken]=useState('')

    useEffect(()=>{
        const email=user?.user?.email
        const name=user?.user?.displayName
        // console.log(email)
        const currentUser={
            email : email,
            name : name
        }
        if(email){
            fetch(`https://allegro-server-production-4215.up.railway.app/user/${email}`,{
            // fetch(`http://localhost:5000/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
    
            })
            .then(res=>res.json())
            .then(result=>{
                // console.log(result)
               const accessToken =(result.accessToken)
               localStorage.setItem('accessToken' ,accessToken)
               setToken(accessToken)
            })
        }
 
    },[user]);
    return [token];
}
export default useToken