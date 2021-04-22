const css = `\
<link rel="stylesheet" href="http://at.alicdn.com/t/font_2505550_r08f8es8yv.css">
<style type="text/css">
.cb-weather-card-container {
    position: relative;
    background-color: #212832;
    border-radius: 15px;
    padding: 12px;
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    line-height: 1.2;
}
.cb-weather-card-box {
    position: relative;
    width: 180px;
    height: 240px;
    margin-top: -21px;
    margin-left: -20px;
    background-color: #85ceed;
    border-radius: 15px;
    padding: 12px;
    box-sizing: border-box;
    overflow: hidden;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg5.xitongzhijia.net%2Fallimg%2F150214%2F53-150214112243.jpg&refer=http%3A%2F%2Fimg5.xitongzhijia.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621680905&t=c165c9ebc6962e0d36c56f8aa05ec6ed');
    background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yao51.com%2Fjiankangtuku%2Fetercahtx.jpeg&refer=http%3A%2F%2Fimg.yao51.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621681022&t=bf75e2039280bad622f36687e3b1d2bc');
}
.card-box-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
}
.card-box-top {
    flex: 1;
    line-height: 1.8;
}
.card-box-week {
    font-size: 16px;
}
.card-box-day {
    font-size: 12px;
    color: #eeeeee;
}
.card-box-address {
    font-size: 12px;
    color: #eeeeee;
}
.card-boxtemperature {
    font-weight: bold;
    font-size: 26px;
}
.card-boxtemperature-text {
    font-size: 12px;
}
.cb-weather-text-box {
    width: 230px;
    height: 100%;
    line-height: 1.5;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.cb-weather-data-top > .item {
    display: flex;
    justify-content: space-between;
}
.cb-weather-data-feature {
    display: flex;
    justify-content: space-between;
}
.feature-card-item {
    width: 25%;
    height: 80px;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
}
.feature-card-item:first-child {
    background-color: #ffffff;
    color: black;
}
</style>
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
<div class="cb-weather-card-container">
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