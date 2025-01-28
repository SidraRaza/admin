const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Product ID",
      type: "string", // Ensure `string` type
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price1",
      title: "Price",
      type: "number",
    },
    {
      name: "price2",
      title: "Discounted Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};

export default productSchema;
