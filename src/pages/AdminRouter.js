import {Navigate} from "react-router-dom";
import Swal from "sweetalert2";

const AdminRouter = ({authenticated, component: Component}) => {

    const token = localStorage.getItem('ACCESS_TOKEN');
    return (
        token == null ? <Navigate to='/' {...Swal.fire({
                title: '접근할 수 없는 페이지입니다.',
                confirmButtonText: '닫기',
                confirmButtonColor: '#3085d6',
                icon: 'error'
            })}/> :
            authenticated === 'ROLE_ADMIN' ? Component : <Navigate to='/emp/main' {...Swal.fire({
                title: '접근할 수 없는 페이지입니다.',
                confirmButtonText: '닫기',
                confirmButtonColor: '#3085d6',
                icon: 'error'
            })} />

    )
};

export default AdminRouter