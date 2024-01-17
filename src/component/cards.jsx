import Single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = ()=>{



return <>
    <div className="card-container h-[fit] bg-white w-full text-black pt-4 pb-3">
        <div className="main-card flex flex-col justify-center items-center gap-4 p-2 sm:grid sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] mx-auto">
            <div className="cards flex flex-col w-[300px] items-center hover:scale-105 justify-center gap-4 rounded-lg py-4 shadow-xl md:w-[250px] lg:w-[310px] ">
                <img src={Single} alt="single image" className='w-[60px]'/>
                <h1 className='font-bold'>Single User</h1>
                <h3 className='font-bold text-3xl'>$149</h3>
                <div className="list flex flex-col gap-4 w-[85%]">
                    <span className='font-bold border-t-2 border-gray-200 text-center'>500GB Storage</span>
                    <span className='font-bold border-t-2 border-gray-200 text-center'>1 User Allowed</span>
                    <span className='font-bold border-t-2 border-gray-200 border-b-2 text-center'>Send Upto 2GB</span>
                </div>
                <button className='bg-black px-4 py-2 text-green-500 rounded-md cursor-pointer' >Start Trial</button>
            </div>
            <div className="cards flex flex-col w-[260px] items-center justify-center hover:scale-105 gap-4 rounded-lg py-4 shadow-xl md:w-[250px] lg:w-[310px] md:mt-3 bg-gray-100">
                <img src={double} alt="single image" className='w-[60px]'/>
                <h1 className='font-bold'>Partnership</h1>
                <h3 className='font-bold text-3xl'>$199</h3>
                <div className="list flex flex-col gap-4 w-[85%]">
                    <span className='font-bold border-t-2 border-gray-200 text-center'>1TB Storage</span>
                    <span className='font-bold border-t-2 border-gray-200 text-center'>3 User Allowed</span>
                    <span className='font-bold border-t-2 border-gray-200 border-b-2 text-center'>Send Upto 10GB</span>
                </div>
                <button className='bg-green-700 px-4 py-2 text-black-500 rounded-md cursor-pointer' >Start Trial</button>
            </div>
            <div className="cards flex flex-col w-[300px] items-center justify-center hover:scale-105 gap-4 rounded-lg py-4 shadow-xl md:w-[250px] lg:w-[310px]">
                <img src={triple} alt="single image" className='w-[60px]'/>
                <h1 className='font-bold'>Group Account</h1>
                <h3 className='font-bold text-3xl'>$299</h3>
                <div className="list flex flex-col gap-4 w-[85%]">
                    <span className='font-bold border-t-2 border-gray-200 text-center'>5TB Storage</span>
                    <span className='font-bold border-t-2 border-gray-200 text-center'>10 User Allowed</span>
                    <span className='font-bold border-t-2 border-gray-200 border-b-2 text-center'>Send Upto 20GB</span>
                </div>
                <button className='bg-black px-4 py-2 text-green-500 rounded-md cursor-pointer' >Start Trial</button>
            </div>
        </div>
    </div>


</>
}

export default Cards