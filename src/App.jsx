import './App.css'

function App() {

  return (
    <>
      <div className='assignment-i'>
        <button className='btn'>
          Book Now 
        </button>
        
        <button className='btn bg-gradient-to-r from-sky-500 from-15% via-indigo-500 via-40% to-pink-600'>
          Book Now
        </button>
      </div>

      <div className='assignment-ii'>
        <form action="" className='form'>
          <h1 className='my-4'>Registration Form</h1>
          <p className='w-full text-gray-500 my-4'>Register your account here</p>
          <br/>
          <label>Email</label><br/>
          <input placeholder='Email' />
          <br/>
          <label>Username</label><br/>
          <input placeholder='Username' />
          <br/>
          <label>Password</label><br/>
          <input placeholder='Password' />
          <br/>
          <label>Confirm Password</label><br/>
          <input placeholder='Confirm Password' />
          <button className='w-full btn bg-[red] hover:bg-gray-600'>Login</button>
          <p className='text-center'>
            <a href='#' className='text_link'>I forgot my password</a>
          </p>

          <p className='text-center'>Do you not have any account yet?</p>
          <p className='text-center'><a href='/' className='text_link'>Create new account</a></p>
        </form>
      </div>
    </>
  )
}

export default App
