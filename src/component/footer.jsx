const Footer = () => {


    return <>
        <div className="footer-container w-full p-4">
            <div className="main-footer p-4 flex flex-col gap-3 lg:flex-row lg:justify-between max-w-[1200px] mx-auto">
                <div className="infos flex flex-col gap-3 lg:w-[50%]">
                    <h1 className="text-xl font-bold text-green-600">REACT.</h1>
                    <span className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quod aspernatur delectus pariatur, obcaecati fugit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, ipsa.</span>
                    <div className="icons flex gap-4 text-3xl">
                        <i className="ri-facebook-circle-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-fill"></i>
                        <i className="ri-github-fill"></i>
                        <i className="ri-reactjs-line"></i>
                    </div>
                </div>
                <div className="lists grid grid-cols-3 gap-2 sm:grid-cols-4">
                    <ul>
                        <h3 className="font-medium text-gray-400">Solutions</h3>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                    <ul>
                        <h3 className="font-medium text-gray-400">Support</h3>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                    <ul>
                        <h3 className="font-medium text-gray-400">Company</h3>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                    <ul>
                        <h3 className="font-medium text-gray-400">Legal</h3>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>

            </div>
        </div>

    </>
}
export default Footer;