
const sec = document.getElementById('root');

const getImg = async () => {
    const responese = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-01-17&sortBy=publishedAt&apiKey=73097c8a48744d23aeaa4fe299f029bc")
    .then(async (res) => {
        const art = await res.json();
        console.log(art.articles)
        art.articles.map((e) => {
            let card = `
            <div class="card" style="width: 18rem;">
            <img src="${e.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <a href="${e.url}" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            `
            sec.insertAdjacentHTML('afterbegin', card);
        })
    }).catch((err) => {
        console.error('Error ocurred...');
    })
}
getImg();