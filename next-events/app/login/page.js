import LoginForm from "../component/LoginForm";

export default function Login({ searchParams }) {
    return (
        <div className='mt-12 mx-auto w-full max-w-[400px] p-4 bg-slate-100'>
            <div className='space-y-2 text-center mb-6'>
                <h1 className='text-3xl font-bold'>
                    Login
                </h1>
                <p>Enter Your Login Credentials</p>
            </div>
            <LoginForm callbackUrl={searchParams?.callbackUrl}/>
        </div>
    )
}