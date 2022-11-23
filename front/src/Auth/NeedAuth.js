import react from react;

export default function needAuth(props) {
    let location = useLocation();
    const storedUser = useSelector(store => store.SigninReducer);

    if (storedUser) {
        return props.chiltren;
    } else {
        return <Navigate to='/login' state={{ from: location }} />
    }
}