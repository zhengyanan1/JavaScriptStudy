import { useEffect, useState } from "react";

// /** 
function useFriendStatus(friendID: string){
    const[isOnline, setIsOnline] = useState(null)

    function hanldleStatusChange(status:any){
        setIsOnline(status.isOnline)
    }

    useEffect(() => {
        // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
        //   ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline
}
// */