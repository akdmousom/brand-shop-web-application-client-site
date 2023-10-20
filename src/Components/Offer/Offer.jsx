import PropTypes from 'prop-types';

const Offer = ({img}) => {
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

Offer.propTypes ={
    img : PropTypes.string.isRequired
}
export default Offer;