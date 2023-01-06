import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../user.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    // const navigate = useNavigate()
    const initialValues = { name: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        const loggedUser = JSON.parse(localStorage.getItem("registeredUserList"))
        const found = loggedUser.find(user => user.name === formValues.name && user.password === formValues.password)
        if (found) {
                toast.success(`Welcome ${found.name}`)
              
        }
            else {
                toast.warning("wrong Credentials")
            }

    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors,isSubmit]);

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.name = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='outer'>
                    <h3>Login</h3>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div style={{ color: "green" }}>Signed in successfully</div>) : null}
                    <div className='img'>
                        <div className='containerImg'>
                            <img style={{borderRadius:'60%',height:'auto',width:'30%'}} className='profile' src={profile} alt='profile' />
                        </div>
                    </div>
                    <input className='user' type="text" name="name" placeholder="Username" value={formValues.name} onChange={handleChange} />
                    <p style={{ color: "red" }}>{formErrors.username}</p>
                    <input className='pass' type="password" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                    <p style={{ color: "red" }}>{formErrors.password}</p>
                    <div className='btn'>
                        <button className='SignUpButton'>Login</button>
                    </div>
                </div>
                <br />
                <p>Don't have an account?<br /><Link to='/register'>Register</Link></p>
            </form>
            <ToastContainer/>
        </>
    )
}

export default Login