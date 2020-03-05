fetch('https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json')
    .then(
        result => {
            return result.json();
        })
    
      .then( prophetList => {
       let prophets = prophetList.prophets;

      prophetList.forEach(
          prophet => {
           document.createElement('article');

           document.createElement('h1');
           h1.textContent = `${prophet.name} ${prophet.lastname}`;

           let dateOfBirth = document.createElement('p');
           dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;

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