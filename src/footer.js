
import "./home.css"
import sign from "./assests/imgs/sign.svg"
import trecking from "./assests/imgs/trekking.svg"
import around from "./assests/imgs/around.svg"
export function Footer() {
    return (
        <div className="mainfooter">
            <div>
                <h1>Subscribe to our newsletter to get the latest trends & news</h1>
                <p>Join our database NOW!</p>
            </div>
            <div className="mainlastbuttons">
                <button className="btnnamefirst">Name</button>
                <button className="btnnamefirst" id="maile">Your e-mail</button>
                <button className="btnnamefirst" id="subs">SUBSCRIBE</button>
            </div>
            <div className="mainlastimgsfooter">
                <div>
                    <img width={80} src={sign} />
                    <h2>GIVE US A CALL</h2>
                    <p>Office Landline: +44 5567 32 664 567</p>
                    <p>Mobile: +44 5567 89 3322 332</p>
                </div>
                <div>
                    <img width={80} src={trecking} />
                    <h2>COME & DROP BY</h2>
                    <p>4124 Barnes Street, Sanford,</p>
                    <p>FL 32771</p>
                </div>
                <div>
                    <img width={80} src={around} />
                    <h2>SEND US A MESSAGE</h2>
                    <p>youremail@gmail.com</p>
                    <p>Office@yourbusinessname.com</p>
                </div>
            </div>
            <div>
                <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
            </div>
        </div>
    )
}