import produtos from '../produtos';

export const getProductById = (id) => {
    let produto = produtos.filter((produto) => produto.id == id);
    
    if (produto.length > 0) {
        produto = produto[0];
    }

    return produto;
}

export const getShowcaseProducts = (ids) => {
    let produtosShowcase = produtos.filter((produto) => ids.indexOf(produto.id) > -1);

    return produtosShowcase;
}