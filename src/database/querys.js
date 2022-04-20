
export const queries = {
    getAllProducts: 'SELECT * FROM Products',
    createNewProduct: "INSERT INTO Products (name, description, quantity, sku) VALUES (@name, @description, @quantity, @sku)",
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProduct:'DELETE FROM [danystore].[dbo].[Products] WHERE Id = @Id',
   // getTotalProducts:'SELECT COUNT(*) FROM Products',
   updateProductById:'UPDATE Products SET Name = @name, Description = @description , Quantity= @quantity , Sku= @sku WHERE Id=@Id' ,
}