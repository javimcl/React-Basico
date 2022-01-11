

const getImagenPromesa = async () => {

    try {
        const apiKey = 'yQDsU2RIFRTYsbt5aZ37IG4b2hQftQlN';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        console.log(data);
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        console.error(error);
    }



}

//console.log(getImagenPromesa());

getImagenPromesa();

