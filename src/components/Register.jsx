import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../context/authContext';

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const {userLoggedIn} = useAuth()

    const onSubmit = async(e) =>  {
        e.preventDefault()
        if(!isRegistering){
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email,password)
        }
    }

    return (
        <>
          {userLoggedIn && <Navigate to="/" replace={true} />}
    
          <main className="d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow border rounded w-100" style={{ maxWidth: '400px' }}>
              <div>
                <img className="logo-login" src="./images/fiorucci-logo-light.png"/>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-dark">Crea una nueva cuenta</h3>
              </div>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Password</label>
                  <input
                    disabled={isRegistering}
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Confirm Password</label>
                  <input
                    disabled={isRegistering}
                    type="password"
                    autoComplete="off"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                {errorMessage && <span className="text-danger fw-bold d-block">{errorMessage}</span>}
                <button
                  type="submit"
                  disabled={isRegistering}
                  className={`btn btn-primary w-100 mt-3 ${isRegistering ? 'disabled' : ''}`}
                >
                  {isRegistering ? 'Signing Up...' : 'Sign Up'}
                </button>
                <div className="text-center mt-3">
                  <span className="text-secondary">Ya tenes una cuenta? </span>
                  <Link to="/login" className="fw-bold text-decoration-underline">
                    Continuar
                  </Link>
                </div>
              </form>
            </div>
          </main>
        </>
      );
    };

export default Register
