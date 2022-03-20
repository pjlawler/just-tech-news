
const format_date = (date) => {
    return `${new Date(date).getMonth()+ 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`
};

const format_plural = (word, num) => {
    if (num === 1) { return word; }
    return `${word}s`;
};

const format_url = (url) => {
    const parts = url.split('/');
    let shortUrl = "";
    parts.forEach(p => {
        if(p.indexOf("www.")> -1){
            // removes the www. and anything from a '?' to the right
            shortUrl = p.replace("www.","").split("?")[0];
        };
    });
    return shortUrl;
}

module.exports = { format_date, format_plural, format_url }