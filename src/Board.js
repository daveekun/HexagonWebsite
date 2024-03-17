import PersonHexagon from "./Hexagons/PersonHexagon.js";
import SectionTitle from "./SectionTitle.js";
function BoardSection()
{
    return (
        <section className="BoardSection" id="OurBoard">
            <SectionTitle title="Our-Board" />
            <div className="container">
                <div className="hrow hexagonrow1">
                    <PersonHexagon />
                    <PersonHexagon />
                    <PersonHexagon />
                    <PersonHexagon />
                </div>
                <div className="hrow hexagonrow2">
                    <PersonHexagon />
                    <PersonHexagon />
                    <PersonHexagon />
                </div>
            </div>
        </section>
    )
}
export default BoardSection;