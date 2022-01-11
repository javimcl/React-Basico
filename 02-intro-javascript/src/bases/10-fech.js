

const apiKey = 'yQDsU2RIFRTYsbt5aZ37IG4b2hQftQlN';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

/* peticion.then(resp => {
    resp.json().then(data => {
        console.log(data)
    })
}) */

/* .catch(console.warn); */


peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
       
        const img = document.createElement('img');
        img.src = url;
       document.body.append(img)
    })
    .catch(console.warn);