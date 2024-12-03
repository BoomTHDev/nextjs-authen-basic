export default function SigninPage() {
  return (
    <form action='' className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>name</label>
        <input type='text' id='name' name='name' className='px-3' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>email</label>
        <input type='email' id='email' name='email' className='px-3' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='password'>password</label>
        <input type='password' id='password' name='password' className='px-3' />
      </div>
      <button className='text-center w-full p-2 bg-white text-black'>Sign In</button>
    </form>
  );
};