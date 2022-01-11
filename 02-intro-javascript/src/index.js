

const getImagenPromesa = async () => {

    const apiKey = 'yQDsU2RIFRTYsbt5aZ37IG4b2hQftQlN';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const data = await resp.json();

    console.log(data);

}

//console.log(getImagenPromesa());

getImagenPromesa().then(console.log)








/* peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
       
        const img = document.createElement('img');
        img.src = url;
       document.body.append(img)
    })
    .catch(console.warn); */