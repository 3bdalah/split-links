let blockLinks = ["www.pornhub.com","ww.xvideo.com","www.xnxx.com","www.xxnx.com","www.josporn.com","xhamster.com"];

var linkWebsite = window.location.host;
let url = "http://www.google.com/";

blockLinks.forEach((link) => {
    if(linkWebsite === link){
        window.location.replace(url);
        console.log("done");
    }
});
console.log(linkWebsite);