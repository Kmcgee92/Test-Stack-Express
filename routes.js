const express = require("express");

const router = express.Router();





router.get("/", (req,res) => {
    console.log("this is home")
    res.render("index", { title: "Home"})
})



if (process.env.NODE_ENV !== "production") {
    console.log(process.env.NODE_ENV)
    router.get("/error-test", () => {
        throw new Error("This is a test error.");
    });
}

module.exports = router

