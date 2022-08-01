console.log("This is my index js file");

// Initialize the news api parameters
let country = 'in';
let apiKey = 'c3f3532ac2594135a19a1a161a04633a'

// Grab the news container
let newsAccordion = document.getElementById('news_container');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element, index) {
      // console.log(element, index)
      let news = `<div class="card " style="width: 18rem;">
              <img src="${element['urlToImage']}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Breaking News ${index+1}: ${element["title"]}</h5>
                <p class="card-text">${element["content"]}</p>
                <a href="${element["url"]}" class="btn btn-primary">Read More</a>
              </div>
            </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.log("Some error occured")
  }
}

xhr.send()








//code with harry




/*console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'd093053d72bc40248998159804e0e67d'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element, index) {
      // console.log(element, index)
      let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.log("Some error occured")
  }
}

xhr.send()
*/
