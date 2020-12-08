
const wikiEndpoint = 'https://www.wikidata.org/w/api.php';
const params = 'action=query&list=allrevisions&arvdir=newer&arvlimit=50&arvstart=2020-10-01T00:00:00Z&arvend=2020-11-01T00:00:00Z&&format=json';

const apiUrl = `${wikiEndpoint}?${params}&origin=*`;

fetch( apiUrl)
    .then(function (response) { 
        return response.json(); })
    .then(function (data) {
        console.log(data)
    });