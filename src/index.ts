export interface Env {
  // `$ wrangler secret put DEPLOY_HOOK_URL`
  DEPLOY_HOOK_URL: string;
}

export default {
  async scheduled(
    _controller: ScheduledController,
    env: Env,
    _ctx: ExecutionContext
  ): Promise<void> {
    // We don't care about the response! We just wanna notify
    await fetch(env.DEPLOY_HOOK_URL, {
      method: "POST",
    });
  },
};
