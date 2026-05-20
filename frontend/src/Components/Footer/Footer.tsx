import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router-dom";
import { Divider } from "@mantine/core";

const Footer = () => {
    const location=useLocation();
    return location.pathname!='/signup' && location.pathname!='/login'?<div className="flex flex-col gap-2"><div className="flex flex-wrap justify-around gap-8 p-4 pt-20 pb-5 bg-mine-shaft-950">
        <div data-aos="fade-up"  data-aos-offset="0"  className="flex flex-col w-1/4 gap-4 sm-mx:w-1/3 xs-mx:w-1/2 xsm-mx:w-full">
            <div className="flex items-center gap-1 text-bright-sun-400">
                <IconAnchor className="w-6 h-6" stroke={2.5} />
                <div className="text-xl font-semibold">JobSphere</div>
            </div>
            <div className="text-sm text-mine-shaft-300">Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
            <div className="flex gap-3 text-bright-sun-400 [&>a]:bg-mine-shaft-900 [&>a]:p-2 [&>a]:rounded-full [&>a]:cursor-pointer hover:[&>a]:bg-mine-shaft-700">
                <a href="_/"><IconBrandInstagram /></a>
                <a href=""><IconBrandTelegram /></a>
                <a href=""><IconBrandYoutube /></a>
            </div>
        </div>
        {
            footerLinks.map((item, index) => <div  data-aos-offset="0"  data-aos="fade-up" key={index}>
                <div className="mb-4 text-lg font-semibold text-bright-sun-400">{item.title}</div>
                {
                    item.links.map((link, index) => <div key={index} className="mb-1 text-sm transition duration-300 ease-in-out cursor-pointer text-mine-shaft-300 hover:text-bright-sun-400 hover:translate-x-2">{link}</div>)
                }
            </div>)
        }
    </div>
    <Divider/>
    <div data-aos="flip-left"  data-aos-offset="0" className="p-5 font-medium text-center">
        Designed & Developed By <a className="font-semibold text-bright-sun-400 hover:underline " href="">Mohammad Amir</a>
    </div>
    </div>:<></>
}
export default Footer;