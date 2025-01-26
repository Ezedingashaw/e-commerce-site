function pagination(page, pageNumber, products) {
    console.log(page, pageNumber, products,"Pagination method");
    const pageStart = page * pageNumber;
    if (pageStart > products.length) return 0;
    const pageEnd = (pageStart + pageNumber);
    const newArray = products.slice(pageStart, pageEnd);

    return newArray;
}

export default pagination;