import { createIPX, createIPXMiddleware } from 'ipx'

// https://github.com/unjs/ipx
const ipx = createIPX({
  dir: '', // absolute path to images dir
  domains: [
    'https://spaceflightnow.com/',
    'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/',
    'https://spacenews.com/',
    'https://www.nasa.gov/',
    'https://blog.ulalaunch.com/',
    'https://planetary.s3.amazonaws.com/',
    'https://www.nasaspaceflight.com/',
    'https://spacex.com/',
    'https://space.com/',
    'https://phys.org/',
    'https://arstechnica.com/',
    'https://www.blueorigin.com/',
    'https://www.spaceflightinsider.com/',
    'https://www.japantimes.co.jp/',
    'https://www.theverge.com/',
    'https://www.teslarati.com/',
    'https://www.elonx.net/',
    'https://www.virgingalactic.com/',
    'https://www.esa.int/'
  ], // allowed external domains (should match domains option in nuxt.config)
  alias: {}, // base alias
  sharp: {}, // sharp options
})

export default createIPXMiddleware(ipx)