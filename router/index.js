const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    const { users } = req.client;
    const [
        benAvatar,
        austinAvatar,
        toastAvatar,
        jackAvatar,
        codfishAvatar,
        foxeldruAvatar,
    ] = await Promise.all([
        // IDs are in order like above
        "265569046425108481",
        "219117197178568708",
        "396459305961914369",
        "291607550825332736",
        "102341036403068928",
        "302787989384462336",
    ].map(id => users.fetch(id)
         .then(user => user.displayAvatarURL())
         .catch(() => "https://cdn.discordapp.com/embed/avatars/0.png")
    ));
    res.render("index.ejs", {
        client: req.client.server.client.user,
        avatars: {
            benAvatar,
            austinAvatar,
            toastAvatar,
            jackAvatar,
            codfishAvatar,
            foxeldruAvatar,
        },
    });
})

module.exports = router;
