import { Router } from "express";
import { Products } from "../services/Products.js";

const ProductMananger = new Products()
const ProductsRouter = Router()

ProductsRouter.post('/Products',async (req,res)=>{
    const response = await ProductMananger.New(req.body)
    res.status(response.status?202:404).json({
        message:response.message,
        status:response.status
    })
})
ProductsRouter.get('/Products', async (req, res) => {
    const response = await ProductMananger.GetAllProducts(); 
  
    res.status(response.status ? 202 : 404).json({
      message: response.message,
      status: response.status,
      products: response.data 
    });
});

ProductsRouter.delete('/Products/:id/',async (req,res)=>{
    const response = await ProductMananger.Delete(req.params.id)
    res.status(response.status ? 202 : 404).json({
        message: response.message,
        status: response.status,
    });
})

ProductsRouter.get('/Products/:id',async (req,res)=>{
    const response = await ProductMananger.FindOne(req.params.id)
    res.status(response.status ? 202 : 404).json({
        message: response.message,
        status: response.status,
        data: response.data
    });
})

ProductsRouter.put('/Products/:id',async (req,res)=>{
    const response = await ProductMananger.Put(req.body,req.params.id)
    res.status(response.status ? 202 : 404).json({
        message: response.message,
        status: response.status,
    });
})

ProductsRouter.get('/Category/:NameCategory',async (req,res)=>{
    const response = await ProductMananger.SelectProductsForCategory(req.params.NameCategory)
    res.status(response.status ? 202 : 404).json({
        message: response.message,
        status: response.status,
        data: response.data
    });
})


export default ProductsRouter