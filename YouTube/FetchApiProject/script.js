(async () => {
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=73097c8a48744d23aeaa4fe299f029bc')
        .then(async (data) => {
            const jData = await data.json();
            const mr = `
        <div class="mr-news">
        <div class="img-ctrl">
            <img src="${jData.articles[0].urlToImage}" alt="">
        </div>
        <div class="mr-heading">
            <h3>${jData.articles[0].title}</h3>
            <p>${jData.articles[0].description}</p>
        </div>
    </div>
        `;
            document.querySelector('.fs-left').insertAdjacentHTML('afterbegin', mr);

        })
})();
(async () => {
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=73097c8a48744d23aeaa4fe299f029bc')
        .then(async (data) => {
            const jData = await data.json();
            const twoData = jData.articles.slice(10, 12);
            twoData.map((el) => {
                const rf = `
            <div class="rf-box">
                <div class="img-ctrl">
                    <img src="${el.urlToImage}" alt="">
                </div>
                <div class="mr-heading">
                    <h3>${el.title}</h3>
                </div>
            </div>
            `;
                document.querySelector('.rf-contain').insertAdjacentHTML('afterbegin', rf);
            })
        })
})();
(async () => {
    await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-01-22&sortBy=publishedAt&apiKey=73097c8a48744d23aeaa4fe299f029bc')
        .then(async (data) => {
            const jData = await data.json();
            const twoData = jData.articles.slice(12, 14);
            twoData.map((el) => {
                const rf = `
            <div class="rf-box">
                <div class="img-ctrl">
                    <img src="${el.urlToImage}" alt="">
                </div>
                <div class="mr-heading">
                    <h3>${el.title}</h3>
                </div>
            </div>
            `;
                document.querySelector('.rf-contain-2').insertAdjacentHTML('afterbegin', rf);
            })
        })
})();
(async () => {
    await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=73097c8a48744d23aeaa4fe299f029bc')
        .then(async (data) => {
            const jData = await data.json();
            const mr = `  
            <div class="cs-img-ctrl">
                <img src="${jData.articles[0].urlToImage}" alt="">
            </div>
            <div class="cs-main-content">
                <h3>${jData.articles[0].title}</h3>
                <div class="btn"><a href="${jData.articles[0].url}" target= '_newTab'>Read More</a></div>
            </div>
        `;
            document.getElementById('Sports').insertAdjacentHTML('afterbegin', mr);
        })
})();
(async () => {
    await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-01-22&sortBy=publishedAt&apiKey=73097c8a48744d23aeaa4fe299f029bc')
        .then(async (data) => {
            const jData = await data.json();
            const mr = `  
            <div class="cs-img-ctrl">
                <img src="${jData.articles[0].urlToImage}" alt="">
            </div>
            <div class="cs-main-content">
                <h3>${jData.articles[0].title}</h3>
                <div class="btn"><a href="${jData.articles[0].url}">Read More</a></div>
            </div>

        `;
            document.getElementById('tesla').insertAdjacentHTML('afterbegin', mr);
        })
})();
(async () => {
    await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-01-22&sortBy=publishedAt&apiKey=73097c8a48744d23aeaa4fe299f029bc')
        .then(async (data) => {
            const jData = await data.json();
            const twoData = jData.articles.slice(5, 9);
            twoData.map((el) => {
                const rf = `
                <div class="csr-card">
                <div class="csr-img-ctrl">
                    <img src="${el.urlToImage}"
                        alt="">
                </div>
                <div class="csr-content">
                    <h3>${el.title}
                    </h3>
                    <div class="btn csr-btn"><a href="${el.url}" target='_newTab'>Read More</a></div>
                </div>
            </div>
            `;
                document.querySelector('#Sports-recent').insertAdjacentHTML('afterbegin', rf);
            })
        })
})();
(async () => {
    await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-01-22&sortBy=publishedAt&apiKey=73097c8a48744d23aeaa4fe299f029bc')
        .then(async (data) => {
            const jData = await data.json();
            const twoData = jData.articles.slice(5, 9);
            twoData.map((el) => {
                const rf = `
                <div class="csr-card">
                <div class="csr-img-ctrl">
                    <img src="${el.urlToImage}"
                        alt="">
                </div>
                <div class="csr-content">
                    <h3>${el.title}
                    </h3>
                    <div class="btn csr-btn"><a href="${el.url}" target='_newTab'>Read More</a></div>
                </div>
            </div>
            `;
                document.querySelector('#tesla-recent').insertAdjacentHTML('afterbegin', rf);
            })
        })
})();