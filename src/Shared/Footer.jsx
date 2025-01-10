import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 md:pt-16 lg:pt-24 w-11/12 mx-auto">
                <div className="">
                    <h3 className="text-3xl font-bold mb-4 text-[#F19100]">  Artifacts Atlas </h3>
                    <p className="text-white text-lg"> Preserving history, one artifact at a time. Explore the stories of ancient civilizations and timeless treasures. Connect with us to embark on a journey through the past, and uncover the legacy of humanity. </p>
                </div>

                <div className="lg:mx-auto">
                    <h3 className="text-3xl font-bold mb-4 text-[#F19100]"> Informations </h3>
                    <ul className="text-lg text-white">
                        <li><a href="#" className=""> About </a></li>
                        <li><a href="#" className=""> History </a></li>
                        <li><a href="#" className=""> Gallery </a></li>
                        <li><a href="#" className=""> Events </a></li>
                        <li><a href="#" className=""> Our Team </a></li>
                    </ul>
                </div>

                <div className="lg:text-center mb-12">
                    <h6 className="text-3xl font-bold text-[#F19100]"> Stay Connected</h6>
                    <p className="text-xl mb-4 text-white"> Stay Connected with us for more update </p>
                    <div className="flex justify-around text-white">
                        <a href="https://www.facebook.com/"> <FaSquareFacebook size={35}></FaSquareFacebook> </a>

                        <a href="https://www.x.com/"><FaInstagramSquare size={35}></FaInstagramSquare></a>

                        <a href="https://www.x.com/"><FaXTwitter size={35}></FaXTwitter></a>

                        <a href="https://www.linkedin.com/"><FaLinkedin size={35}></FaLinkedin></a>
                    </div>
                    <p className="text-lg mt-4 text-white"> Call: +8801234567891 </p>
                </div>

            </div>

            <hr className="w-10/12 mx-auto border-t-2 border-[#F19100]" />
            <div>
                <p className="text-center text-xl font-bold mt-5 pb-12 text-[#F19100]"> &#169; All rights reserved to Articrafts Atlas 2024</p>
            </div>
        </div>
    );
};

export default Footer;