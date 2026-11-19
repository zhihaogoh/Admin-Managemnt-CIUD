import PropTypes from "prop-types"

export default function Title({title}){
    return(
        <div className="title my-3">
        <h2>{title}</h2>

        </div>
    )
}

Title.propTypes = {
    title : PropTypes.string.isRequired
}