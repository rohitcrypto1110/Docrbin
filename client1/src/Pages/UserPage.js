import { useLocation } from 'react-router-dom';
import UserPageUtil from './UserPageUtil.js';

const UserPage=()=>{
	const location = useLocation();
	return(
	  <div>
	    <UserPageUtil id={location.pathname.substring(1)}/>
	  </div>
	);
}

export default UserPage;