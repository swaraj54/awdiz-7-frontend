import { useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { username } = useParams();
//   useEffect(() => {
//     // use username and call api to fetch product details
//     if(username){
//         // call api
//     }
//   }, [username]);
  return (
    <div>
      <h1>UserDetails - {username}</h1>
    </div>
  );
}

export default UserDetails;
