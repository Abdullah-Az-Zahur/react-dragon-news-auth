import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className='text-3xl'>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className='text-3xl mb-6'>Find Us On</h2>
                <a className="flex p-4 text-lg items-center border rounded-t-lg" href=""><FaFacebookF className="mr-2" />Facebook</a>
                <a className="flex p-4 text-lg items-center border-x " href=""><FaTwitter className="mr-2" />Twitter</a>
                <a className="flex p-4 text-lg items-center border rounded-b-lg" href=""><FaInstagram className="mr-2" />Instagram</a>
            </div>
            {/* q Zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className='text-3xl'>Login With</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;