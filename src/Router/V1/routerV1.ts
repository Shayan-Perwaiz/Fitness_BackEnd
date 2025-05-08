import express from "express";
import { pingContoller } from "../../Controller/serverController";
import { validateRequestBody } from "../../validation/indexValidator";
import { userObjectSchema } from "../../validation/userValidator";

const routerv1 = express.Router();

routerv1.get("/", validateRequestBody(userObjectSchema), pingContoller);

export default routerv1;
