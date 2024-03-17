import PersonHexagon from "./Hexagons/PersonHexagon.js";
import SectionTitle from "./SectionTitle.js";
import person0 from './people/person0.png'
import person1 from './people/person1.png'
import person2 from './people/person2.png'
import person3 from './people/person3.png'
import person4 from './people/person4.png'
function BoardSection()
{
    return (
        <section className="BoardSection" id="OurBoard">
            <SectionTitle title="Our-Board" />
            <div className="container">
                <div className="hrow hexagonrow1">
                    <PersonHexagon title="External Affairs Manager" src={ person1 } />
                    <PersonHexagon title="President" src={ person0 } />
                    <PersonHexagon title="Vice President" src={ person2 } />
                    <PersonHexagon title="Internal Affairs Manager" src={ person3 } />
                </div>
                <div className="hrow hexagonrow2">
                    <PersonHexagon title="Event Manager" src={ person4 } />
                    <PersonHexagon />
                    <PersonHexagon />
                </div>
            </div>
        </section>
    )
}
export default BoardSection;