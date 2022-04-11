import React from 'react'

export default function RecentActivity({user, userAction}) {
    let activityText = ''
    if(userAction.action === "comment"){
        console.log("commmented on")
        activityText = " commented on"
    } else if(userAction.action === "like"){
        activityText = " liked"
    } else if(userAction.action === "reply"){
        activityText = " replied to"
    }

    return (
        <div className="activity text-white">
            <p>
                <img src={user.image} alt={user.userName} className="profile-icon"/>
                    <span className="user-name">{user.userName}</span> 
                    {activityText} <span className="comment-movie-title">{userAction.target}</span> <span className="user-activity">{activityText !== "like" && userAction.text}</span>
            </p>
            <div className="border-bottom-blood"></div>
        </div>
    )
}