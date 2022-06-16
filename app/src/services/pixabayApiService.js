const apiBaseUrl = "https://pixabay.com/api/"
const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;

exports.searchImagesByQuery = async (queryString) => {
    queryString = queryString.replace(' ', "+");
    
    // Query Url : https://pixabay.com/api/?key=APIKEY&q=QUERY&image_type=photo&pretty=true
    let queryUrl = `${apiBaseUrl}?key=${apiKey}&q=${queryString}&image_type=photo&pretty=true`;

    try {
        return await (await fetch(queryUrl)).json();
    } catch (error) {
        return false;        
    }

}