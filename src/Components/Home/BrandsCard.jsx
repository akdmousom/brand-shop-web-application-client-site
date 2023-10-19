import { Link } from "react-router-dom";


const BrandsCard = ({ brand }) => {
    const { brandName, logoImg } = brand

    return (
        <>
            <Link to={'/brands-all-products'}>

                <div className="relative flex flex-col  text-gray-800 bg-gray-300 shadow-md lg:w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
                        <img className="w-full" src={logoImg} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {brandName}
                        </h4>

                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

            </Link>
        </>
    );
};

export default BrandsCard;