const { spawn } = require(`node:child_process`)

const { createBuildRunner } = require(`@vgd/esbuild-util`)

const main = () => {
  const buildApp = createBuildRunner({
    bundle: true,
    entryPoints: [`src/index.ts`],
    format: `esm`,
    outdir: `dist`,
    platform: `node`,
    target: [`esnext`],
    watch: {
      onRebuild(err) {
        if (err) {
          console.error(`[dev] An error occurred while rebuilding the app:`)
          console.error(err)
        } else {
          console.log(`[dev] App successfully rebuilt`)
        }
      },
    },
  })

  return buildApp().then((buildResult) => {
    const serverProcess = spawn(`pnpm`, [`serve`], {
      stdio: `inherit`,
    })

    serverProcess.on(`exit`, () => {
      buildResult.stop()
    })

    return undefined
  })
}

main()
