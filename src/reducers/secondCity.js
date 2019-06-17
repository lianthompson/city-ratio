export default function secondcityReducer (state = "New York, NY", action) {
    if (action.type === "SET_SECONDCITY") {
        return action.payload;
    } else {
        return state;
    }
}