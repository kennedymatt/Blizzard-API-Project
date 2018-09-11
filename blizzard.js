const baseURL = 'https://us.api.battle.net/wow/mount/?locale=en_US';
const key = 'x76btvqkjkmkbt5w23y38ncbtsebh775'; 
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
searchForm.addEventListener('submit', fetchResults);
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const mountName = document.queryselector('mount');

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);


//RESULTS SECTION
const section = document.querySelector('section')

nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

const searchForm = document.querySelector('form');

function fetchResults(e) {
    e.preventDefault();

    url = baseURL + '&apikey' + key ;
    console.log(url);

    
    fetch(url)
        .then(function (result) {
            return result.json();
        }).then(function (json) {
            displayResults(json);
        });
}

// function displayResults(json) {
//     let mount = 

//     }
// };

// function nextPage(e) {
//     pageNumber++; //1
//     fetchResults(e); //2
//     console.log("Page number:", pageNumber); //3
// };​

// //     if(articles.length === 0) {
// //     console.log("No results");
// // } else { 
// for (let i = 0; i < mountName.length; i++) {
//     let article = document.createElement('article');
//     let heading = document.createElement('h2');
//     let link = document.createElement('a');
//     let para = document.createElement('p');
//     let clearfix = document.createElement('div');

//     let current = articles[i];
//     console.log("Current:", current);

//     link.href = current.web_url;
//     link.textContent = current.headline.main;
//     para.textContent = 'keywords: ';

//     for (let j = 0; j < current.keywords.length; j++) { // multi media built into api
//         //5
//         let span = document.createElement('span');
//         //6
//         span.textContent += current.keywords[j].value + ' ';
//         //7
//         para.appendChild(span);
//     }

//     if (current.multimedia.length > 0) {
//         //3
//         img.src = 'https://dev.battle.net/io-docs' + current.multimedia[0].url; // cancatination
//         //4
//         img.alt = current.headline.main;
//     }​​
//     //8
//     clearfix.setAttribute('class', 'clearfix');​


//     article.appendChild(heading);
//     heading.appendChild(link);
//     sections.appendChild(article);
//     article.appendChild(para);
//     article.appendChild(clearfix);

// }

// ;







// function nextPage() {
//     console.log("Next button clicked");
// }

// function previousPage() {
//     console.log("Next button clicked");
// }