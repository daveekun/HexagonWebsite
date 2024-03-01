import {motion} from "framer-motion"

function Line(props)
{
    var isrev = + (props.rev === true ? -1 : 1)
    var rotation = Math.atan(window.innerHeight / window.innerWidth) * 180 / Math.PI;
    var moveStartX = (props.move - 50 * isrev) * Math.cos(Math.atan(window.innerHeight / window.innerWidth));
    var moveStartY = (props.move - 50 * isrev) * Math.sin(Math.atan(window.innerHeight / window.innerWidth));
    var moveEndX = (props.move + 200 * isrev) * Math.cos(Math.atan(window.innerHeight / window.innerWidth));
    var moveEndY = (props.move + 200 * isrev) * Math.sin(Math.atan(window.innerHeight / window.innerWidth));
    var offsetX = isrev * -Math.abs(props.index - 1) * 50 * Math.cos(Math.atan(window.innerHeight / window.innerWidth));
    var offsetY = isrev * -Math.abs(props.index - 1) * 50 * Math.sin(Math.atan(window.innerHeight / window.innerWidth));
    var translateStart = `translate(${0 + moveStartX + offsetX}px, ${(props.index - 1) * 100 + moveStartY + offsetY}px) rotate(${rotation}deg)`
    var translateEnd = `translate(${0 + moveEndX - offsetX}px, ${(props.index - 1) * 100 + moveEndY - offsetY}px) rotate(${rotation}deg)`

    return (
        <motion.div
            initial={{ 'transform': translateStart }}
            animate={{ 'transform': translateEnd }}
            transition={{duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
            className = { props.extraClass }/>
    );
}
export default Line;