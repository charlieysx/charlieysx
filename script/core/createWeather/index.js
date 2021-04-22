const axios = require('axios')
const dayjs = require('dayjs')

const today = dayjs()

const createTemplate = require('./template.js').result

async function create() {
    const res = await axios.get(`http://apis.juhe.cn/simpleWeather/query?city=${encodeURI('广州')}&key=${process.env.WEATHER_API_KEY}`)
    const data = res.data
    if (data.error_code !== 0) {
        return ''
    }
    const weekMap = ['日', '一', '二', '三', '四', '五', '六']
    return createTemplate({
        temperature: data.result.realtime.temperature,
        temperatureText: data.result.realtime.info,
        humidity: data.result.realtime.humidity,
        direct: data.result.realtime.direct,
        power: data.result.realtime.power,
        address: '中国广东广州',
        day: today.format('YYYY年MM月DD日'),
        week: `星期${weekMap[today.day()]}`,
        list: res.data.result.future.slice(0, 3).map(item=> {
            return {
                week: `星期${weekMap[dayjs(item.date).day()]}`,
                temperature: item.temperature
            }
        })
    })
}

exports.result = create