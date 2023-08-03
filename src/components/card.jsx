import reviews from "../data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";


const Card = () => {

    const [numberData, setNumberData] = useState(0)

        

    //const displayCard = reviews.filter((person) =>  person.id == numberData);
    
    const displayCard = reviews[numberData];


    if(numberData < 0){
        return setNumberData(reviews.length - 1)
    } else if(numberData > reviews.length - 1){
        return setNumberData(0)
    };

    const randomPerson = () => {
        let randomReview = Math.floor(Math.random() * reviews.length);
        if(randomReview == numberData){
            randomReview = numberData + 1;
        }
        setNumberData(randomReview)
    }
    /*const randomPerson = () => {
        let random = Math.floor(Math.random * reviews.length());
        return setNumberData(random)
    };*/

    const {id,name,image,job,text} = displayCard
    
    return(
        <article key={id} className="review" >
            <div className="img-container" >
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author" >{name}</h4>
            <p className="job" >{job.toUpperCase()}</p>
            <p className="info" >{text}</p>
            <div className="btn-container" >
                <button className="prev-btn" onClick={() => setNumberData(numberData - 1)} >
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={() => setNumberData(numberData + 1)} >
                    <FaChevronRight />
                </button>
            </div>
                <button className="btn btn-hipster" onClick={randomPerson} >Sorprendeme</button>
        </article>
    )
}

export default Card

