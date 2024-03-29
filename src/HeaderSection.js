import Logo from "./Logo.js";
import Navigation from "./Navigation.js";
import Lines from "./Lines.js";

function HeaderSection()
{
    return (
        <section className="HeaderSection">
            <h1 className="welcome">Welcome to</h1>
            <Navigation />
            <div className="logoContainer">
                <Logo isdark={true} />
            </div>
            <Lines />
        </section>
    );
}

export default HeaderSection;