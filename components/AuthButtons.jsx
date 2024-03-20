
const AuthButtons = () => {
  return (
    <div className='flex flex-col md:flex-row md:gap-10 md:ml-auto px-6 md:px-0 gap-4 mt-8 md:mt-0'>
        <button className='hover:text-[#151515]'>Login</button>
        <button className='border-2 md:px-6 rounded-2xl hover:text-[#151515] hover:border-[#151515] py-3'>Register</button>
    </div>
  )
}

export default AuthButtons