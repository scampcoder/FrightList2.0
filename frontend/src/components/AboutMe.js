import React from 'react'


export default function AboutMe({user}) {
    return (
    <div className="col-4 col-lg-2 p-2 profile-blurb">
        <div className="profile-img text-center pb-2">
            <img className="img-fluid" src={user.image} alt={user.userName}/>
        </div>
        <div className="about-me">
            <h5 className="text-blood fw-bold">About Me</h5>
            <p className="text-blood">{user.profileData.about}</p>
        </div>
        <div className="fav-movie text-blood">
            <h6 className="d-inline fw-bold">Favorite Film: </h6>
            <p className="d-inline">{user.profileData.favFilm}</p>
        </div>
    </div>
    )
}