const Router = require("koa-router");
const router = new Router();
router.get("/api/", (ctx, next) => {
    ctx.body = "hello word"
}).get("/api/test", (ctx, next) => {
    ctx.body = {
        msg: "here is test",
        query: ctx.query,
        queryStr: ctx.querystring,
    }
}).post('/api/users', (ctx, next) => {
    ctx.body = 'here is users';
}).all('/api/users/:id', (ctx, next) => {
    // ...
    console.log(ctx)
    ctx.body = {
        id: 1
    }
});


module.exports = router
