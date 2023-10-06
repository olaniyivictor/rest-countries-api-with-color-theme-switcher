import './main.css';
export default function ErrorMessage({children}){
    return(
        <h1  className='text-[1.8rem] p-[2rem] text-center  tracking-[0.5rem] font-custom font-extrabold'>{children}</h1>
    )
}