import env from "dotenv";
env.config();

const DBURL = process.env.DBURL;
const PORT = process.env.PORT;
const JWT_KEY = process.env.JWT_KEY;

export { DBURL, PORT, JWT_KEY };
