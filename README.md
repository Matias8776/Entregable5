# Entregable 5 Backend

&nbsp;

## Correr el proyecto:

###

-   git clone https://github.com/Matias8776/Entregable5.git
-   cd Entregable5
-   npm i
-   npm start

## Mostrar productos:

###

-   GET localhost:8080/api/products

## Buscar producto por ID:

###

-   GET localhost:8080/api/products/:pid

## Mostrar productos con limite:

###

-   GET localhost:8080/api/products?limit=

## Agregar producto:

###

-   POST localhost:8080/api/products

```javascript
{
    "title": "",
    "description": "",
    "price": 500,
    "code": "",
    "stock": 10,
    "status": true,
    "category": ""
}
```

## Actualizar producto por ID:

###

-   PUT localhost:8080/api/products/:pid

## Eliminar producto por ID:

###

-   DELETE localhost:8080/api/products/:pid

## Crear carrito:

###

-   POST localhost:8080/api/carts

## Agregar producto a carrito:

###

-   POST localhost:8080/api/carts/:cid/product/:pid

## Buscar carrito por ID:

###

-   GET localhost:8080/api/carts/:cid
