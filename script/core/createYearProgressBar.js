const dayjs = require('dayjs')

const today = dayjs()
const startOfYear = dayjs(`${today.year()}`)
const endOfYear = dayjs(startOfYear).add(1, 'y').subtract(1, 's')
const progressOfThisYear = today.diff(startOfYear) / endOfYear.diff(startOfYear)
const progressBarCapacity = 30
const passedProgressBarIndex = progressOfThisYear * progressBarCapacity
const count = Math.floor(passedProgressBarIndex)
const point = count < passedProgressBarIndex ? 1 : 0
const progressBar = '█'.repeat(count) + '▓'.repeat(point) + '░'.repeat(progressBarCapacity - passedProgressBarIndex - point)

const result = `\
---
⏳ The year ${today.year()} is over [${progressBar}] ${(progressOfThisYear * 100).toFixed(2)} %

---`

exports.result = result