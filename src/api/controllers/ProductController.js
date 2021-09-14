import produtos from '../produtos';

export const getProductById = (id) => {
    let produto = produtos.filter((produto) => produto.id == id);
    
    if (produto.length > 0) {
        produto = produto[0];
    }

    return produto;
}