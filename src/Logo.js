import logo from "./logo.png"
import logoDark from "./logo_white.png"

function Logo(props) {
    if (props.isdark)
        return (
            <img src={logo} alt="logo" className="biglogo" />
        );
    else
    return (
        <img src={logoDark} alt="logo" className="biglogo" />
    );
}
export default Logo;