const HOST = 'https://www.google.com';
const PATH = '/search';
const QUERY_KEY = 'q';
const EXCLUDER = '-site:amazon.com';
function goToSearch() {
  console.log('here')
  let query = document.getElementById('query-text').value;
  query = query.replace(' ', '+');
  let url = HOST + PATH + '?' + QUERY_KEY + '=' + query + '+' + EXCLUDER;
  console.log(url);
  window.location.href = url;
  return false;
}
