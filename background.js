//РЕГУЛЯРКИ
// const geo = /(?<=geo\/)[0-9]*/g
// const route = /(?<=route\/)[0-9]*/g
// const inside = /(?<=inside\/)[0-9]*/g
// const station = /(?<=station\/)[0-9]*/g
// const platform = /(?<=platform\/)[0-9]*/g
// const stationEntrance = /(?<=stationEntrance\/)[0-9]*/g
const firm = /(?<=firm\/)[0-9]*/g
const geo = /(?<=(geo|inside|platform|stationEntrance)\/)[0-9]*/g
// const coords = /(?<=(\/|%2C))[0-9\-]{2,3}\.[0-9]*/g
const coords = /(?<=\/|C|=)[0-9-]{1,3}\.[0-9]*/g

//ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
let oldSysCode;
let newSysCode;


//ДОБАВЛЕНИЕ ОБЩЕЙ ПАНЕЛИ
var objLink = document.getElementsByClassName("_hggo10")[0];
// var objLink = document.getElementsByClassName("_osua8z");
console.log(objLink);
const links = document.createElement('div');
links.setAttribute("class", "link-under-the-coord");
links.setAttribute("style","display: flex;justify-content: space-between;");
objLink.append(links);
var objTapUser = document.getElementsByClassName("link-under-the-coord")[0];


//ДОБАВЛЕНИЕ КНОПКИ ПЕРЕХОДА В FIJI ПО КООРДИНАТАМ
const fijiLink = document.createElement('div');
fijiLink.setAttribute("class", "fiji-link");
fijiLink.setAttribute("style", "width:40px;height:40px;border: #00BFFF;overflow: hidden;padding: 4px;margin-left: 2px;margin-right: 2px;border-radius: 4px;box-shadow: 0 1px 3px 0 rgba(38, 38, 38, 0.5);-moz-box-sizing: border-box;box-sizing: border-box;background: #ffffff;color: #262626;;float:left;");
fijiLink.setAttribute("onmouseover","this.style.backgroundColor='#F0F8FF';");
fijiLink.setAttribute("onmouseout","this.style.backgroundColor='white';");


//ДОБАВЛЕНИЕ КНОПКИ ПЕРЕХОДА В FIJI ПО СИСКОДУ
const fijiSysCode = document.createElement('div');
fijiSysCode.setAttribute("class", "fiji-syscode");
fijiSysCode.setAttribute("style","height:40px;border: #00BFFF;overflow: hidden;padding: 4px;margin-left: 2px;margin-right: 2px;border-radius: 4px;box-shadow: 0 1px 3px 0 rgba(38, 38, 38, 0.5);-moz-box-sizing: border-box;box-sizing: border-box;background: #ffffff;color: #262626;;float:left;");
fijiSysCode.setAttribute("onmouseover","this.style.backgroundColor='#F0F8FF';");
fijiSysCode.setAttribute("onmouseout","this.style.backgroundColor='white';");


//ДОБАВЛЕНИЕ КНОПКИ ПЕРЕХОДА В IR
const irLink = document.createElement('div');
irLink.setAttribute("class", "inforussia-link");
irLink.setAttribute("style","width:40px;height:40px;border: #00BFFF;overflow: hidden;padding: 4px;margin-left: 2px;margin-right: 2px;border-radius: 4px;box-shadow: 0 1px 3px 0 rgba(38, 38, 38, 0.5);-moz-box-sizing: border-box;box-sizing: border-box;background: #ffffff;color: #262626;;float:left;");
irLink.setAttribute("onmouseover","this.style.backgroundColor='#F0F8FF';");
irLink.setAttribute("onmouseout","this.style.backgroundColor='white';");


//ДОБАВЛЕНИЕ КНОПКИ ПЕРЕХОДА В YOURA
const youraLink = document.createElement('div');
youraLink.setAttribute("class", "youra-link");
youraLink.setAttribute("style","width:40px;height:40px;border: #00BFFF;overflow: hidden;padding: 4px;margin-left: 2px;margin-right: 4px;border-radius: 4px;box-shadow: 0 1px 3px 0 rgba(38, 38, 38, 0.5);-moz-box-sizing: border-box;box-sizing: border-box;background: #ffffff;color: #262626;;float:left;");
youraLink.setAttribute("onmouseover","this.style.backgroundColor='#F0F8FF';");
youraLink.setAttribute("onmouseout","this.style.backgroundColor='white';");





//ЗАМЕНА КНОПОК
function addButtons(coord = null, syscodeGeo = null, syscodeFirm = null, moveToFiji = null, moveToFijiBySyscode = null, moveToInforussia = null, moveToYouRa = null) {
    // console.log('функция замены кнопок начала работу');
    // console.log(`ссылка: ${url}`);
    // console.log(`найденные координаты: ${coord}`);
    // console.log(`найденный сискод Fiji: ${syscode}`);
    // console.log(typeof coord);
    // if (syscodeFirm == null) {
    //     objTapUser.remove(youraLink);
    // }

    if (coord) {
        objTapUser.append(fijiLink);
        var objFijiLink = document.getElementsByClassName("fiji-link")[0];
        fijiLink.innerHTML = moveToFiji;
        objFijiLink.replaceWith(fijiLink);
    } else {
        fijiSysCode.remove();
    };


    if (syscodeGeo) {
        objTapUser.append(fijiSysCode);
        var objFijiSysCode = document.getElementsByClassName("fiji-syscode")[0];
        fijiSysCode.innerHTML = moveToFijiBySyscode;
        objFijiSysCode.replaceWith(fijiSysCode);
    } else {
        fijiSysCode.remove();
    };

    
    if (syscodeFirm) {
        objTapUser.append(irLink);
        var objIrLink = document.getElementsByClassName("inforussia-link")[0];
        irLink.innerHTML = moveToInforussia;
        objIrLink.replaceWith(irLink);
    } else {
        irLink.remove();
    };


    if (syscodeFirm) {
        objTapUser.append(youraLink);
        var objYouraLink = document.getElementsByClassName("youra-link")[0];
        youraLink.innerHTML = moveToYouRa;
        objYouraLink.replaceWith(youraLink);
    } else {
        youraLink.remove();
    };

}


//РАСПОЗНАВАНИЕ ОБНОВЛЕНИЯ СТРАНИЧКИ
function hrefHandler() {
    console.log("Функция начала работу");
    this.oldhref = window.location.href;
    this.Check;

    var that = this;
    var detect = function(){
        if(that.oldhref!=window.location.href){
            that.oldhref = window.location.href;
            url = window.location.href;
            fijIR(url, oldSysCode);
            
        }
    };
    this.Check = setInterval(function(){ detect() }, 500);
}
var hrefDetection = new hrefHandler(oldSysCode);


//РАБОТА СО ССЫЛКОЙ
function fijIR() {
    var coord = url.match(coords);
    var syscodeGeo = url.match(geo);
    var syscodeFirm = url.match(firm);



    // console.log(syscodeGeo);

    // console.log(`ссылка: ${url}`);
    // console.log(`найденные координаты: ${coord}`);
    // console.log(`найденный сискод Fiji: ${syscode}`);
    // console.log('передача переменных функции замены кнопок');
    //console.log(syscodeGeo);

    var moveToFiji = `<a href="fiji://view/lon=${coord[0]}&lat=${coord[1]}" title="Перейти в Fiji по координатам"><img width="32" height="32" src="https://youla.2gis.local/assets/img/fiji%20small.png"></a>`;
    if (syscodeGeo) {
        var moveToFijiBySyscode;
        if (url.match(/geo/g)) {
            //moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду"><img width="32" height="32" src="https://wiki.2gis.ru/download/thumbnails/2949333/Fiji.png?version=1&modificationDate=1680766558101&api=v2"></a>`;
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="26" height="32" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAMAAAA7dZg3AAAAAXNSR0IB2cksfwAAAYNQTFRFAAAAALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+ALLJALLJeLk+eLk+eLk+eLk+ALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+Qu+5GQAAAIF0Uk5TAAY6fpeVezAEatf/CYjw/VD3CqhG4nz7oJ6M5xa+XfxXDqmiDKunEH/zcyRkIAUjRFkdHlo+IDB6xvf9mASW//PAeCw0qMsYK8Tv02zxBtXneRQCMovtVoT5hIhchuMSb2Nm+4IXQuveoHZSQOExA0ew9aQ/ARB0v/m3CBNRmUsP+0VCvAAAAXVJREFUeJxlkmdDwjAQQIOKAmXvKQ4cKOJAQUUMyhYEpG4ElaEs997+dLts2vK+NHevuVyuBeAfUU9vn7h/QAKESKQyjEImFUi5QokxKBVyrhGJVRiLSiziKLUG46BRI6PVYTx0WlbpDXxl0LPKaOIrk5FVZkyAmVUWobKwyipUVtS7jW9sqHu7g68cdnSxQSfXOIc40xge4apRF2++Y2jPOH/yYGLSTRv3lAsImfYQX0zmmekSzFDMXUnv7Nz8Aq18i0t+LzKB5ZXV4FqIVKF1GN7YjDAiGoMk8QSpEnEqiEVJk0wFifVWOkPvyqS3iTCYSgKQzRGr/E6ggNNn4YXdvX0ilcuCA+Jx6KMqK0xHx9TCVySSJ6AEYRmnDz09O2f+JbwMYQlUIKzWIjj3KnikVoWwAupk4XjFj4w/Q3aZrwNwcUm122i22p1Ou9VsUOHVNfHSze3dPRQQfnh8oio8v7xWueLtPfOB6n9+Fb8Zaj+/dO4P7VpTrDeIRg0AAAAASUVORK5CYII="/></defs><use id="Background" href="#img1" x="3" y="0"/></svg></a>`;
        };
        if (url.match(/platform/g)) {
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду остановки"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="31" height="27" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAbCAMAAACz4aQdAAAAAXNSR0IB2cksfwAAAQVQTFRFAAAAtNZXqtBAqdA9qdA+i8JCfLtEfLtDgb5KqtBAp887p846p846p886icE+ebpAebpAerpAe7pCgL1Jq9FEqM88ps44h8A8eLk+ebk/fbtFqM88ps44ebk/f71Iqc8+ps45ebpAgr9Np887eLk/fbxFp846e7pCps45erpAeLk+stVT36JV7opN4ZtOl8lWisNY54pO6olO541RisNY9opX9YNO9YNO9YNO9YVRDrbfBLPdB7TeCrXeALLdA7PdDLbfArPdAbLdArPdArPdAbLdArLdBbTeBLPeDbbfAbLdArPe9opX9YNO9YNOAbLdALLdBLPeDbbfAbLdArPe9YNO9YVRCtScHAAAAFd0Uk5TAAMbKSsrKyQQQKDg/P////LJcRQJiv///+JCh/3qKUjzwgWm+C7lZf5+gBtP/1kbG8v/wQ07/0XFujTQnED/vyyx/9i4+diFgBXqgB2AI4CAQAt1QGJdC6r2awAAALpJREFUeJztzsUagmAQheGxuxWxuwsLGwU7sPX+L0X0+UFFYeXSd3MW32IGgKNQqtSIRovo9MAzGE1mC2K1IXaH0/Wobg/2wos/+fz3HghKdTwUBohEMcmOx+KQwGR6MgVpuY5nICvbc4DJ9jwUiqVSuSCoEIJqrU40AJok2YJv2mTnPv/+g97tifTf+4ASGb73Ec0wYxqZTJnZXHyfoRb84eWKWn/8J9k3LLvlZrc/8P142p+5ubBXgBuGy0hno1wzVAAAAABJRU5ErkJggg=="/></defs><style></style><use id="Background" href="#img1" x="1" y="2"/></svg></a>`;
        };
        if (url.match(/stationEntrance/g)) {
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду входа в метро"><svg width="32px" height="32px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="metro_red_88" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="metro/88/bounding" fill="#FF0000" stroke="#FFFFFF"><circle id="Oval" cx="44" cy="44" r="43.5"></circle></g><polygon id="Page-1" fill="#FFFFFF" points="57 17 44 42 31 17 15 61 28 61 34 44 44 64 54 44 60 61 73 61"></polygon></g></svg></a>`;
        };
        if (url.match(/inside/g)) {
            //moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M981.4 502.3c-9.1 0-18.3-2.9-26-8.9L539 171.7c-15.3-11.8-36.7-11.8-52 0L70.7 493.4c-18.6 14.4-45.4 10.9-59.7-7.7-14.4-18.6-11-45.4 7.7-59.7L435 104.3c46-35.5 110.2-35.5 156.1 0L1007.5 426c18.6 14.4 22 41.1 7.7 59.7-8.5 10.9-21.1 16.6-33.8 16.6z" fill="#5F6379" /><path d="M810.4 981.3H215.7c-70.8 0-128.4-57.6-128.4-128.4V534.2c0-23.5 19.1-42.6 42.6-42.6s42.6 19.1 42.6 42.6v318.7c0 23.8 19.4 43.2 43.2 43.2h594.8c23.8 0 43.2-19.4 43.2-43.2V534.2c0-23.5 19.1-42.6 42.6-42.6s42.6 19.1 42.6 42.6v318.7c-0.1 70.8-57.7 128.4-128.5 128.4z" fill="#3688FF" /></svg></a>`;
            moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a>`;
            if (url.match(/geo/g) && syscodeGeo[0] != syscodeGeo[1]) {
                moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo[0]}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a><a href="fiji://editBySysCode/${syscodeGeo[1]}" title="Перейти в Fiji по сискоду"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="26" height="32" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAMAAAA7dZg3AAAAAXNSR0IB2cksfwAAAYNQTFRFAAAAALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+ALLJALLJeLk+eLk+eLk+eLk+ALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+Qu+5GQAAAIF0Uk5TAAY6fpeVezAEatf/CYjw/VD3CqhG4nz7oJ6M5xa+XfxXDqmiDKunEH/zcyRkIAUjRFkdHlo+IDB6xvf9mASW//PAeCw0qMsYK8Tv02zxBtXneRQCMovtVoT5hIhchuMSb2Nm+4IXQuveoHZSQOExA0ew9aQ/ARB0v/m3CBNRmUsP+0VCvAAAAXVJREFUeJxlkmdDwjAQQIOKAmXvKQ4cKOJAQUUMyhYEpG4ElaEs997+dLts2vK+NHevuVyuBeAfUU9vn7h/QAKESKQyjEImFUi5QokxKBVyrhGJVRiLSiziKLUG46BRI6PVYTx0WlbpDXxl0LPKaOIrk5FVZkyAmVUWobKwyipUVtS7jW9sqHu7g68cdnSxQSfXOIc40xge4apRF2++Y2jPOH/yYGLSTRv3lAsImfYQX0zmmekSzFDMXUnv7Nz8Aq18i0t+LzKB5ZXV4FqIVKF1GN7YjDAiGoMk8QSpEnEqiEVJk0wFifVWOkPvyqS3iTCYSgKQzRGr/E6ggNNn4YXdvX0ilcuCA+Jx6KMqK0xHx9TCVySSJ6AEYRmnDz09O2f+JbwMYQlUIKzWIjj3KnikVoWwAupk4XjFj4w/Q3aZrwNwcUm122i22p1Ou9VsUOHVNfHSze3dPRQQfnh8oio8v7xWueLtPfOB6n9+Fb8Zaj+/dO4P7VpTrDeIRg0AAAAASUVORK5CYII="/></defs><use id="Background" href="#img1" x="3" y="0"/></svg></a>`;
            };
            if (url.match(/platform/g)) {
                moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo[0]}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a><a href="fiji://editBySysCode/${syscodeGeo[1]}" title="Перейти в Fiji по сискоду остановки"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="31" height="27" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAbCAMAAACz4aQdAAAAAXNSR0IB2cksfwAAAQVQTFRFAAAAtNZXqtBAqdA9qdA+i8JCfLtEfLtDgb5KqtBAp887p846p846p886icE+ebpAebpAerpAe7pCgL1Jq9FEqM88ps44h8A8eLk+ebk/fbtFqM88ps44ebk/f71Iqc8+ps45ebpAgr9Np887eLk/fbxFp846e7pCps45erpAeLk+stVT36JV7opN4ZtOl8lWisNY54pO6olO541RisNY9opX9YNO9YNO9YNO9YVRDrbfBLPdB7TeCrXeALLdA7PdDLbfArPdAbLdArPdArPdAbLdArLdBbTeBLPeDbbfAbLdArPe9opX9YNO9YNOAbLdALLdBLPeDbbfAbLdArPe9YNO9YVRCtScHAAAAFd0Uk5TAAMbKSsrKyQQQKDg/P////LJcRQJiv///+JCh/3qKUjzwgWm+C7lZf5+gBtP/1kbG8v/wQ07/0XFujTQnED/vyyx/9i4+diFgBXqgB2AI4CAQAt1QGJdC6r2awAAALpJREFUeJztzsUagmAQheGxuxWxuwsLGwU7sPX+L0X0+UFFYeXSd3MW32IGgKNQqtSIRovo9MAzGE1mC2K1IXaH0/Wobg/2wos/+fz3HghKdTwUBohEMcmOx+KQwGR6MgVpuY5nICvbc4DJ9jwUiqVSuSCoEIJqrU40AJok2YJv2mTnPv/+g97tifTf+4ASGb73Ec0wYxqZTJnZXHyfoRb84eWKWn/8J9k3LLvlZrc/8P142p+5ubBXgBuGy0hno1wzVAAAAABJRU5ErkJggg=="/></defs><style></style><use id="Background" href="#img1" x="1" y="2"/></svg></a>`;
            };
            if (url.match(/stationEntrance/g)) {
                moveToFijiBySyscode = `<a href="fiji://editBySysCode/${syscodeGeo[0]}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a><a href="fiji://editBySysCode/${syscodeGeo[1]}" title="Перейти в Fiji по сискоду входа в метро"><svg width="32px" height="32px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="metro_red_88" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="metro/88/bounding" fill="#FF0000" stroke="#FFFFFF"><circle id="Oval" cx="44" cy="44" r="43.5"></circle></g><polygon id="Page-1" fill="#FFFFFF" points="57 17 44 42 31 17 15 61 28 61 34 44 44 64 54 44 60 61 73 61"></polygon></g></svg></a>`;
            };
        };
    }
    
    if (syscodeFirm) {
        var moveToInforussia =`<a href="dgis://editcard/id=${syscodeFirm}&sV=true" title="Перейти в IR"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="32" height="32"><g transform="matrix(1 0 0 1 0 0)"><image  x="0" y="0" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" width="32" height="32"/></g></svg></a>`;
        var moveToYouRa = `<a href="https://youra.2gis.ru/task/${syscodeFirm}" title="Перейти в YouRa" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="32" height="32"><g transform="matrix(1 0 0 1 0 0)"><image  x="0" y="0" xlink:href="data:image/png;base64,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" preserveAspectRatio="none" width="32" height="32"/></g></svg></a>`;
    };
    addButtons(coord, syscodeGeo, syscodeFirm, moveToFiji, moveToFijiBySyscode, moveToInforussia, moveToYouRa);
}

