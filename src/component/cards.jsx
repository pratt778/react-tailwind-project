import Single from '../single.png'

const Cards = ()=>{



return <>
    <div className="cards-container">
        <div className="main-card">
            <div className="cards">
                <img src={Single} alt="single image"/>
                <h1>Single User</h1>
                <h3>$149</h3>
                <div className="list">
                    <span>500GB Storage</span>
                    <span>1 User Allowed</span>
                    <span>Send Upto 2GB</span>
                </div>
                <button>Start Trial</button>
            </div>
            <div className="cards"></div>
            <div className="cards"></div>
        </div>
    </div>


</>
}

export default Cards