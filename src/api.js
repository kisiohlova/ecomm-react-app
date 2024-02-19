// src/api.js
export const getRandomImageUrl = async () => {
  const WIDTH = 400; // Width of the image
  const HEIGHT = 300; // Height of the image
  const RANDOM_IMAGE_URL = `https://picsum.photos/${WIDTH}/${HEIGHT}`;

  try {
    const response = await fetch(RANDOM_IMAGE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const imageUrl = response.url;
    return imageUrl;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
};
