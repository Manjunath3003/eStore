import React from 'react'
// import PropTypes from "prop-types"
const Rating = ({value, totalValue, color}) => {
    const ratingsList=[1,2,3,4,5]
    return (
        <div className="rating">
            {ratingsList.map((rating=>(<span key={rating}>
                <i style={{color:color}} className={value >=rating? 'fas fa-star' : value>=(rating-0.5)? 'fas fa-star-half-alt' : 'far fa-star' }/>
            </span>)))}
            {/* <span>
                <i className={value >=1? "fa fa-star" : value>=0.5? "fa fa-star-half-o" : "fa fa-star-o" }/>
            </span>
            <span>
                <i className={value>=2?"fa fa-star" : value>=1.5? "fa fa-star-half-o" : "fa fa-star-o" }/>
            </span>
            <span>
                <i className={value>=3?"fa fa-star" : value>=2.5? "fa fa-star-half-o" : "fa fa-star-o" }/>
            </span>
            <span>
                <i className={value>=4?"fa fa-star" : value>=3.5? "fa fa-star-half-o" : "fa fa-star-o" }/>
            </span>
            <span>
                <i className={value>=5?"fa fa-star" : value>=4.5? "fa fa-star-half-o" : "fa fa-star-o" }/>
            </span> */}
        <span>{totalValue && `${totalValue} reviews`}</span>
        </div>
    )
}

Rating.defaultProps={
    color:"#f8e825"
}
// Rating.propTypes={
//     value: PropTypes.number.isRequired,
//     totalValue: PropTypes.number.isRequired,
//     color:PropTypes.string
// }

export default Rating
