import './main.css'
import PropTypes from 'prop-types'
export default function SearchBar({children}){
    
function handSubmit(e){
    e.preventDefault();
  }
    return(
       <div><form onSubmit={handSubmit} name='a'>{children}</form></div> 
    )
}
SearchBar.propTypes={
children:PropTypes.node,

}