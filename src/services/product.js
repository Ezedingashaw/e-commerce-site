function product(id, products) {
    const product = products.filter(product => product._id === id);
    return {...product};
};

export default product;