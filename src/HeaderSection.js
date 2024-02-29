import Logo from "./Logo.js";
import Navigation from "./Navigation.js";
import Lines from "./Lines.js";

function HeaderSection()
{
    return (
        <section className="HeaderSection">
            <h1 className="welcome">Welcome to</h1>
            <div className="logoContainer">
                <Logo isdark={true} />
            </div>
            <Navigation />
            <Lines />
        </section>
    );
}

export default HeaderSection;