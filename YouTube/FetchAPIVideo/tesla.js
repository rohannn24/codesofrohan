async function showTeslaNews () {
    await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-01-24&sortBy=publishedAt&apiKey=73097c8a48744d23aeaa4fe299f029bc")
    .then(async (res) => {
        const data = await res.json();
        console.log(data.articles[0]);
        data.articles.map((e) => {
            const cardStruct = `
            <div class="card">
            <div class="img-ctrl">
                <img src="${e.urlToImage}" alt="img">
            </div>
            <div class="content">
                <h4>${e.title}</h4>
                <a href="${e.url}"><div class="btn">Read More</div></a>
            </div>
        </div>
            `;
            if(e.urlToImage !== null){
                document.querySelector('.tesla-body')
                .insertAdjacentHTML('afterbegin', cardStruct);
            }
        })
    })
    .catch((err) => {
        console.log(err);
    });
}
showTeslaNews();