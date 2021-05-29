const baseURL = 'https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging'
const appID = "";
const appKey = "";

export const edamamApiConfig = {
    baseURL: 'https://api.edamam.com/api/food-database/v2/parser?nutrition-type=logging',
    appID: "",
    appKey: "",
    getUrl : (query) => {
        query = encodeURI(query);
        return `${baseURL}&ingr=${query}&app_id=${appID}&app_key=${appKey}`
    }
}
export const foodDataCentralConfig = {
    foodDataCentralApiKey: "",
    foodDataCentralSearchURL: "https://api.nal.usda.gov/fdc/v1/foods/search",
    foodDataCentralFoodURL: "https://api.nal.usda.gov/fdc/v1/food"
}
