import React from "react";
import Navbar from "../components/NavbarComponent";
import ProfileLists from "../components/ProfileListsComponent";
import users from '../dummyUserData'
import AboutMe from "../components/AboutMe";
import RecentActivity from "../components/RecentActivityComponent";
import Footer from '../components/FooterComponent'

export default function Profile() {

    const activities = users[0].userActivities.map(activity => <RecentActivity user={users[0]} userAction={activity}/>)

    return (
        <div>
            <Navbar />
            <section>
                <div className="container-fluid my-5">
                    <div className="row justify-content-center">
                        <AboutMe user={users[0]}/>
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
                            {activities}
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- End of recent activities -->*/}
            <Footer />
        </div>
        
    )
}