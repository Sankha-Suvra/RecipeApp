
export async function fetchRecipes(filter){
    const {query,limit} = filter
    const apiId = import.meta.env.VITE_API_ID
    const apiKey = import.meta.env.VITE_API_KEY

    const url = `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${limit}&`;

    const response = await fetch(url)
    const data = await response.json()

    return data?.hits
}

export async function fetchRecipe(id){
    const apiId = import.meta.env.VITE_API_ID
    const apiKey = import.meta.env.VITE_API_KEY

    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${apiId}&app_key=${apiKey}`
    const response = await fetch(url)
    const data = await response.json();

    return data[0];

}