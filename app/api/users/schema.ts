import { string, z } from "zod";

const schema = z.object({
  name: string().min(3),
  email: string().email(),
});

export default schema;
