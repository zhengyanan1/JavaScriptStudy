import { useEffect, useState } from "react";

// /** 
function FriendStatus(props:any){
    const[isOnline, setIsOnline] = useState(null)

    function hanldleStatusChange(status:any){
        setIsOnline(status)
    }

    useEffect(() => {
        // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
        //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if(isOnline === null){
        return "Loading..."
    }
    return isOnline ? 'Online': 'Offline'
}
// */