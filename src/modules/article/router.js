const Router = require("@koa/router");
const verifyAuth = require("../../middleware/auth.middleware");

const { create } = require("./article.controller");

const router = new Router({
    prefix: "/article",
});

router.post("/create", verifyAuth, create);

module.exports = router;
