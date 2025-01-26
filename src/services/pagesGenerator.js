export default function pageGen(productsCount, pageNumber) {
    console.log(productsCount)
    const pages = Math.ceil(productsCount / pageNumber);
    console.log(pages);
    let pagesArray = [];

    for (let i = 1; i <= pages; i++){
        pagesArray.push(i);
    }

    return pagesArray;
}