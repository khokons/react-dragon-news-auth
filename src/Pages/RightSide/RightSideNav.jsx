import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from "../../assets/qZone1.png";
import Qzone2 from "../../assets/qZone2.png";
import Qzone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>

            
           <div className='p-4 space-y-3 mb-3'>
           <h2>Login With</h2>
           <button className='btn flex w-full btn-outline'>
           <FaGoogle></FaGoogle>
             Google
           </button>

           <button className='btn flex w-full btn-outline'>
          <FaGithub></FaGithub>
            Github
           </button>
           </div>



           <div className='p-4 mb-3'>
           <h2>Find Us On</h2>

           <a className='flex items-center p-4 border rounded-t-lg' href="#"> 
           <FaFacebook className='mr-5'></FaFacebook>
           Facebook
           </a>

           <a className='flex items-center p-4 border border-x' href="#"> 
           <FaInstagram className='mr-5'></FaInstagram>
           Instagrame
           </a>


           <a className='flex items-center p-4 border rounded-b-lg' href="#"> 
           <FaTwitter className='mr-5'></FaTwitter>
           Twiter
           </a>
           </div>

           {/* Q-Zone */}

           <div className='p-4 space-y-3 mb-3'>
           <h2>Q-Zone </h2>
           <img src={Qzone1} alt="" />
           <img src={Qzone2} alt="" />
           <img src={Qzone3} alt="" />
        
           </div>


        </div>
    );
};

export default RightSideNav;