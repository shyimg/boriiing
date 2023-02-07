window.onload = (event) => {
    const content = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, caption, td, a');

    const boringWords = ['hetero'];

    for (let i=0; i < content.length; i++) {
        boringWords.forEach(word => {
            let element = content[i].innerHTML;
            element = element.toLowerCase().replace(/[\350-\353]/g, 'e');

            if (element.includes(word)) {
                content[i].innerHTML = element.replaceAll(word, 'boriiing');
            }
        });   
    }
}