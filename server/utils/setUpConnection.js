import { createConnection } from "mysql";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../.env") });

export const setUpConnection = () => {
  return createConnection({
    host: "localhost",
    user: "root",
    // eslint-disable-next-line no-undef
    password: process.env.password,
    database: "sys",
    port: "3306",
  });
};
