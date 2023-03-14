export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/channels/search?api_key=zq61fVueFOPjRj5nE11IrAv3ZE5bbs8k&q=${category}`;
    
    const resp = await fetch(url);
    
    const { data } = await resp.json();
    const gifs = data.map( img =>({
        id: img.id,
        title: img.display_name ?? "",
        url: img.featured_gif?.images?.original?.url
    }) );
    return gifs;
}