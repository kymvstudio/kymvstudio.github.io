import { BsInstagram  } from "react-icons/bs";
import { FaTiktok,FaFacebookSquare  } from "react-icons/fa";


const Footer = () => {
    return (
        <footer
        className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
        <div className="container px-6 pt-6">
          <div className="mb-6 flex justify-center space-x-2">
            <FaFacebookSquare size={30}/>
            <BsInstagram  size={30}/>
            <FaTiktok   size={30}/>
            
          </div>

            <div className="w-full bg-black/20 p-4 text-center">
            © 2024 KYMV Studio - All rights reserved.
            </div>
        </div>
        </footer>
    );
}

export default Footer;