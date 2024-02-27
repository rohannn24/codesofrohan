async function showImages () { 
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await res.json();
    console.log(data[0]);
    data.map((e) => {
        const imgSturct = `
        <a href="${e.url}">
        <img src="${e.download_url}" alt="image">
    </a>
        `
        document.querySelector('.photos-body')
        .insertAdjacentHTML('afterbegin', imgSturct);
    })

}
showImages();