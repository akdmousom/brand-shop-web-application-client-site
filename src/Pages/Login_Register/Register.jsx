import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Utils/AuthContext/AuthProvider";
import toast from "react-hot-toast";
import{FcGoogle} from 'react-icons/fc';


const Register = () => {
    const {createUser, googleSignIn} = useContext(userContext)

    const navigate = useNavigate();

    const handleRegister = (e) => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const profileimg = form.avater.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = {name, profileimg, email, password}

        
        if (!/[A-Z]/.test(password)) {

            toast.error("Please put a capital letter to your password")
            return
            
          } else if (!/[@#$%^&+=!]/.test(password)){
            toast.error("Please put a special character to your password")
            return
          }

          fetch('https://brand-shop-backend-ejo139ky4-arijit-kumar-das-projects.vercel.app/users', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
        

        createUser(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            if (user) {

                toast.success("Welcome to our Shop")
                
            }
            // ...
          })
          .catch((error) => {
            toast.error(error.message.slice(0,51))
            const errorMessage = error.message;
            toast.error(errorMessage)

            // ..
          });

    }

    const googleLogin = () => {
        
        googleSignIn()
        .then((result) => {
            const user = result.user;
            const {email, photoURL, displayName} = user
            const users = {name : displayName , profileimg : photoURL , email : email}
            fetch('https://brand-shop-backend-ejo139ky4-arijit-kumar-das-projects.vercel.app/users', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(users)
          })
          .then(res => res.json())
          
            navigate('/')
           
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            toast.error(errorMessage)
            
          });
    }



    return (
        <div className="md:h-[80vh] w-full mx-auto mt-5 grid md:justify-center md:items-center ">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                        Register
                    </h3>
                </div>
                <form onSubmit={handleRegister} action="">
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-11 w-full min-w-[100px]">
                            <input
                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " name="name" type="text" required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Full Name
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[100px]">
                            <input
                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " name="avater" type="text" required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Profile Img Link
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[100px]">
                            <input
                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " name="email" type="email" required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[100px]">
                            <input
                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " name="password" type="password" required
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>

                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Register
                        </button>
                        <button onClick={googleLogin}
                            className="flex justify-center mt-5 w-1/3 mx-auto select-none rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            <FcGoogle fontSize={30}/>
                        </button>
                        <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                            Already have an accout
                            <Link to={'/login'}
                                href="#signup"
                                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-pink-500"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;