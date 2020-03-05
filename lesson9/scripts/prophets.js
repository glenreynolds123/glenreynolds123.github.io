fetch('https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json')
    .then(
        result => {
            return result.json();
        })
    
      .then( prophets => {
       let prophetList = prophetList.prophets;

      prophetList.forEach(
          prophet => {
           document.createElement('article');

           document.createElement('h1');
           h1.textContent = `${prophet.name} ${prophet.lastname}`;

           let dateOfBirth = document.createElement('h2');
           dateOfBirth.textContent = `Date of Birth`

           let dateOfBirth = document.createElement('span');
           dateOfBirth.textContent = `Place of Birth:  ${}`


           let placeOfBirth = document.createElement('p');
           placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
           
           let image = document.createdElement('img');
           image.setAttribute('src', prophet.imageurl);
           image.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);


           article.appendChild(h1);
           article.appendChild(dateOfBirth);
           article.appendchild(placeOfBirth);
           article.appendChild(image);


           document.querySelector('#prophets').appendChild(article);


          }
      );

    });