import Line from './Line.js'

function Lines()
{
    return (
        <div className="lines" >
            <Line extraClass="line lineTop" index={0} move={80} rev={false} />
            <Line extraClass="line lineTop" index={1} move={0} rev={false} />
            <Line extraClass="line lineTop" index={2} move={-70} rev={false} />
            <Line extraClass="line lineBottom" index={0} move={70} rev={true} />
            <Line extraClass="line lineBottom" index={1} move={0} rev={true} />
            <Line extraClass="line lineBottom" index={2} move={-80} rev={true} />
        </div>
    );
}
export default Lines;