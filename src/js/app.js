
const wikiUrl = 'https://www.wikidata.org';

const apiUrl = `${wikiUrl}/w/api.php?action=query&list=allrevisions&arvdir=newer&arvlimit=50&arvstart=2020-10-01T00:00:00Z&arvend=2020-11-01T00:00:00Z`;

fetch( apiUrl )
  .then(response => response.json())
  .then(data => console.log(data));