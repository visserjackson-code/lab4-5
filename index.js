let startingNews = [
{ id: 1, title: 'Election Results',
content: "Republican Clay Fuller and Democrat Shawn Harris advanced from a crowded field to a runoff in the special election to replace former Rep. Marjorie Taylor Greene in Georgia, NBC News projects." },
{ id: 2, title: 'Sporting Success',
content: "Shai Gilgeous-Alexander ties Wilt Chamberlain's consecutive 20+ point games record." },
{ id: 3, title: 'Severe Weather Warning',
content: "Thunderstorms, gusty winds possible as Wednesday declared a Severe Weather Day" }
];


function renderNewsItem(newsItem) {
    const template = document.getElementById('news-item-template').content.cloneNode(true);
    template.querySelector(".card-title").innerText = newsItem.title;
    template.querySelector(".card-text").innerText = newsItem.content;
    document.querySelector("#news-list").appendChild(template);


}

const getNewsList = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(startingNews);
        }, 5000);
    })
}

getNewsList().then((newsList) => newsList.forEach(n => renderNewsItem(n)));

const handleSubmit = () => {
    const userTitle = document.getElementById("user-headline-input").value;
    const userContent = document.getElementById("user-content-textarea").value;
    const newNewsItem = {
        id: startingNews.length + 1,
        title: userTitle,
        content: userContent
    }
    // startingNews.push(newNewsItem);
    renderNewsItem(newNewsItem);
}