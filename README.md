# Deploy worker

This is a [Cloudflare Worker](https://workers.cloudflare.com/) that I use
to trigger a deploy web hook for my [blog](https://github.com/matthewsanetra/blog).

## Config

### Secrets

You'll need to set the following secrets:

- `DEPLOY_HOOK_URL`

You set them using `echo "{url}" | wrangler secret put DEPLOY_HOOK_URL`.

### Time

You can change the time the worker runs by changing the `cron` expression
in [wrangler.toml](wrangler.toml).

## Dev mode

If you want to mock a secret during dev, you must make a `.dev.vars` file
in this directory. It is `.gitignore`d, so you can test on your real secret
if you wish.
