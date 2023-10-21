import PropTypes from 'prop-types';
const BrandsSlide = ({img}) => {
    return (
        <div>
            <img className=" flex h-[150px] w-[400px] px-8 items-center" src={img} alt="" />
        </div>
    );
};

BrandsSlide.propTypes={
    img: PropTypes.string.isRequired
}

export default BrandsSlide;