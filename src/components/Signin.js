import React from 'react'
import './Signin.css'
import { FcGoogle } from "react-icons/fc"
import { AiOutlineApple } from "react-icons/ai"
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='container'>
        <div className='box'>
            <div className='box-row'>
                <div className='left'> 
                    <div className='boards'>Board.</div> 
                </div>
                <div className='right'>
                    <div className='title'>Sign In</div>
                    <div className='acc'> Sign in to your account</div>
                    <div className='btns'>
                        <div className='btn-left'>
                            <button className='option'><FcGoogle size={18} />Sign in with Google</button>
                        </div>
                        <div className='btn-right'>
                            <button className='option'><AiOutlineApple size={18} style={{color: "#999999"}}/>Sign in with Apple</button>
                        </div>
                    </div>
                    <div className='form'>
                        <div className='card'>
                            <label>Email address</label> 
                            <input type='email' required></input>
                            <label>Password</label>
                            <input type='password' required></input>
                            <div className='forgot'><Link to ="/p" style={{ textDecoration: 'none' }}>Forgot password?</Link></div>
                            <Link to="/db" ><button>Sign in</button></Link>
                            <div className='dont'>Don't have an account? 
                                <Link to="/h"  style={{ textDecoration: 'none' }}> Register here</Link>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
    </div>
    </div>
  )
}

export default Signin