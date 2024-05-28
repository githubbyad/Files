/* get AppServer */
let sites = ["bulletlink.one", "bulletlink.net"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
async function checkStatus(domain) {
  try {
    const response = await fetch(domain + 'app_server.php', {
      method: 'HEAD',
      headers: {
        'Access-Control-Request-Headers': 'content-type', // Add any additional headers if needed
      }
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}
async function findAvailableServer(sites) {
  for (const site of sites) {
    const url = 'https://' + site + '/';
    const isAvailable = await checkStatus(url);
    if (isAvailable) {
      return url;
    }
  }
  return '';
}
/* Check if the "AppServer" cookie exists */
const cookies = document.cookie.split(';');
let appServerCookie = null;
for (const cookie of cookies) {
  const [cookieName, cookieValue] = cookie.trim().split('=');
  if (cookieName === 'AppServer') {
    appServerCookie = cookieValue;
    break;
  }
}
if (appServerCookie == null) {
  sites = shuffleArray(sites);
  findAvailableServer(sites).then(appServer => document.cookie = "AppServer=" + appServer);
}
