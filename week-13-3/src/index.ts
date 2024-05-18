import { Hono } from 'hono'

const app = new Hono()

//signup
app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello Hono!')
});

//signin
app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
});

//post blog
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

//update blog
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})


//get blog
app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono2!')
})

//get all blogs
app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})


export default app


