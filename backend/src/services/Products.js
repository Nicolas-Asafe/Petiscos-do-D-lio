import mongoose from "mongoose";
import { BuildResponse } from "../responses.js";

const Schema = new mongoose.Schema({
    Name: String,
    Price: Number,
    Image: String,
    Description: String,
    Category: String
})
const ProductModel = mongoose.model('product', Schema)

class Products {
    async New({ Name, Description, Price, Image, Category }) {
        if (!Name) return BuildResponse('Seu produto precisa de um nome!', false);
        if (!Price) return BuildResponse('Seu produto precisa de um preço!', false);
        if (!Category) return BuildResponse('Seu produto precisa de uma categoria!', false);

        const Product = { Name, Description, Price, Image, Category }
        await ProductModel.create(Product)
        return BuildResponse('Produto criado com sucesso', true, Product)
    }
    async Delete(ProductId) {
        if (!ProductId) return BuildResponse('Para deletar o produto você precisa inserir o ID dele')
        const productExists = await ProductModel.findById(ProductId)
        if (!productExists) return BuildResponse('O produto que você quer deletar não existe', false)
        await ProductModel.deleteOne({ _id: ProductId })
        return BuildResponse('Produto deletado com sucesso', true)
    }
    async Put(body = {}, ProductId) {
        if (!ProductId) return BuildResponse('Para editarr o produto você precisa inserir o ID dele')
        const productExists = await ProductModel.findById(ProductId)
        if (!productExists) return BuildResponse('O produto que você quer editar não existe', false)
        if (!body) return BuildResponse('Para editar um produto você precisa ter as alterações que você quer colocar nele')


        await ProductModel.updateOne({ _id: ProductId }, body)
        return BuildResponse('Produto editado com sucesso', true)

    }
    async GetAllProducts() {
        const products = await ProductModel.find({})
        return BuildResponse('Produtos listados com sucesso', true, products)
    }
    async FindOne(ProductId) {
        if (!ProductId) return BuildResponse('Para selecionar o produto você precisa inserir o ID dele')
        const productExists = await ProductModel.findById(ProductId)
        if (!productExists) return BuildResponse('O produto que você quer selecionar não existe', false)

        return BuildResponse('Produto selecionado com sucesso', true, productExists)
    }
    async SelectProductsForCategory(Category) {
        if (!Category) return BuildResponse('Para selecionar uma categoria, você precisa colocar o nome dela')
        const ProductsOfCategory = await ProductModel.find({ Category: Category })
        const otherMessage = 'Não foi encontrado nenhum produto nessa categoria'
        return BuildResponse(
            ProductsOfCategory ? 'Categoria listada com sucesso' : otherMessage,
            true,
            ProductsOfCategory
        )

    }
}


export { ProductModel, Products }
