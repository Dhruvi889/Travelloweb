import "./news.css"
import news4 from "./assests/imgs/news_4.jpg"
import news5 from "./assests/imgs/news_5.jpg"
import news6 from "./assests/imgs/news_6.jpg"
import latest2 from "./assests/imgs/latest_2.jpg"
import travello from "./assests/imgs/travello.jpg"

export function News() {
    return (
        <div>
            <div class="bgimg3">

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
            <div className="superbcategorys">
                <div className="mainbesttips">
                    <div>
                        <img className="imgo2june" src={news4} />
                        <h1>02<span className="june2"> JUNE</span></h1>
                        <h2>Best tips to travel light</h2>
                        <p className="LIFESTYLE">LIFESTYLE & TRAVEL</p>
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
                        <h3 className="Readmore">Read More</h3>
                    </div>
                    <div>
                        <img className="imgo2june" src={news5} />
                        <h1>02<span className="june2"> JUNE</span></h1>
                        <h2>10 Amazing Destination for you this summer</h2>
                        <p className="LIFESTYLE">LIFESTYLE & TRAVEL</p>
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
                        <h3 className="Readmore">Read More</h3>
                    </div>
                    <div>
                        <img className="imgo2june" src={news6} />
                        <h1>02<span className="june2"> JUNE</span></h1>
                        <h2>How to organize your perfect vacation</h2>
                        <p className="LIFESTYLE">LIFESTYLE & TRAVEL</p>
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet. Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
                        <h3 className="Readmore">Read More</h3>
                    </div>
                </div>
                <div className="maincat">
                    
                    <div className="category">
                        <h2>Categories</h2>
                        <div className="mainorg">
                            <div >
                                <p>Travels</p>
                                <p>Organization</p>
                                <p>Tips & Tricks</p>
                                <p>Uncategorized</p>
                            </div>
                            <div >
                                <p>(09)</p>
                                <p>(12)</p>
                                <p>(!6)</p>
                                <p>(22)</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h2 className="Latest">Latest News</h2>
                        <div className="mainPellentesque">
                            <img className="imgnews5"  height={100} src={news4} />
                            <div >
                                <h3>02<span className="june2">  JUNE</span></h3>
                                <h3 className="besttips">Best tips to travel light</h3>
                                <p>Pellentesque sit amet..</p>
                            </div>
                        </div>
                        <div id="travelloimgs" className="mainPellentesque">
                            <img  className="imgnews5" height={100} src={latest2} />
                            <div >
                                <h3>02<span className="june2">  JUNE</span></h3>
                                <h3 className="besttips">Best tips to travel light</h3>
                                <p>Pellentesque sit amet..</p>
                            </div>
                        </div>
                        <div className="mainPellentesque">
                            <img className="imgnews5" height={100} src={travello} />
                            <div >
                                <h3>02<span className="june2">  JUNE</span></h3>
                                <h3 className="besttips">Best tips to travel light</h3>
                                <p>Pellentesque sit amet..</p>
                            </div>
                        </div>
                    </div>
                    <div className="bgimgtra">

                        <div className="getdis">
                            <span className="getadis20">Get a 20% Discount</span>
                            <span className="byour">Buy Your Vacation Online Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}