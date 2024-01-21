function PersonCard(props) {
    const { name, age, haircolor } = props;

    return (
        <div className="PersonCard">
            <h2> {name}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {haircolor}</p>
        </div>
    );
}

export default PersonCard;
