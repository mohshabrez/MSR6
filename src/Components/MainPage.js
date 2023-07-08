import { useState } from "react";
import { useCusine, useDispatch } from "../Context/cusineContext";
import { ACTIONS } from "../Reducer/cusineReducer";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";


export function MainPage() {
  const { dispatch } = useDispatch();
  const { resData, cusineData} = useCusine();
  const navigate = useNavigate()

  const handleClick = (cusine) => {
    dispatch({
      type: ACTIONS.RESTURANTDATA,
      payLoad: cusine.id
    });
  };

  const handleRes = (res) => {
    navigate("/ResturantPage", {state: res})
  }

  return (
    <>
      <h1>Food Ordering App</h1>
      <div>
        <h3>Select the cusines</h3>
          {cusineData.map((cusine) => {
            return(
              <>
              <button onClick={()=> handleClick(cusine)}>{cusine.name}</button>
              </>
            )
          })}
      </div>
      <div>
        {resData.map((res) => {
          return (
            <div className="resmenu">
              <h1>Dishes By {res.name}</h1>
              {res.menu.map((dishes) => {
                return (
                  <div className="dishesmenu">
                    <div onClick={() => handleRes(res)}>
                      <img src={dishes.imgSrc} alt="dishImg" />
                      <h3>{dishes.name}</h3>
                      <p>Rs. {dishes.price} for each</p>
                      <p>{res.name}</p>
                  </div>
                  </div>
                  
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
