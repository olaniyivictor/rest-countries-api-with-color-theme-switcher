
import './main.css';
import PropTypes from 'prop-types';
export default function OptionList({children}){
    return(
        <div>{children}</div>
    )
}
OptionList.propTypes={
    children:PropTypes.node,
}