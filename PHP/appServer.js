// changing appServer
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let appServer = ["one", "net"];
shuffleArray(appServer);
createCookie("AppServer", `https://bulletlink.${appServer[0]}/`);
