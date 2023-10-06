import './main.css';
import PropTypes from 'prop-types'
export default function Loading({children}){
    return(
        <h1 className='text-[1.8rem] p-[2rem] text-center  tracking-[0.5rem] font-custom font-extrabold'>{children}</h1>
    )
} 
Loading.propTypes={
    children:PropTypes.node
}