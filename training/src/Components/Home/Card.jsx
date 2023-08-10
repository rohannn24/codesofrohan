import './Home.css'

const Card = (props) => {
    return (
        <>
            <div className="c-card">
                <img src={props.img} alt="netflix" />
                <h1>{props.head}</h1>
                <div className="btn">Watch Now</div>
            </div>
        </>
    );
}
export default Card;