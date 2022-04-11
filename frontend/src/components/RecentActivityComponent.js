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
        <div>
            <div className="activity-container text-white">
            <div>
                <img src={user.image} alt={user.userName} className="user-icon"/>
            </div>
            <div className='activity'>
                    <span className="user-name">{user.userName}</span> 
                    {activityText} 
                    <span className="font-italic"> {userAction.target} </span> 
                    <span className="activity-text">{userAction.action !== "like" && `"${userAction.text}"`}</span>
            </div>
        </div>
        <div className="border-bottom-blood"></div>
        </div>
    )
}