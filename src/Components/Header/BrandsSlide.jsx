import PropTypes from 'prop-types';
const BrandsSlide = ({img}) => {
    return (
        <div>
            <img className="h-[200px] w-[200px]" src={img} alt="" />
        </div>
    );
};

BrandsSlide.propTypes={
    img: PropTypes.string.isRequired
}

export default BrandsSlide;