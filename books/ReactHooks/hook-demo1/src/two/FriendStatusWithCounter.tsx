import { useEffect, useState } from "react";

/**
function FriendStatusWithCounter(props:any) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });
  
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
}

*/
// ...