import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "../Context/cusineContext";
import { ACTIONS } from "../Reducer/cusineReducer";

export function ResturantPage(){
    const { dispatch } = useDispatch();
    const[reviewPopUp, setReviewPopUp] = useState(false)
    const[rating, setRating] = useState('')
    const[comment, setComment] = useState('')
    const location = useLocation()
    const user = location.state

    const handleReview = () => {
        setReviewPopUp(!reviewPopUp)
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleSubmit = () => {
        dispatch({
            type: ACTIONS.REVIEWDATA,
            payLoad: {rating:rating, comment:comment, user:user}
        })
    }


  
    return(
        <>
        <div>
        <Link to="/"><span class="material-symbols-outlined">arrow_back</span></Link>
            <div className="resturantPage">
                <h1>{user.name}</h1>
                <p>{user.description}</p>
                <p>{user.address}</p>
                <p>{user.phone}</p>
                <button onClick={handleReview}>Add Review</button>
                {reviewPopUp && (
                    <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "30%",
                      height: "40%",
                      backgroundColor: "orange",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop:"10rem",
                      marginLeft:"5rem"
                    }}
                  >
                    <div>
                        <span class="material-symbols-outlined">cancel</span>
                        <h3>Add a review</h3>
                        <label> Ratings:
                            <select onChange={(e) => handleRating(e)}>
                                <option value="4.5">4.5+</option>
                                <option value="4.0">4.0+</option>
                                <option value="3.5">3.5+</option>
                                <option value="3.0">3.0+</option>
                                <option value="2">2+</option>
                            </select>
                        </label>
                        <label>comment:
                            <textarea onChange={(e) => setComment(e.target.value)} />
                        </label>
                        <button onClick={() => handleSubmit()}>Submit</button>
                    </div>
                    
                    </div>
                )}
                <div>
                    <h1>Reviews</h1>
                    {user.ratings.map((rate) => {
                        return(
                            <ul>
                                <img src={rate.pp} />
                                <p>{rate.revName}</p>
                                <p>{rate.comment}</p>
                                <p>{rate.rating}</p>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}