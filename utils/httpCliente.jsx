const API ="https://www.thecocktaildb.com/api/json/v1/1";

export const get = (path) => {
    return fetch(API + path)
        .then((results) => results.json());}