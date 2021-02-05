const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const { users, guilds } = req.client

    const furRetreat = guilds.cache.get("569747786199728150");

    const [
        //Admins
        toastAvatar,
        jackAvatar,
        //Moderation Team
        lewisAvatar,
        astutoAvatar,
        johnAvatar,
        rileyAvatar,
        //Community Team
        austinAvatar,
        //Events Team
        lukeAvatar,
        jaydenAvatar,
        ashAvatar,
        willAvatar,
        jacobAvatar
    ] = await Promise.all([
        // IDs are in order like above
        "396459305961914369", //Toast
        "291607550825332736", //Jack
        //Moderation Team
        "176371068448145408", //Sniff
        "657417239913431070", //Astu
        "553600516337434646", //John
        "304010736064135168", //Riley
        //Community Team
        "219117197178568708", //Austin
        //Events Team
        "286942968550785025", //Winston
        "503105733701926922", //Jayden
        "409880316204023810", //Ash
        "484390809383206932", //William
        "717825521978704035" //Jacob
    ].map((id) => users.fetch(id, true)
         .then((user) => user.displayAvatarURL({ format: user.avatar.startsWith("a_") ? "gif" : "png", size: 2048 }))
         .catch(() => "https://cdn.discordapp.com/embed/avatars/0.png")
    ));
    res.render("index.ejs", {
        avatars: {
            toastAvatar,
            jackAvatar,
            astutoAvatar,
            johnAvatar,
            lewisAvatar,
            rileyAvatar,
            austinAvatar,
            lukeAvatar,
            jaydenAvatar,
            ashAvatar,
            willAvatar,
            jacobAvatar
        },
        guilds: {
            furRetreat
        }
    });
});

module.exports = router;
