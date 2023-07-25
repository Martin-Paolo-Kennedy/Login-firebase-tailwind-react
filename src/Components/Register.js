import {useState} from 'react';
import {useAuth} from '../context/authContext';
import {useNavigate} from 'react-router-dom';
import {Alert} from './Alert';

export function Register(){
    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const {signup} = useAuth();
    const navigate = useNavigate();
    const[error, setError] = useState();

    const handleChange = ({target:{name,value}}) => 
        setUser({...user, [name]:value})

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/');

        } catch (error) {
            console.log(error.code);
            if(error.code === "auth/internal-error"){
                setError('Correo invalido')
            }
            //setError(error.message);
        }
    };

    return (
        <div className='w-full max-w-xs m-auto'>

            {error && <Alert message={error}/>}

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

            <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-fold mb-2'>Email</label>
                <input type='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='ejemplo@gmail.com' name="email" id="email" onChange={handleChange}></input>
            </div>
                
            <div className='mb-4'>
                <label htmlFor='password'>Password</label>
                <input type='password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" onChange={handleChange}></input>
            </div>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:shadow-outline'>Registrar</button>
            </form>
        </div>
    );

}
