import {Navigate} from "react-router-dom";

const EmpRouter = ({ authenticated, component: Component  }) => {
    return (
        authenticated ==='ROLE_ADMIN' || authenticated ==='ROLE_EMP'? Component : <Navigate to={ window.location.replace('/')} {...alert("접근할 수 없는 페이지입니다.")} />
    )
};

export default EmpRouter