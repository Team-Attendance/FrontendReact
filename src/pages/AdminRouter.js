import {Navigate} from "react-router-dom";

const AdminRouter = ({ authenticated, component: Component  }) => {

    const token = localStorage.getItem('ACCESS_TOKEN');
    return (
        token == null ? <Navigate to='/' {...alert("접근할 수 없는 페이지입니다.")}/> :
        authenticated ==='ROLE_ADMIN' ? Component : <Navigate to='/emp/main' {...alert("접근할 수 없는 페이지입니다.")} />

    )
};

export default AdminRouter