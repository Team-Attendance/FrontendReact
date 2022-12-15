import {Navigate, Route} from "react-router-dom";

const AdminRouter = ({ authenticated, component: Component  }) => {

    return (
        authenticated ==='ROLE_ADMIN' ? Component : <Navigate to='/emp/main' {...alert("접근할 수 없는 페이지입니다.")} />
    )
};

export default AdminRouter