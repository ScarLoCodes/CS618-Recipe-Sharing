import { querySchema, queryResolver } from "./query.js";
import { postSchema, postResolver } from "./post.js";
import { userSchema, userResolver } from "./user.js";
import { likeSchema } from "./like.js";
import { mutationSchema, mutationResolver } from "./mutation.js";
export const typeDefs = [
  querySchema,
  postSchema,
  userSchema,
  likeSchema,
  mutationSchema,
];
export const resolvers = [
  queryResolver,
  postResolver,
  userResolver,
  mutationResolver,
];
