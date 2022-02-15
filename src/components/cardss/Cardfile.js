import React from 'react'
import './cardfile.css'
import img from './../../images/face.jpeg'
const Cardfile = () => {
  return (
      <>
    <div className="row">
            <div className="col-left">
                <div className="card">
                    <div className="profilepic">
                            <img src={img} />
                    </div>
                    <h1 className="profilename">Krishnaswamy Subramanium</h1>
                    <h5 className="shortnote">Aspiring UX Designer</h5>
                    <div className="line"></div>
                    <h1 className="toparea">Top Areas</h1>
                    <div className="areas">
                        <h4 className="areanames">Software Development Life Cylcle(SDLC)</h4>
                    </div>
                    <div className="areas">
                        <h4 className="areanames">Github,Gith Version Control</h4>
                    </div>
                    <div className="areas">
                        <h4 className="areanames">Software Dev Methologies</h4>
                    </div>

                </div>

                <div className="card">
                    <div className="profilepic">
                            <img src={img} />
                    </div>
                    <h1 className="profilename">Krishnaswamy Subramanium</h1>
                    <h5 className="shortnote">Aspiring UX Designer</h5>
                    <p className="edu">B.Tech,2 Year</p>
                    <p className="location">Chennai</p>
                    <div className="line1"></div>
                    <h1 className="toparea">Top Areas</h1>
                    <div className="areas">
                        <h4 className="areanames">Software Development Life Cylcle(SDLC)</h4>
                    </div>
                    <div className="areas">
                        <h4 className="areanames">Github,Gith Version Control</h4>
                    </div>
                    <div className="areas">
                        <h4 className="areanames">Software Dev Methologies</h4>
                    </div>

                </div>
                
            </div>
            <div className="col-right">
                <div className="card">
                    <div className="profilepic">
                            <img src={img} />
                    </div>
                    <h1 className="profilename">Krishnaswamy Subramanium</h1>
                    <h5 className="shortnote">Aspiring UX Designer</h5>
                    <p className="edu">B.Tech, 3year</p>
                    <p className="location">Chennai</p>
                    <div className="line1"></div>
                    <h1 className="toparea">Top Areas</h1>
                    <div className="areas">
                        <h4 className="areanames">Software Development Life Cylcle(SDLC)</h4>
                    </div>
                    <div className="areas">
                        <h4 className="areanames">Github,Gith Version Control</h4>
                    </div>
                    <div className="areas">
                        <h4 className="areanames">Software Dev Methologies</h4>
                    </div>

                </div>
                <div className="card">
                    <div className="profilepic">
                            <img src={img} />
                    </div>
                    <h1 className="profilename">Krishnaswamy Subramanium</h1>
                    <h5 className="shortnote">Aspiring UX Designer</h5>
                    <p className="edu">B.Tech</p>
                    <p className="location">Chennai</p>
                    <div className="line1"></div>
                    <h1 className="toparea">Top Areas</h1>
                    <div className="areas">
                        <h4 className="areanames">Software Development Life Cylcle(SDLC)</h4>
                    </div>
                    
                   

                </div>
            </div>
        
    </div>
    
</>
  )
}

export default Cardfile