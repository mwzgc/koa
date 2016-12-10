//import Koa from 'koa'
//import { getUser } from './modules/user'

const Koa = require('koa')
const User = require('./src/user')
const getUser = User.getUser

const app = new Koa()


async function responseTime(ctx, next) {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', `${ms}ms`)
}


function logger(format) {
  format = format || ':method ":url"';

  return async function (ctx, next) {
    const str = format
      .replace(':method', ctx.method)
      .replace(':url', ctx.url);

    console.log(str);

    await next();
  };
}


app.use(responseTime);
app.use(logger());
app.use(async function response(ctx, next) {
  //console.log(ctx)
	let rs = await Promise.all([getUser(), getUser(500)])
  ctx.body = 'Hello World \n' + rs
});


app.listen(3000)
