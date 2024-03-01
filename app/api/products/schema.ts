import { number, string, z } from "zod";

const productSchema = z.object({
  name: string().min(3),
  price: number(),
});

export default productSchema;
