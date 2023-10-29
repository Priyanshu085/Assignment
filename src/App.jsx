import { motion } from "framer-motion"

function App() {

  return (
    <>
      <div className='assignment-i'>
        <button className='btn bg-[#6884FD] '>
          Book Now 
        </button>
        
        <button className='btn bg-gradient-to-r from-sky-500 from-15% via-indigo-500 via-40% to-pink-600 hover:shadow-[#6884FD]'>
          Book Now
        </button>
      </div>

      <div className='assignment-ii'>
        <form className='form border-2 border-black'>
          <h1 className='my-4'>Registration Form</h1>
          <p className='w-full text-gray-500 my-4'>Register your account here</p>
          <div className="flex">
            <hr className="w-full justify-center my-auto mx-1 items-center border-[#625d5d]" />0<hr className="w-full justify-center my-auto mx-1 items-center border-[#625d5d]"/>
          </div>
          <label>Email</label><br/>
          <input placeholder='Email' required/>
          <br/>
          <label>Username</label><br/>
          <input placeholder='Username' required/>
          <br/>
          <label>Password</label><br/>
          <input placeholder='Password' required/>
          <br/>
          <label>Confirm Password</label><br/>
          <input placeholder='Confirm Password' required/>
          <button className='w-full btn bg-[red] hover:bg-gray-600'>Login</button>
          <p className='text-center'>
            <a href='#' className='text_link'>I forgot my password</a>
          </p>
          <div className="flex">
            <hr className="w-full justify-center my-auto mx-1 items-center border-[#625d5d]" />o<hr className="w-full justify-center my-auto mx-1 items-center border-[#625d5d]"/>
          </div>
          <p className='text-center'>Do you not have any account yet?</p>
          <p className='text-center'><a href='/' className='text_link'>Create new account</a></p>
        </form>
      </div>


      <div className="assignment-iii">
        <div className='text-center'>
          <h1 className="text-3xl font-bold mt-8">Blog</h1>
          <p>Explore diffferent variety of Blogs</p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 m-6 p-16 bg-[#d2d2d2] flex-wrap w-fit">
         
          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1 hover:bg-black hover:text-white'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 0.5 }}          
          >
            <div className='bg-blur-lg w-fit h-full m-2'>
              <div className="blog-title">
                <div className="overflow-hidden">
                  <img src="blog-bg.jpg" width={400} height={40} className="transition-transform border-2 z-50 border-white duration-500 ease-in hover:transform hover:scale-150"/>
                </div>
                <div className='flex m-5'>
                  <div className=''>
                    <img src="blog.jpeg" width={50} height={50} className='rounded-full border-2 z-50 border-white mt-[-35px]' />
                  </div>
                    <div className='flex items-center w-full justify-between'>
                      <div className='h-18'>
                        <h2 className='font-bold mx-5 text-black text-sm'>Priyanshu</h2>
                        <h5 className='mx-5 text-gray-700 text-xs'>Lucknow</h5>
                        <span className='mx-5 text-black text-xs'>Rating</span>  
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className="link w-14 h-14 rounded-md bg-[red] hover:cursor-pointer transform transition delay-1000 justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="white" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                <div className="m-5">
                  <h2 className='text-black font-bold'>Title</h2>
                  <p className='text-sm'>
                    Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis posuere turpis turpis, nec mollis nulla tincidunt sodales.
                  </p>
                  <div className='flex gap-4'>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                    <span className="labels">Pill labels</span>
                  </div>
                    <br/>
                    <hr />
                  <br/>
                  <div className="card">
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>123
                    </div>
                    <div className='flex flex-row gap-1 px-3 py-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>123
                    </div>
                    <button className='items-end  flex gap-2 border-2 border-black rounded-sm px-3 py-1'>
                      Connect 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="000" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
          </motion.div>

          </div>


      </div>
    </>
  )
}

export default App
