import { cookies } from 'next/headers';

async function singup(formData: FormData) {
  'use server'
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const url = 'http://localhost:3002/api'

  try {
    const payload = {
      name,
      email,
      password,
    };
  
    const response = await fetch(`${url}/auth/sign-up`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    
    // set cookies
    const cookieStore = await cookies();
    cookieStore.set('token', data.token);

  } catch (error) {
    console.log(error);
  };
};

export default function SignupPage() {
  return (
    <form action={singup} className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>name</label>
        <input type='text' id='name' name='name' className='px-3 text-black' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>email</label>
        <input type='email' id='email' name='email' className='px-3 text-black' />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='password'>password</label>
        <input type='password' id='password' name='password' className='px-3 text-black' />
      </div>
      <button className='text-center w-full p-2 bg-white text-black'>Sign Up</button>
    </form>
  );
};