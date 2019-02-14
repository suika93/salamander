import express from 'express'
import { CreateProduct } from '../application/product/CreateProduct'
import { product as ProductModel, product_category as ProductCategoryModel } from '../infra/database/models'
import { ProductCategoryRepository } from '../infra/product/ProductCategoryRepository'
import { ProductRepository } from '../infra/product/ProductRepository'


const router = express.Router()

router.get('/', (req, res) => {
  const response = { "yeah" : "it works" }
  res.send(response)
})

router.post('/products', (req, res, next) => {

  const productRepository = new ProductRepository(ProductModel)
  const productCategoryRepository = new ProductCategoryRepository(ProductCategoryModel)

  const context = {
    request: req,
    createProduct: new CreateProduct(productRepository, productCategoryRepository)
  }

  try {
    const response = productsController.create(context)
    res.send(response)
  }
  catch(error) {
    next(error)
  }
})


/*
PRODUCT-CATEGORY-OPTIONS
-CREATE
.post /product-category-options
->label
->field_type

-LIST
.get /product-category-options

-LIST-ONE
.get /product-category-options/:id
->product_category_options_id

-UPDATE
.patch /product-category-options/:id
->product_category_options_id
->label
->field_type

-DELETE
.delete /product-category-options/:id
->product_category_options_id

USER
-CREATE
.post /user
->name
->email
->password
->cpf

-LIST
.get /user

-LIST-ONE
.get /user/:id
->user_id

-UPDATE
.patch /user/:id
->user_id
->name
->email
->password
->cpf

-DELETE
.delete /user/:id
->user_id

USER-ADDRESSES
-CREATE
.post /user-addresses
->name
->cpf
->street
->number
->cep
->state
->neighborhood
->country
->address_type
->user_id

-LIST
.get /user-addresses

-LIST-ONE
.get /user-addresses/:id
->user_addresses_id

-UPDATE
.patch /user-addresses/:id
->user_addresses_id
->name
->cpf
->street
->number
->cep
->state
->neighborhood
->country
->address_type
->user_id

-DELETE
.delete /user-addresses/:id
->user_addresses_id

ORDERS
-CREATE
.post /orders
->payment_method

-LIST
.get /orders

-LIST-ONE
.get /orders/:id
->orders_id

OREDER_ITEMS
-CREATE
.post /orders-items
->order_id
->product_name
->product_description
->product_price
->quantity

-LIST
.get /order_items

-LIST-ONE
.get /orders-items/:id
->orders_items_id

ORDER-ADDRESSES
-CREATE
.post /order-addresses
->name
->cpf
->street
->number
->cep
->state
->neighborhood
->country
->address_type
->order_id

-LIST
.get /orderr-addresses

-LIST-ONE
.get /order-addresses/:id
->order_addresses_id

*/

export { router as ProductsRouter }
