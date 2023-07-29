import fs from "fs";
import path from "path";

import { type Request, type Response, Router } from "express";
import YAML from "yaml";

import logger from "../utils/logger";

const openApiSpecPath = path.join(__dirname, "..", "docs", "openapi.yaml");
const openApiSpecFile = fs.readFileSync(openApiSpecPath, "utf8");
const openApiSpecJSON = YAML.parse(openApiSpecFile);

const router = Router();

router.get("/", (req: Request, res: Response) => {
  logger.info("📄 Sending OpenAPI Spec");
  // send the openapi spec
  res.json(openApiSpecJSON);
});

export default router;
