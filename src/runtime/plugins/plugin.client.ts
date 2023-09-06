import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin({
  name: 'deadlinefunnel',
  async setup() {
    // Get the userIdHash from the module options
    const config = useRuntimeConfig().public.deadlinefunnel
    const { userIdHash } = config

    // Install the Deadline Funnel script
    function SendUrlToDeadlineFunnel (e: any) {
      let r; let t; let c; let a; let h; let n; let o; let A; const i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; let d = 0; let l = 0; let s = ''; const u = []; if (!e) { return e } do { r = e.charCodeAt(d++), t = e.charCodeAt(d++), c = e.charCodeAt(d++), A = r << 16 | t << 8 | c, a = A >> 18 & 63, h = A >> 12 & 63, n = A >> 6 & 63, o = 63 & A, u[l++] = i.charAt(a) + i.charAt(h) + i.charAt(n) + i.charAt(o) } while (d < e.length); s = u.join(''); const C = e.length % 3; let decoded = (C ? s.slice(0, C - 3) : s) + '==='.slice(C || 3); decoded = decoded.replace('+', '-'); decoded = decoded.replace('/', '_'); return decoded
    } const dfUrl = SendUrlToDeadlineFunnel(location.href); let dfParentUrlValue; try { dfParentUrlValue = window.parent.location.href } catch (err) { if (err.name === 'SecurityError') { dfParentUrlValue = document.referrer } } const dfParentUrl = (parent !== window) ? ('/' + SendUrlToDeadlineFunnel(dfParentUrlValue)) : ''; (function () { const s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.setAttribute('data-scriptid', 'dfunifiedcode'); s.src = 'https://a.deadlinefunnel.com/unified/reactunified.bundle.js?userIdHash=' + userIdHash + '&pageFromUrl=' + dfUrl + '&parentPageFromUrl=' + dfParentUrl; const s2 = document.getElementsByTagName('script')[0]; s2.parentNode.insertBefore(s, s2) })()
    }
})
