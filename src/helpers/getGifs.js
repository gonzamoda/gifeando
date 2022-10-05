export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=P6itn8sSE8l0YO3twzU2dPVUOcuC28Sq&q=${category}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
