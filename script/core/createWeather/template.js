const css = `\
<link rel="stylesheet" href="http://at.alicdn.com/t/font_2505550_r08f8es8yv.css">
<link rel="stylesheet" href="https://raw.githubusercontent.com/CB-ysx/CB-ysx/master/assets/css/weather.css">
`

const createCard = (item)=> {
    return `\
<div class='feature-card-item'>
    <div class='iconfont icon-2yejianqing'></div>
    <div>${item.week}</div>
    <div>${item.temperature}</div>
</div>
`
}

const createTemplate = (data)=> {
    const list = data.list.map(item=> createCard(item)).join('')
    const template = `\
${css}
<div class="cb-weather-card-container" style="position: relative;background-color: #212832;border-radius: 15px;padding: 12px;width: 400px;height: 200px;display: flex;justify-content: space-between;line-height: 1.2;">
    <div class='cb-weather-card-box'>
        <div class='card-box-mask'></div>
        <div class='card-box-top'>
            <div class='card-box-week'>${data.week}</div>
            <div class='card-box-day'>${data.day}</div>
            <div class='card-box-address'>${data.address}</div>
        </div>
        <div class='iconfont icon-2yejianqing'></div>
        <div class='card-boxtemperature'>${data.temperature}°C</div>
        <div class='card-boxtemperature-text'>${data.temperatureText}</div>
    </div>
    <div class='cb-weather-text-box'>
        <div class='cb-weather-data-top'>
            <div class='item'>
                <div class='title'>湿度</div>
                <div class='num'>${data.humidity}</div>
            </div>
            <div class='item'>
                <div class='title'>风向</div>
                <div class='num'>${data.direct}</div>
            </div>
            <div class='item'>
                <div class='title'>风力</div>
                <div class='num'>${data.power}</div>
            </div>
        </div>
        <div class='cb-weather-data-feature'>${list}</div>
    </div>
</div>
`
    return template
}

exports.result = createTemplate