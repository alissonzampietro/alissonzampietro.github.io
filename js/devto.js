window.onload = async function() {
    const result = await fetch('https://dev.to/api/articles?username=alissonzampietro&per_page=13');
    const response = await result.json();
    const parentElement = document.querySelector('.article-content');
    const element = document.querySelector('.article-item');
    console.log(response);
    response.forEach(article => {
        let newEl = element.cloneNode(true);
        newEl.querySelector('h4').innerHTML = article.title;
        newEl.querySelector('a').href = article.canonical_url;
        newEl.querySelector('p').innerHTML = article.description;
        newEl.querySelector('small').innerHTML = article.readable_publish_date;
        parentElement.appendChild(newEl);
    })
    element.remove()
}