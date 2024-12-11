import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

    const [name, setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()


    const handleSubmitLogin = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/login',{name,email,password})
        .then(result => {
          console.log(result)
          if(result.data === "Success") {
            navigate('/')
          }
        })
        .catch(err => console.log(err))
      }

  return (
    <div>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-email">
                Name
              </label>
              <input
                type="text"
                id="login-name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-email">
                Email
              </label>
              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-password">
                Password
              </label>
              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit'
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              onClick={handleSubmitLogin}
              
            >
              Log In
            </button >
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Forgot Password?</a>
            </div>
          </div>
  )
}

export default SignIn
