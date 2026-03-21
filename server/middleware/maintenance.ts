export default defineEventHandler((event) => {
  // build中のprerenderではメンテ判定しない
  if (import.meta.prerender) {
    return
  }

  const config = useRuntimeConfig(event)
  const enabled =
    config.public.maintenanceMode === true || config.public.maintenanceMode === 'true'
  if (!enabled) {
    return
  }

  const path = getRequestURL(event).pathname

  if (
    path === '/robots.txt' ||
    path.startsWith('/_nuxt/') ||
    path === '/favicon.ico'
  ) {
    return
  }

  event.node.res.statusCode = 503
  event.node.res.statusMessage = 'Service Unavailable'
  event.node.res.setHeader('Retry-After', '3600')
  event.node.res.setHeader('Content-Type', 'text/html; charset=utf-8')

  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>メンテナンス中</title>
</head>
<body>
  <main>
    <h1>ただいまメンテナンス中です</h1>
    <p>ご不便をおかけして申し訳ありません。しばらくしてから再度アクセスしてください。</p>
  </main>
</body>
</html>`
})