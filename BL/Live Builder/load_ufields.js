// LiveEditor Scripts & Styles

const rootSite = `coiffee.com`;
const stringToSearch = ["hpeditor", "login", "loginstaff", "responsibility"];
const stringURLSearch = stringToSearch.some(s => window.location.href.includes(s));

if (window.location != window.parent.location || stringURLSearch) {

    // declarations    
    const leScripts = document.createElement(`script`);
    const leStyles = document.createElement(`link`);
    leScripts.src = `https://${rootSite}/lescripts.js`;
    leScripts.defer = true;
    leStyles.type = `text/css`;
    leStyles.rel = `stylesheet`;
    leStyles.href = `https://${rootSite}/lestyles.css`;

    // adding files from root
    document.querySelector(`head`).insertAdjacentElement(`beforeend`, leStyles);
    document.querySelector(`head`).insertAdjacentElement(`beforeend`, leScripts);
}
