let news = [
{ id: 1, title: 'Election Results',
content: "Republican Clay Fuller and Democrat Shawn Harris advanced from a crowded field to a runoff in the special election to replace former Rep. Marjorie Taylor Greene in Georgia, NBC News projects." },
{ id: 2, title: 'Sporting Success',
content: "Shai Gilgeous-Alexander ties Wilt Chamberlain's consecutive 20+ point games record." },
{ id: 3, title: 'Severe Weather Warning',
content: "Thunderstorms, gusty winds possible as Wednesday declared a Severe Weather Day" }
];


const getNewsList = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(news);
        }, 5000);
    })
}

getNewsList().then((newsList) => console.log(newsList));