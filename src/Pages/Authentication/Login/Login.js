import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignin from './GoogleSignin/GoogleSignin';
import "./Login.css";
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleToSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);


    }

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        toast(error.message);
    }
    if (user) {
        navigate('/');
    }

    return (
        <div className='mx-auto my-5 form p-2'>
            <h2 className='text-center text-success'>Please Login</h2>
            <div className='border p-3 rounded-3'>
                <Form onSubmit={handleToSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block' variant="success" type="submit">
                        Login
                    </Button>

                    <p className='text-center my-4'>You have not an account? <Link to="/register" className='text-primary sign-up fw-bold'>Register now!</Link></p>
                    <GoogleSignin></GoogleSignin>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;