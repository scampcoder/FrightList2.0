import React from "react";
import Navbar from "../components/NavbarComponent";
import ProfileLists from "../components/ProfileListsComponent";

export default function Profile() {
    return (
        <div>
            <Navbar />
            <section>
                <div className="container-fluid my-5">
                    <div className="row justify-content-center">
                        {/*<!-- Profile Blurb -->*/}
                        <div className="col-4 col-lg-2 p-2 profile-blurb">
                            <div className="profile-img text-center pb-2">
                                <img className="img-fluid" src="img/profile.png" alt=""/>
                            </div>
                            <div className="about-me">
                                <h5 className="text-blood fw-bold">About Me</h5>
                                <p className="text-blood">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet commodi omnis consectetur ut, nihil quas.</p>
                            </div>
                            <div className="fav-movie text-blood">
                                <h6 className="d-inline fw-bold">Favorite Film: </h6>
                                <p className="d-inline">Sleepaway Camp</p>
                            </div>
                        </div>
                        {/*<!-- End of profile blurb -->*/}
                        <ProfileLists />
                    </div>
                </div>
            </section>

            {/*<!-- Recent Activities-->*/}
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 activities">
                            <h3 className="text-center text-blood fw-bold mb-3">Recent Activity</h3>
                            <div className="activity text-white">
                                <p><img src="img/profile.png" alt="" className="profile-icon"/><span className="user-name">Jason</span> commented on <span className="comment-movie-title">Freddy vs. Jason</span>: <span className="user-activity">"Awesome ending."</span></p>
                                <div className="border-bottom-blood"></div>
                            </div>
                            <div className="activity text-white">
                                <p><img src="img/profile.png" alt="" className="profile-icon"/><span className="user-name">Jason</span> commented on <span className="comment-movie-title">The Creature from the Black Lagoon</span>: <span className="user-activity">"Best hiding place? Underwater."</span></p>
                                <div className="border-bottom-blood"></div>
                            </div>
                            <div className="activity text-white">
                                <p><img src="img/profile.png" alt="" className="profile-icon"/><span className="user-name">Jason</span> commented on <span className="comment-movie-title">Halloween</span>: <span className="user-activity">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate labore sed voluptatibus aut officia veritatis tempore architecto ipsam fugiat!"</span></p>
                                <div className="border-bottom-blood"></div>
                            </div>
                            <div className="activity text-white">
                                <p><img src="img/profile.png" alt="" className="profile-icon"/><span className="user-name">Jason</span> commented on <span className="comment-movie-title">House of 1000 Corpses</span>: <span className="user-activity">"What did I just watch?"</span></p>
                                <div className="border-bottom-blood"></div>
                            </div>
                            <div className="activity text-white">
                                <p><img src="img/profile.png" alt="" className="profile-icon"/><span className="user-name">Jason</span> commented on <span className="comment-movie-title">Suspiria</span>: <span className="user-activity">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum quod sapiente blanditiis voluptates sed facilis repellendus excepturi labore incidunt architecto, voluptatum ad! Placeat recusandae officia cum culpa corrupti maiores."</span></p>
                                <div className="border-bottom-blood"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- End of recent activities -->*/}
        </div>
        
    )
}