const Data = (props) => {
    return (
        <div className="Moviecards">
            <p>{props.name}</p>
            <p>{props.year}</p>
            <p>{props.regie}</p>
            <p>{props.duration}</p>
            <p>{props.critics}</p>
            <p>{props.genre.map((elt) =>
                <p>{elt}</p>)}
            </p>
        </div>
    );
}

export default Data;