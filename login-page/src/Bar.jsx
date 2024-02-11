import { useRecoilValue } from "recoil"
import { userState } from "../store/user"
import Login from "./Login";
import Home from "./Home"
function Bar(){
    const user = useRecoilValue(userState);
    return (
        <div> {!user.loggedIn ?  <Login ></Login>: <Home></Home> }</div>
    )
}
export default Bar;