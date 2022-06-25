import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [users, setUsers] = useState({});
  const [user] = useAuthState(auth);
  const [loading,setLoading]=useState(null)
  
  useEffect(() => {
    // fetch(`http://localhost:5000/user/${user?.email}`)
    fetch(`https://frozen-badlands-14934.herokuapp.com/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user,users]);
  if(loading){
    return <Loading></Loading>
}
console.log(users)
const updateProfile=e=>{
    setLoading(true)
    e.preventDefault();
    //upload image in imagebb
    const imgStorageKey = "d92a7867dc5f803eaff37ac866069fb5";
    const image = e.target.photo.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`; 
    fetch(url, {
        method: "POST",
        body: formData, 
      })
        .then((res) => res.json())
        .then((result) => {
            // if img upload success then upload data in data base 
            if(result.success){
                const image=result.data.url;
            const updateInfo={
                    email:e.target.email.value,
                    name:e.target.name.value,
                    link:e.target.link.value,
                    number:e.target.number.value,
                    img:image
                }
                const url=`https://frozen-badlands-14934.herokuapp.com/updateUser/${user?.email}`
                // const url=`http://localhost:5000/updateUser/${user?.email}`
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                       
                      },
                      body: JSON.stringify(updateInfo)
                })
                .then(response => response.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.success(`${updateInfo.name} your profile updated .`)
                        setUsers(updateInfo)
                        setLoading(false)
                        e.reset(); 
                    }
                })
            }
            else{
                setLoading(false)
                toast.error('Please give your photo .')
            }
        })
}

  return (
    <div>
      <div className="hero py-5  lg:py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center block lg:w-[600px] lg:text-left">
        
            <div data-aos="fade-left" className="lg:pl-10 flex justify-center w-full items-center flex-col">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-16 uppercase text-cyan-600">Your Profile </h2>
              {/* {user?.img ? ( */}
              {users[0]?.img ? (
                  <div className="avatar">
                  <div className="w-32 rounded-full">
                  <img src={users[0]?.img} alt="" />
                  </div>
                </div>
                
              ) : (
                <p className="text-6xl font-bold text-white bg-amber-300 shadow-2xl w-[100px] h-[100px] rounded-full flex items-center justify-center">
                  {user?.displayName?.slice(0, 1)}
                </p>
              )}
              <p className="text-3xl font-bold mt-5 text-amber-600">
                {user?.displayName}
              </p>
              <p className="py-2 text-xl">Email : {users[0]?.email}</p>
              <p className="py-3 text-xl">Social : {users[0]?.link}</p>
              <p className=" text-xl">Phone : {users[0]?.number}</p>
             
            </div>
          </div>
          <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm ">
            <div className="card-body">
            <h2 className=" text-2xl lg:text-4xl font-bold mb-3 lg:mb-16 text-center text-cyan-600 uppercase">update your Profile </h2>
            <form onSubmit={updateProfile}>

            <div className="form-control mb-2">
                <input
                  type="text"
                 value={users[0]?.email}
                 name='email'
                 disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-2">
              
                <input
                  type="text"
                  value={user?.displayName}
                  name='name'
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-2">
              
                <input
                  type="text"
                  name='link'
                  required
                  placeholder="Enter your social link"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-2">
              
                <input
                  type="number"
                  name='number'
                  required
                  placeholder="Enter your phone number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-2 ">
                
                <input
                  type="file"
                  name='photo'
                  placeholder="Profile Photo"
                  className="input input-bordered"
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update profile</button>
              </div>
            </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

