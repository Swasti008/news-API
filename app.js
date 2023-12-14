// Progression 1: create a function and fetch the api using axios

function getData() {
    axios.get("https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=c5d9f19aaff5233730b232c6a38ee10a")
        .then(function (response) {
            let data = response.data.articles;
            console.log(data);
            stored(data);
        })
        .catch(function (error) {
            console.error("Sorry, we cannot fetch data due to an error", error);
        });
}

function stored(data) {
    data.forEach((eachData) => {
        let container = document.getElementById('news');
        let eachPersonDiv = document.createElement('div');
        eachPersonDiv.classList = 'eachNews';

        function createAndAppend(tag, text) {git 
            let tagName = document.createElement(tag);
            tagName.setAttribute('class', 'news');
            if (tag === 'img') {
                tagName.src = text;
            } else {
                tagName.innerText = text;
            }
            eachPersonDiv.appendChild(tagName);
        }

        createAndAppend('h3', eachData.title);
        createAndAppend('img', eachData.image);
        createAndAppend('p', eachData.content);
        createAndAppend('span', eachData.publishedAt);
        container.appendChild(eachPersonDiv);

    });
}

getData();
