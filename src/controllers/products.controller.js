//export const getProducts = (req,res)=> res.send('respuesta a la ruta productos');

import { getConnection, sql, queries } from "../database"


export const getProducts = async (req, res) => {

    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllProducts)
        //console.log(result);
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }



}


export const createNewProduct = async (req, res) => {
    const { name, description, sku } = req.body
    console.log(req.body);
    let { quantity } = req.body

    if (name == null || description == null || sku == null) {
        return res.status(400).json({ msg: 'Bad Request. Please all fils' })
    }
    if (quantity == null) quantity = 0;

    console.log(name, description, quantity, sku);

    try {
        const pool = await getConnection()
        await pool.request().input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .input("sku", sql.Int, sku)
            .query(queries.createNewProduct)
        res.json(name, description, quantity, sku)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params
    const pool = await getConnection()
    const result = await pool.request().input("Id", id).query(queries.getProductById)
    //console.log(result)
    res.send(result.recordset[0])
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params
    const pool = await getConnection()
    const result = await pool.request().input("Id", id).query(queries.deleteProduct)
    //console.log(result)
    res.send(result)
}


// export const getTotalProducts = async (req, res) => {
//     const pool = await getConnection()
//     const result = await pool.request().query(queries.getTotalProducts)
//     console.log(result)
//     res.sendStatus(204)
// }

export const updateProductById = async (req, res) => {
    const { name, description, quantity, sku } = req.body
    const { id } = req.params
    //  console.log(req.body);

    if (name == null || description == null, quantity == null, sku == null) {
        return res.status(400).json({ msg: 'Bad Request. Please all fils' })
    }

    const pool = await getConnection()
    await pool.request().input('name', sql.VarChar, name)
        .input('description', sql.Text,description)
        .input('quantity', sql.Int, quantity)
        .input('sku', sql.Int, sku)
        .input('id', sql.Int, id)
        .query(queries.updateProductById)
    res.json({ name, description, quantity, sku })

}