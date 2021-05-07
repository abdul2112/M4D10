import { Component } from 'react';
import {Container} from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container fluid style={{backgroundColor: '#121212'}}>
            
                <div className="container pb-4 mb-5">
                    <nav className="Page-navigation">
                        <ul className="pagination justify-content-center">
                            <li className="active page-item text-center">
                                <a className="page-link" href="/"
                                >TRENDING
                <div className="link-borderBottom"></div
                                    ></a>
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> PODCAST
                                </a >
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> MOODS AND GENRES
                                        </a>
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> NEW RELEASES
                                        </a >
                            </li>
                            <li className="page-item text-center">
                                <a className="page-link" href="/" >
                                    <div className="link-borderBottom">
                                    </div> DISCOVER
                                        </a >
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="container mb-5">
                    <h3 className="marginTop titleMobileHomepage text-white">#THROWBACKTHURSDAY</h3>
                    <div className="row mb-3 text-center">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Italian Karaoke.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Italian Karaoke</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Lyricists.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Lyricists</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Italy's frequent rotation.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Italy's Frequent Rotation</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/00s Italy.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">00s Italy</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Cocktail Hour.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Cocktail Hour</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/I Love My '90s Hip-Hop.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">I Love My '90s Hip-Hop</p>
                        </div>
                    </div>



                    <h3 className='text-white'>Classifiche</h3>
                    <div className="row p-0 text-center">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Top 50 - Italy.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Top 50 - Italy</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Top 50 - Global.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Top 50 - Global</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Viral 50 - Global.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Viral 50 - Global</p>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                            <img
                                src="assets/Viral 50 - Italy.jpg"
                                className="img-fluid mb-1 homePageImage"
                                alt=""
                            />
                            <p className="mt-2 font-weight-bold text-white">Viral 50 - Italy</p>
                        </div>
                    </div>
                </div>
            
            </Container>
        );
    }
}

export default Home;