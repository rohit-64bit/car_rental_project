const app = require("./app");
const dbConnect = require("./src/configs/db");
require("dotenv").config({
    path: "./src/configs/.env",
});

dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})