import './Login.css'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {
  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="login-left">
            <h3 className="login-logo">Diosocial</h3>
            <span className="login-descr">Connnect with friends and the world arround you on Diosocial.</span>
        </div>
        <div className="login-right">
            <div className="login-box">
              <input
                placeholder='Email' 
                type="email" 
                className="login-input"
                />
                
              <input 
                placeholder='Password'
                type="password" 
                className="login-input" 
                />
                {/* <VisibilityOffIcon className='hidePassword'/>
                <VisibilityIcon className='showPassword'/> */}
                <button className="login-button">Log In</button>
                <span className="forgot-password">Forgot password</span>
                <button className="login-register-button">
                  Create a New Account
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
