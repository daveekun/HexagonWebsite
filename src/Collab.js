import SectionTitle from "./SectionTitle.js";
import insta from "./insta.png"
import linkedin from "./linkedin.png"

function CollabSection()
{
    return (
        <section className="CollabSection" id="LetsCollab">
            <SectionTitle title="Lets-Collab!" />
            <div className="container">
                <p className="center half text-center" >
                        For questions, collaborations and partnerships reach out to us via email at hexagon@emailidontremember.com<br />
                        For future events and announcments connect with us on Linkedin or follow us on Instagram<br />
                </p>
                <div className="socials">
                    <a className="social" href="https://www.instagram.com/hive_hexagon/">
                        <img className="imglink" src={ insta } />
                    </a>
                    <a className="social" href="#">
                        <img className="imglink" src={ linkedin } />
                    </a>
                </div>
            </div>
        </section>
    )
}
export default CollabSection;