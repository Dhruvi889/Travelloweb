import "./contact.css"

export function Contact() {
    return (
        <div>
            <div class="bgimg">

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
            <div className="superbinputboxes">
                <div className="maingetintouch">
                    <h1>Get in touch with us</h1>
                    <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.</p>
                    <button className="ADDRESS">ADDRESS:</button>
                    <p className="a1481">1481 Creekside Lane Avila Beach, CA 931</p>
                    <button className="ADDRESS">PHONE:</button>
                    <p className="a1481">+53 345 7953 32453</p>
                    <button className="ADDRESS">EMAIL:</button>
                    <p className="a1481">yourmail@gmail.com</p>
                </div>
                <div className="maininputs">
                    <input className="inputname" type="text" placeholder="Your Nme" />
                    <div className="mainmaildiv">
                        <input className="inputemail" type="text" placeholder="Ypur E-mail" />
                        <input className="inputemail" type="text" placeholder="Subject" />
                    </div>
                    <input className="inputmsg" type="text" placeholder="Message" />
                    <div>
                        <button className="SEND">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )

}