import "./home.css"
import beach from "./assests/imgs/beach.svg"
import wallet from "./assests/imgs/wallet.svg"
import suitcase from "./assests/imgs/suitcase.svg"
import dest1 from "./assests/imgs/destination_1.jpg"
import dest2 from "./assests/imgs/destination_2.jpg"
import dest3 from "./assests/imgs/destination_3.jpg"
import dest4 from "./assests/imgs/destination_4.jpg"
import dest5 from "./assests/imgs/destination_5.jpg"
import dest6 from "./assests/imgs/destination_6.jpg"
import news1 from "./assests/imgs/news_1.jpg"
import news2 from "./assests/imgs/news_2.jpg"
import news3 from "./assests/imgs/news_3.jpg"

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>


    export function Home() {
    return (
    <div>
        <div class="bgimg1">
            <div >
                <h1 class="Let">Let us take you away</h1>
            </div>
            <div className="mainbuttons1">
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
        <div className="intromainimg">
            <div className="superintroi" ></div>
        </div>
        <div className="maintops">
            <div className="nulla">
                <img width={70} src={beach} />
                <div >
                    <div className="top">Top Destinations</div>
                    <p className="pres">Nulla pretium tincidunt felis, nec.</p>
                </div>
            </div>
            <div className="nulla">
                <img width={70} src={wallet} />
                <div >
                    <div className="top">The Best Prices</div>
                    <p className="pres">Sollicitudin mauris lobortis in.</p>
                </div>
            </div>
            <div className="nulla">
                <img width={70} src={suitcase} />
                <div >
                    <div className="top">
                        Amazing Services</div>
                    <p className="pres">Nulla pretium tincidunt felis, nec.</p>
                </div>
            </div>
        </div>
        <div className="simply">
            <p>SIMPLY AMAZING PLACES</p>
            <div className="Popular">Popular Destinations</div>
        </div>
        <div className="maindestinations">
            <div>
                <img width={370} src={dest1} />
                <p className="Bali">Bali</p>
                <p>Nulla pretium tincidunt felis, nec.</p>
                <div className="From">From $679</div>
            </div>
            <div>
                <img width={370} src={dest2} />
                <p className="Bali">Indonesia</p>
                <p>Nulla pretium tincidunt felis, nec.</p>
                <div className="From">From $679</div>
            </div>
            <div>
                <img width={370} src={dest3} />
                <p className="Bali">San Francisco</p>
                <p>Nulla pretium tincidunt felis, nec.</p>
                <div className="From">From $679</div>
            </div>
        </div>
        <div className="maindestinations">
            <div>
                <img width={370} src={dest4} />
                <p className="Bali">Paris</p>
                <p>Nulla pretium tincidunt felis, nec.</p>
                <div className="From">From $679</div>
            </div>
            <div>
                <img width={370} src={dest5} />
                <p className="Bali">Phi Phi Island</p>
                <p>Nulla pretium tincidunt felis, nec.</p>
                <div className="From">From $679</div>
            </div>
            <div>
                <img width={370} src={dest6} />
                <p className="Bali">Mykonos</p>
                <p>Nulla pretium tincidunt felis, nec.</p>
                <div className="From">From $679</div>
            </div>
        </div>
        <div className="bluebg">
            <p>SIMPLY AMAZING PLACES</p>
            <h1 className="Testimonials">Testimonials</h1>
            <p className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. lobortis dolor. Cras placerat lectus a posuere aliquet. Curabitur quis vehicula odio.</p>
            <p className="JOHN">JOHN TURNER,CLIENT</p>
        </div>
        <div className="mainwidbest">
            <div className="widbet">
                <div className="travels">
                    <img width={280} src={news1} />
                    <div>
                        <p className="june">02 JUNE</p>
                        <p className="tips">Best tips to travel light</p>
                        <p>LIFESTYLE & TRAVEL</p>
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
                    </div>
                </div>
                <div className="travels">
                    <img width={280} src={news2} />
                    <div>
                        <p className="june">01 JUNE</p>
                        <p className="tips">Best tips to travel light</p>
                        <p>LIFESTYLE & TRAVEL</p>
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
                    </div>
                </div>
                <div className="travels">
                    <img width={280} src={news3} />
                    <div>
                        <p className="june">29 MAY</p>
                        <p className="tips">Best tips to travel light</p>
                        <p>LIFESTYLE & TRAVEL</p>
                        <p>Pellentesque sit amet elementum ccumsan sit amet mattis eget, tristique at leo. Vivamus massa.Tempor massa et laoreet.</p>
                    </div>
                </div>
            </div>
            <div className="bgimgtraa">

                <div className="getdis">
                    <span className="getadis20">Get a 20% Discount</span>
                    <span className="byour">Buy Your Vacation Online Now</span>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>

    )

} 