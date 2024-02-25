---
sidebar_position: 2
---

# Vercel Database

Let's make the the **Vercel postgresql database**!
> (*You can skip this step if you already have a link to a postgresql database*)

### What you'll need

- You must have the frontend version of Movie Web running on Vercel already.
  - If you do not please get a postgrsql database link from somewehere else like [neon](https://neon.tech) or visit the [official Movie Web docs](https://movie-web.github.io/docs/client/deploy#method-1-vercel-recommended) for info on how to host your frontend on Vercel.

### Getting Started

1. Navigate to your Vercel projects home page and select ``storage``.
2. Select ``Create Database`` and click ``Postgres``
3. Select ``Create & Continue``

You should now be able to view something like this:
```js
psql "postgres://default:************@ep-number-camel-2384592.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
```

### Key Notes:

- To get your link select the ``Show Secret`` Button and your link will be revealed!
- Your link is everything from ``postgres`` to ``require``. 
- It **does not include ``psql``** or the **quotation marks (``"``)** 