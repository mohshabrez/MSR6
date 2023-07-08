import { useState } from "react";
import { cuisineData } from "../Data/cusineData";
import { restaurantsData } from "../Data/cusineData";


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
      console.log(action.payLoad.user)
      return{}
    }
    default: {
      throw new Error("Unknown action " + action.type);
    }
  }
};
