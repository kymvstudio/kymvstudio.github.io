import { BsInstagram  } from "react-icons/bs";
import { FaTiktok,FaFacebookSquare  } from "react-icons/fa";


const Footer = () => {
    return (
        <footer
        className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-black dark:text-yellow-500">
        <div className="container px-6 pt-6">
          <div className="mb-6 flex justify-center space-x-2">
            <a href="#"><FaFacebookSquare size={30}/></a>
            <a href="#"><BsInstagram  size={30}/></a>
            <a href="#"><FaTiktok   size={30}/></a>
            
          </div>

            <div className="w-full bg-black/20 p-4 text-center">
            © 2024 KYMV Studio - All rights reserved.
            </div>
        </div>
        </footer>
    );
}

export default Footer;