# Reproduction nuxt build error

Link to [issue](https://github.com/nuxt/framework/issues/5899)

## Error

After using `yarn build` those errors occured.

```
 ERROR  Rollup error: Could not load /Users/michael/Coding/temp/test-nuxt/.nuxt/dist/server/server.mjs (imported by node_modules/nuxt/dist/core/runtime/nitro/renderer.mjs): ENOENT: no such file or directory, open '/Users/michael/Coding/temp/test-nuxt/.nuxt/dist/server/server.mjs'


 ERROR  Could not load /Users/michael/Coding/temp/test-nuxt/.nuxt/dist/server/server.mjs (imported by node_modules/nuxt/dist/core/runtime/nitro/renderer.mjs): ENOENT: no such file or directory, open '/Users/michael/Coding/temp/test-nuxt/.nuxt/dist/server/server.mjs'
```

## Fix

In `components/Site/TheSiteHeader.vue` comment following lines.
```
<PhList size="32" />
```
change to
```
<!-- <PhList size="32" /> -->
```
and
```
<PhX size="32" />
```
change to
```
<!-- <PhX size="32" /> -->
```

After that, build works perfectly.