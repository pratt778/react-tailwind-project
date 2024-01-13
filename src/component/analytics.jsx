import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return <>
        <div className="a-container w-full bg-white p-6 flex items-center">
            <div className="elements grid gap-2 items-center md:grid-cols-2 max-w-[1200px] mx-auto">
                <div className="img m-auto w-[400px] sm:w-[450px]">
                    <img src={Laptop} alt="" />
                </div>
                <div className="info text-black flex flex-col items-center md:items-start gap-2 sm:gap-3">
                    <h3 className='text-green-800 font-bold sm:text-2xl '>Full Stack Dashboard</h3>
                    <h1 className='text-2xl font-bold sm:text-3xl'>Manage Websites Centrally</h1>
                    <span className='md:text-start sm:text-center text-gray-700 font-medium sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, officiis recusandae illum neque fugit nulla eaque at, ipsam inventore dolores, velit minima.</span>
                    <button className='text-green-500 bg-black px-4 py-3 rounded-md font-medium cursor-pointer sm:text-xl mt-3 hover:bg-green-400 hover:text-black'>Get Started</button>
                </div>
            </div>
        </div>

    </>
}

export default Analytics