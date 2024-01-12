
import Typed from "react-typed";
 const Hero = ()=>{

    return <>
    <div className="hero h-screen flex justify-center items-center p-4">
        <div className="middle-hero flex flex-col gap-2 items-center">
            <p className="text-green-600 font-bold sm:text-2xl">Grow with Web Development</p>
            <p className="text-2xl font-bold sm:text-4xl md:text-5xl">Grow with Front-End</p>
            <div className="flex items-center">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl"> Free courses for</p>

            <Typed strings={['HTML','CSS','JS','Frameworks']} backSpeed={100} typeSpeed={100} loop className="font-bold text-2xl sm:text-3xl md:text-4xl pl-4"/>
            </div>
            <p className="text-center text-gray-600 font-bold text-md sm:text-lg md:text-xl">Learn new courses and languages with us for free using this platform</p>
            <a href="#" className="bg-green-600 p-2 px-4 mt-3 font-bold rounded-lg hover:bg-green-800 hover:text-black text-md  sm:text-lg md:text-xl">Get Started</a>
        </div>
    </div>
    </>
}

export default Hero