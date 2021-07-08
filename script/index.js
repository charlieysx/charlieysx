const dayjs = require('dayjs')
const dotenv = require("dotenv")
dotenv.config()

const yearProgressBar = require('./core/createYearProgressBar').result
// const createWeather = require('./core/createWeather').result

// ## ☀️ weather（Guangzhou, Guangdong, China）

// <br />
// ${weather}

// <br />

async function createReadme() {
//     const weather = await createWeather()
    const readme = `\
![Build README](https://github.com/CB-ysx/CB-ysx/workflows/Build%20README/badge.svg)
![visitors](https://visitor-badge.glitch.me/badge?page_id=CB-ysx)

# Hi, I‘m CodeBear.

⏰ Last Updated On ${dayjs().format('YYYY-MM-DD HH:mm:ss')}

${yearProgressBar}
<br />

## 🐱 My Github Stats And Languages:

<img align="left" width="42%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=CB-ysx&layout=compact&text_color=daf7dc&bg_color=151515">
<img align="right" width="50%" src="https://github-readme-stats.vercel.app/api?username=CB-ysx&theme=tokyonight&show_icons=true&icon_color=6392DF">
`
    console.log(readme)
}

createReadme()
