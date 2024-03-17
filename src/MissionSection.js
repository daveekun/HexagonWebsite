import Card from "./Card/Card.js";
import SectionTitle from "./SectionTitle.js";
function MissionSection()
{
    return (
        <section className="MissionSection" id="TheHexagonMission">
            <SectionTitle title="The-Hexagon-Mission" />
            <div className="cardcontainer">
                <Card
                    title="Putting The Community First"
                    content="We take great pride in working for the community with the community. 
                    All members are encouraged to contribute to projects, join event and make sure 
                    we all have a good time!" />
                <Card
                    title="Support The Learning Journey of Hivers"
                    content="Our primary objective is to support all the Hive students, we connect them 
                    with companies, encourage peer-to-peer learning and give a platform for those who want to 
                    help others."
                />
                <Card
                    title="Being a Transparent and Accessible"
                    content="We want to make coding and the community around it as accessible as we can, all the 
                    students are welcome to join and contribute. Since the community is such an integral part of 
                    the organisation we try to be as transparent as possible.
                "/>
            </div>
                
        </section>
    )
}
export default MissionSection;