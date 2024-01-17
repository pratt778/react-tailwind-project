const News = () => {
    return <>
        <div className="news-container max-w-[1200px] bg-black w-full mx-auto p-2">
            <div className="newsletter flex py-4 flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
                <div className="question h-[120px] flex flex-col justify-center gap-2 ">
                    <h1 className="font-medium text-xl">Want tips and trick for Responsive websites?</h1>
                    <p className="text-gray-500 font-medium text-lg">Sign up to our newsletter to stay upto date.</p>
                </div>
                <div className="searchbox flex flex-col gap-3 w-full sm:w-fit ">
                    <form className="flex gap-2 w-full">
                        <input type="email" placeholder="Enter your Email" className="py-2 px-1 text-black outline-none rounded-md w-full" />
                        <button className="bg-green-500 px-2 rounded-md outline-none font-medium w-[130px]">Notify me</button>
                    </form>
                    <p className="text-gray-400 font-medium">We care about the protection of data.</p>
                    <a href="#" className="underline text-green-500">Privacy Policy</a>
                </div>
            </div>
        </div>

    </>
}

export default News;