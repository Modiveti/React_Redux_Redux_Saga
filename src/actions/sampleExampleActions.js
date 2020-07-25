export const incrementValue = data => {
    return {
        type: "INCREMENT",
        payload: data
    }
}

export const decrementValue = data => ({
    type: "DECREMENT",
    payload: data
});

export const incDecValue = objInfo => {
    console.log(objInfo);
    return objInfo;
}