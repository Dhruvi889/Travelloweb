import "./about.css"
import about1 from "./assests/imgs/about_1.jpg"
import mountain from "./assests/imgs/mountain.svg"
import island from "./assests/imgs/island.svg"
import camera from "./assests/imgs/camera.svg"
import boat from "./assests/imgs/boat.svg"
import why11 from "./assests/imgs/why_11.svg"
import why22 from "./assests/imgs/why_22.jpg"
import why33 from "./assests/imgs/why_33.svg"
import why1 from "./assests/imgs/why_1.jpg"
import why2 from "./assests/imgs/why_2.svg"
import why3 from "./assests/imgs/why_3.jpg"
import team1 from "./assests/imgs/team_1.jpg"
import team2 from "./assests/imgs/team_2.jpg"
import team3 from "./assests/imgs/team_3.jpg"
import team4 from "./assests/imgs/team_4.jpg"

export function About() {
    return (
        <div>
            <div class="bgimg2">

                <div className="mainbuttons">
                    <div>
                        <button className="btnsarh">  Search for your trip</button></div>
                    <div className="mainseabtn">
                        <button className="city">City</button>
                        <button id="dear" className="city">Departure</button>
                        <button id="dear1" className="city">Arrival</button>
                        <button id="bud" className="city">Budget</button>
                        <button className="Searchb">SEARCH</button>
                    </div>
                </div>

            </div>
            <div className="sipy">
                <p className="SIMPLY">SIMPLY AMEZING PLACES</p>
                <h1>A few words about us</h1>
            </div>
            <div className="Pellentesque">
                <div>
                    <p className="ametelementum">Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu laoreet ante, sollicitudin volutpat quam. Vestibulum posuere malesuada ultrices. In pulvinar rhoncus lacus at aliquet. Nunc vitae lacus varius, auctor nisi sit amet, consectetur mauris. Curabitur sodales semper est, vel faucibus urna laoreet vel. Ut justo diam, sodales non pulvinar at, vulputate quis neque. Etiam aliquam purus vel ultricies consequat.</p>
                    <button className="readbtn">READ MORE</button>
                </div>
                <div>
                    <img className="about11" width={600} height={500} src={about1} />
                </div>
            </div>
            <div className="mainonlinecourses">
                <div className="stud">
                    <img width={80} src={mountain} />
                    <h1 className="main17">17</h1>
                    <p className="Online">Online Courses</p>
                </div>
                <div className="stud">
                    <img width={80} src={island} />
                    <h1 className="main17">213</h1>
                    <p className="Online">Students</p>
                </div>
                <div className="stud">
                    <img width={80} src={camera} />
                    <h1 className="main17">11923</h1>
                    <p className="Online">Teachers</p>
                </div>
                <div className="stud">
                    <img width={80} src={boat} />
                    <h1 className="main17">15</h1>
                    <p className="Online">Countries</p>
                </div>
            </div>
            <div className="mainbgimgabc">
                <div className="whyusbb">
                    <p >SIMPLY AMAZING PLACES</p>
                    <h1 className="Whya">Why choose us?</h1>
                </div>
                <div className="mainwhy11">
                    <div className="mainwhy1img">
                        <div className="imgwhy1">
                            <img width={50} src={why11} />
                        </div>
                        <div className="fasts">
                            <img width={350} src={why1} />
                            <div className="subfasts">
                                <h1>Fast Services</h1>
                                <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mainwhy1img">
                        <div className="imgwhy1">
                            <img width={50} src={why2} />
                        </div>
                        <div className="fasts">
                            <img width={350} src={why22} />
                            <div className="subfasts">
                                <h1>Great Team</h1>
                                <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mainwhy1img">
                        <div className="imgwhy1">
                            <img width={50} src={why33} />
                        </div>
                        <div className="fasts">
                            <img width={350} src={why3} />
                            <div className="subfasts">
                                <h1>Best Deals</h1>
                                <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="meeta">
                <p>SIMPLY AMAZING PLACES</p>
                <h1 className="Team" >Meet the Team</h1>
            </div>
            <div className="mainWilliams">
                <div className="mainMargaret">
                    <img className="Margaret" src={team1}/>
                   <h2>Margaret Smith</h2>
                   <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                </div>
                <div className="mainMargaret">
                    <img className="Margaret" src={team2}/>
                   <h2>James Williams</h2>
                   <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                </div>
                <div className="mainMargaret">
                    <img className="Margaret" src={team3}/>
                   <h2>Michael James</h2>
                   <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                </div>
                <div className="mainMargaret">
                    <img className="Margaret" src={team4}/>
                   <h2>Noah Smith</h2>
                   <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                </div>
            </div>
        </div>
    )
}