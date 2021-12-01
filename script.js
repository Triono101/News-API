// axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=f6527bfa24054bd08123fcd4fc298f5b')
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

const news = document.getElementById("news");
fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=f6527bfa24054bd08123fcd4fc298f5b")
    .then((news.innerHTML = news))
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(displayNews);

    function displayNews(result) {
      var newsData = "";
      if (result.articles === "") {
        news.innerHTML = "";
      } else {
        result.articles?.forEach((data) => {
        newsData += `<article>
                      <img src="${data.urlToImage}" alt="">
                      <h5>${data.title}</h5>
                      <p class="author">${data.author} - ${data.publishedAt}</p>
                      <p class="description">${data.description} <a href="${data.url}" target="_blank"> <br> <button>Baca selengkapnya ...</button></a></p>
                    </article>`;
      });
        news.innerHTML = newsData;
      }
    }
