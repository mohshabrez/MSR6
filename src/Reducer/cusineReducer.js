import { useState } from "react";
import { cuisineData } from "../Data/cusineData";
import { restaurantsData } from "../Data/cusineData";
import { act } from "react-dom/test-utils";


export const initialState = {
  cusineData: cuisineData,
  restaurantsData: restaurantsData,
  resData:[]
};

export const ACTIONS = {
  RESTURANTDATA: "RESTURANTDATA",
  REVIEWDATA:"reviewData"
};

export const cusineReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.RESTURANTDATA: {
      const newData = state.restaurantsData.filter(
        (res) => Number(res.cuisine_id) === Number(action.payLoad)
      );
      return { ...state, resData: [...newData] };
    }
    case ACTIONS.REVIEWDATA:{
      const rate = action.payLoad.rating
      const comment = action.payLoad.comment
      const newData = state.restaurantsData.map((res) => Number(res.id) === Number(action.payLoad.user.id) ? {...res, ...res.ratings.push({rating: rate, comment:comment})}: res)
      console.log(newData)
      return{...state, resData:[...newData]}
    }
    default: {
      throw new Error("Unknown action " + action.type);
    }
  }
};
