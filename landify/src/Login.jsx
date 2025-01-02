import './index.css'
import './login.css'

function Login(){
    return(
        <>
            <div className="container secundary-bg">
                <h1 className='primary-text'>Login</h1>
                <form action="">
                    <input type="email" className="primary-text secundary-bg" placeholder='Email'/>
                    <br />
                    <input type="password" className="primary-text secundary-bg" placeholder='Password'/>
                    <br />
                    <button className="secundary-bg primary-text">Next</button>
                </form>
            </div>
        </>
    )
}

export default Login