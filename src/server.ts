import express from "express";
import { serverConfig } from "./config/serverConfig";
import routerv1 from "./Router/V1/routerV1";
import { attachCorrelationIdMiddleware } from "./middleware/correlation.middleware";
import logger from "./config/loggers.config";

const app = express();

app.use(express.json());

app.use(attachCorrelationIdMiddleware);

app.use("/start", routerv1);

app.listen(serverConfig.PORT, () => {
  logger.info(`Server is running on Port: ${serverConfig.PORT}`);
  logger.info("Press ctrl + c to close the running server");
});
