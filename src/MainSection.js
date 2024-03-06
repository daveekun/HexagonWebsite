import SectionTitle from "./SectionTitle.js";
import LinkButton from "./LinkButton.js";
function MainSection()
{
    return (
        <section className="MainSection" id="WhatisHexagon">
            <SectionTitle title="WhatisHexagon" />
            <div className="container">
                <div className="center half">
                    <p className="text-center">
                        We are <b>HEXAGON</b>, the student association of <a>HIVE Helsinki</a>.
                        Hexagon is an association of the student for the student by the students.</p>
                    <p className="text-center">
                        We work closely with companies to organise <b>events</b> and <b>excurions</b> to connect <a>great coders</a> with <a>great companies</a> to provide a better experience for both sides.
                    </p>
                </div>
                <div className="buttons">
                        <LinkButton title="Partners" />
                        <LinkButton title="Lets Collab!" />
                </div>
            </div>
        </section>
    )
}
export default MainSection;