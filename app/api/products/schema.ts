import { boolean, number, string, z } from "zod";

const productSchema = z.object({
  name: string().min(3),
  price: number(),
  inStock: boolean(),
});

export default productSchema;
