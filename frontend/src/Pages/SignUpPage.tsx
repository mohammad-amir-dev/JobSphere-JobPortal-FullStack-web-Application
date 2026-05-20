import { IconAnchor, IconArrowLeft } from "@tabler/icons-react"
import SignUp from "../Components/SignUpLogin/SignUp"
import Login from "../Components/SignUpLogin/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, LoadingOverlay } from "@mantine/core";

const SignUpPage = () => {
    const location=useLocation();
    const navigate=useNavigate();
    return <div data-aos="zoom-out"  className={` h-[100vh] w-[100vw] overflow-hidden sm-mx:overflow-y-auto  relative`}>
        <Button size="sm" className="!absolute left-5 z-10" onClick={() => navigate("/")} my="lg" color="brightSun.4" leftSection={<IconArrowLeft size={20} />} variant="light">Home</Button>

        <div   className={`flex [&>*]:flex-shrink-0 transition-all relative ease-in-out duration-1000 ${location.pathname=='/signup'?'-translate-x-1/2 sm-mx:-translate-x-full':'translate-x-0'}`}>
<Login/>
        <div className={`w-1/2 h-[100vh] sm-mx:hidden  sm-mx:min-h-full transition-all duration-1000 flex  items-center  gap-5 justify-center flex-col ${location.pathname=='/signup'?'rounded-r-[200px]':'rounded-l-[200px]'} bg-mine-shaft-900`}>
            <div className="flex items-center gap-1 text-bright-sun-400">
                <IconAnchor className="w-16 h-16" stroke={2.5} />
                <div className="text-6xl font-semibold bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl">JobSphere</div>
            </div>
            <div className="text-2xl font-semibold bs-mx:text-xl md-mx:text-lg text-mine-shaft-200">Find the job made for you</div>
        </div>
        <SignUp  />
        </div>
    </div>
}
export default SignUpPage