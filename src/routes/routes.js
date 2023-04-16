import { useRoutes } from 'react-router-dom';
import Counter from '../pages/Counter';
import Event from '../pages/Event';
import NotificationCounter from '../pages/NotificationCounter';
import Form from '../pages/Form';
import Quiz from '../pages/Quiz';
import Select from '../pages/Select';
import MethodAsProps from '../pages/MethodAsProps';
import Table from '../pages/Table';
import Cart from '../pages/Cart';
import CartFunction from '../pages/CartFunction';
import TodoList from '../pages/TodoList';
import TodoListFunction from '../pages/TodoListFunction';
import Note from '../pages/Note';
import CallBack from '../pages/CallBack';
import Lifecycle from '../pages/Lifecycle';
import Params from '../pages/Params';
import ParamsItem from '../pages/ParamsItem';
import NotFound from '../pages/NotFound';
import Outlet from '../pages/Outlet';
import Layout from '../pages/Layout';
import PermissionRoot from '../pages/PermissionRoot';
import LayoutRoot from '../pages/LayoutRoot';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import NoPermission from '../components/PermissionRoot/NoPermission';
import Admin from '../components/PermissionRoot/Admin/Admin';
import Report from '../components/PermissionRoot/Report/Report';


export default function Router() {
    let element = useRoutes([
        { path: "/", element: <Layout />},
        {
            path: "/", element: <LayoutRoot />, children: [
                { path: "counter", element: <Counter />},
                { path: "event", element: <Event />},
                { path: "notification-counter", element: <NotificationCounter />},
                { path: "form", element: <Form />},
                { path: "quiz", element: <Quiz />},
                { path: "select", element: <Select />},
                { path: "method-as-props", element: <MethodAsProps />},
                { path: "table", element: <Table />},
                { path: "cart", element: <Cart />},
                { path: "cart-function", element: <CartFunction />},
                { path: "todolist", element: <TodoList />},
                { path: "todolist-function", element: <TodoListFunction />},
                { path: "note", element: <Note />},
                { path: "callback", element: <CallBack />},
                { path: "lifecycle", element: <Lifecycle />},
                { path: "params", element: <Params />},
                { path: "params/:id", element: <ParamsItem />},
                { path: "*", element: <NotFound />},
                { path: "outlet", element: <Outlet />, children: [
                        { path: "outlet-root1", element: <div>content "root 1"</div>},
                        { path: "outlet-root2", element: <div>content "root 2"</div>},
                    ]
                },
                { path: "permission-root", element: <PermissionRoot />},
                { path: "no-permission", element: <NoPermission />},
                { path: "/*", element: <PrivateRoute/>, children: [
                        { path: "admin", element: <Admin />},
                        { path: "report", element: <Report />},
                    ]
                },
            ]
        },
    ]);
    return element;
}
