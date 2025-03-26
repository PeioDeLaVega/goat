import logger from "../logger";
import { app } from "./app";

app.listen(5173).on("listening", () => {
	logger.info("server is listening on port http://localhost:5173");
});

module.exports = app;
