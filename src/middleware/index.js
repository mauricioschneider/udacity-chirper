import logger from "./logger";

export default (getDefaultMiddleware) => getDefaultMiddleware().concat(logger);
