function LinkButton(props)
{
    return (
        <a className="linkbutton" href="#">
            {props.title}
        </a>
    )
}

export default LinkButton;