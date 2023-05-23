let img1 = document.getElementById('img1')
let images = document.getElementById('images')


function createGallery(nb) {
    for (let i = 0; i < nb ; i++) {
        let img = document.createElement('img')
        let a = document.createElement('a')
        img.setAttribute('src', 'https://picsum.photos/200/300?random='+i)
        img.setAttribute('alt', 'images'+ i)
        img.setAttribute('id', + i)
        img.setAttribute('data-lightbox', 'show-1')
        // pour modifier le style bootstrap directement là
        img.classList.add('m-3', 'rounded', 'border', 'border-light')

        a.setAttribute("href", 'https://picsum.photos/200/300?random='+i)
        a.setAttribute('data-lightbox', 'show-1')

        a.appendChild(img)
        images.appendChild(a)
    }
    
}


createGallery(8)



