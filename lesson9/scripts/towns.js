fetch()
.then(result => {
    return result.json();

})
.then( resultJSON =>{

    let towns = resultJSON.towns;

    towns.forEach(
        town => {

  if (town.name === 'Fish Haven') {
    document.querySelector('#fishHavenName').textContent = town.name;
    document.querySelector('#fishHavenMotto').textContent = town.motto;
    document.querySelector('#fishHavenYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
    document.querySelector('#fishHavenPopulation').textContent = `Population:  ${town.currentPopulation}`;
    document.querySelector('#fishAnnualRainfall').textcontent = `Annual Rainfall: ${town.averageRainfall}`;
    document.querySelector('#')
    
    document.querySelector('#fishHavenMotto').textContent = town.motto;
  
} else if (town.name === 'Preston') {

} else if (town.name === 'Soda Springs')

} else if 



}


        }
    );
})