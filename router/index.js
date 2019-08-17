const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
    res.render("index.ejs", {
        client: req.client.server.client.user
    });
})

module.exports = router;