// Проверка обновления версии
chrome.runtime.sendMessage({ action: "check_update" });

// Картинки Base64 (Это ужас, но я не знаю другой путь)
const fijiImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEVHcEwhJTA3dJEMDhEyg6cQExcSdqMAAABRsdrGlJ3AVFQ8SmWBfJMhjb2zKioaVnIplcXMr7QvnMsWkMW4cXVvcY3l2+DKxsnmsLLonqF0xehqwOaLtL9gveXHlpTci5NYueNrstKWmrFNteLNiUfaeHxCsN83q95ZnMI0qNp+iqJjoGUlotnZT1asWzZ1YXvMKCo4Pmv6dVldAAAAFnRSTlMABQkUFjteaG1zeXh7ha24ur7J8P39bi3SMQAAAbBJREFUeNqN0utSgzAQBWAoUEW8FYFAGwjXElIi5P1fzuwmRh394ZlemDnf7MIE718JoiRJ4of4MdF5jOP4HhN6NvFJKKWafcqV2rKpJHSAXNN7rP0oYyXJDdimivSKt9BfrwuKMM97VhZFuU+EVUUh8o23nwK2PEwYJnepfxlc93VtyPykNzzvvyI6bpMevMOpaVhZVhXbJfxVjDEq3k22NPT8F5WTopp6uIeiYCzfFBfZCLGgJ1W22ccUpGTZxnnTNHIcM6HB4cSgtkAh6TtKqWxuNwrglZvQnuK9dedzRwklsqQEQToMbV1fLpfzV4SUctffzQEtzt8EbSom2Tj2uOL6G3SkKGR5Ix2CGQXULhdKiGwoXyzQQpPvI+qOvgs+zw6AgD0YuGqHBQ4LwQIABRr82OOcDZgNcHXrDtMB2IECCfQtDjArVgBOtLb/AZwwxPXzagDuAOEy2AEW2BFIXI0DAPgaLCCAYFy/rOvrwfOeViOAuNr2K7y04RsKJDaufws9LY4gkLgWauiPHuaYagLGZcU6PfpQ+0EQJS9/JImCwEcQ6dxFdz8SYQLf+wC2YG8dFfqcEQAAAABJRU5ErkJggg=="
const youraImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAOxAAADsQH1g+1JAAAArlBMVEVHcExcZuFaZd9bZd9aZd9ZZN1gautKVrpgaupJVrtfaelJVrlgautJVrn////6+vzo8/7s7/fe6vr/3Nbg5PXq3uTB4v7V1/n5yMS43f7/uq/Dyeuh0v3qtLe3vuSNyv+Gx//rpKetsuz/infnkJb/eGSOle96hOT2WUr/VjzgW1+pZpdocux0cc9gaupjaeRZZNzqMi6QTH1vU5xOWb5IVbdXUKjwHRKhNl7MJzTaZckSAAAADnRSTlMAAhorOW6Qmbi82+Ht9Pdq6W4AAAGTSURBVHjabdPZeoIwEAVgloCIGExUxLVqVUAqtCJG3//FOmC2YudG+fIzHELGkGXajucHRRH4nmObRrdM5PqFLN9FHWK5QfGnAtfS15EnFpJE/POQti67nyaTk3wO+medYPIuLNWfYkw04Vltfldcf80wDiklM5nDNQEgmX8Dy9FqRcmmFO+C9AYJwTSaf2xXdJJ8qxa2TLjHo6gB24jsb1z4tuEUomYCzMnyJoRjeCqi7ACg5sIzfA2IDA3gwjcCHYSjaDWnpAFcBEYhCwAQ0tQGABddgAUQQj2iWPIOFEBdcxGokOVhASBeQ4NDXgvhy9e85OlniMNjOiX0zB53Lvpio8o8y44hHmdsTaYpYw8OHLHVlzMAghcZO4ymP4w9Xy0GNnwsCdLxC8QK9Ez5uTWwZgIMkTwwJYAsfoFdA3gDdeRyAAscZ2w3OjAesm9phxZAGoctWEOGa5NQP9aQ8lpdYDNYnlyqx7Pi62pwynb771V1b3+hP+qOHghVw571PrxKDHpqePXx7w+GcO+gr4//LyfZeP9eATj0AAAAAElFTkSuQmCC"
const geoImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAMAAAA7dZg3AAAAAXNSR0IB2cksfwAAAYNQTFRFAAAAALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+ALLJALLJeLk+eLk+eLk+eLk+ALLJALLJALLJeLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+eLk+Qu+5GQAAAIF0Uk5TAAY6fpeVezAEatf/CYjw/VD3CqhG4nz7oJ6M5xa+XfxXDqmiDKunEH/zcyRkIAUjRFkdHlo+IDB6xvf9mASW//PAeCw0qMsYK8Tv02zxBtXneRQCMovtVoT5hIhchuMSb2Nm+4IXQuveoHZSQOExA0ew9aQ/ARB0v/m3CBNRmUsP+0VCvAAAAXVJREFUeJxlkmdDwjAQQIOKAmXvKQ4cKOJAQUUMyhYEpG4ElaEs997+dLts2vK+NHevuVyuBeAfUU9vn7h/QAKESKQyjEImFUi5QokxKBVyrhGJVRiLSiziKLUG46BRI6PVYTx0WlbpDXxl0LPKaOIrk5FVZkyAmVUWobKwyipUVtS7jW9sqHu7g68cdnSxQSfXOIc40xge4apRF2++Y2jPOH/yYGLSTRv3lAsImfYQX0zmmekSzFDMXUnv7Nz8Aq18i0t+LzKB5ZXV4FqIVKF1GN7YjDAiGoMk8QSpEnEqiEVJk0wFifVWOkPvyqS3iTCYSgKQzRGr/E6ggNNn4YXdvX0ilcuCA+Jx6KMqK0xHx9TCVySSJ6AEYRmnDz09O2f+JbwMYQlUIKzWIjj3KnikVoWwAupk4XjFj4w/Q3aZrwNwcUm122i22p1Ou9VsUOHVNfHSze3dPRQQfnh8oio8v7xWueLtPfOB6n9+Fb8Zaj+/dO4P7VpTrDeIRg0AAAAASUVORK5CYII="
const platformImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAbCAMAAACz4aQdAAAAAXNSR0IB2cksfwAAAQVQTFRFAAAAtNZXqtBAqdA9qdA+i8JCfLtEfLtDgb5KqtBAp887p846p846p886icE+ebpAebpAerpAe7pCgL1Jq9FEqM88ps44h8A8eLk+ebk/fbtFqM88ps44ebk/f71Iqc8+ps45ebpAgr9Np887eLk/fbxFp846e7pCps45erpAeLk+stVT36JV7opN4ZtOl8lWisNY54pO6olO541RisNY9opX9YNO9YNO9YNO9YVRDrbfBLPdB7TeCrXeALLdA7PdDLbfArPdAbLdArPdArPdAbLdArLdBbTeBLPeDbbfAbLdArPe9opX9YNO9YNOAbLdALLdBLPeDbbfAbLdArPe9YNO9YVRCtScHAAAAFd0Uk5TAAMbKSsrKyQQQKDg/P////LJcRQJiv///+JCh/3qKUjzwgWm+C7lZf5+gBtP/1kbG8v/wQ07/0XFujTQnED/vyyx/9i4+diFgBXqgB2AI4CAQAt1QGJdC6r2awAAALpJREFUeJztzsUagmAQheGxuxWxuwsLGwU7sPX+L0X0+UFFYeXSd3MW32IGgKNQqtSIRovo9MAzGE1mC2K1IXaH0/Wobg/2wos/+fz3HghKdTwUBohEMcmOx+KQwGR6MgVpuY5nICvbc4DJ9jwUiqVSuSCoEIJqrU40AJok2YJv2mTnPv/+g97tifTf+4ASGb73Ec0wYxqZTJnZXHyfoRb84eWKWn/8J9k3LLvlZrc/8P142p+5ubBXgBuGy0hno1wzVAAAAABJRU5ErkJggg=="
const infoRussiaImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAwFBMVEUAAADh4eHT09PPz8+9vb3Q0NDQ0NDq6+vu7u/Nzc3Q0NDKysrAwMDa2trQ0NDQ0NDq6urW1tbPz8/k5OTe3t7X2drBwcHa2trHx8fT09Pc3Nzl5eXX19fS0tLc3Nza2tr////+/v78/Pzy8/T39/d0hZCczgXZ3d9ofIi/xsizvsHw8PGrtLj5+fqNnqjGztFmc3tIVl1SYWng4+WirLFebXR+jpfX6KeFlJ2y2jY8SlKXo6qOmJ/S6IzN5nvV38TT8TBtAAAAIHRSTlMA6LUmBh10/P0QlKYws1199cFs8dv6Sbk/hub2yZq7zMzSglAAAAG/SURBVHjabZLZeqJAEIULRHZREIwxyQwCPTT7jqgxef+3mtBsgeS/6f6qDodTBTAhHEWJNgxaEo8C/GS1Vfe8E1lW5PB7dbuCOYKm85Y5YvG6NnNZbzjSnrC4zfpb/8k2f2A/rae+Y/6CMyjWf+yxViR+6HtuV7A3XY5nbmgnd4RQE8dN7BMJz5L59D4fXyJc+25g23wSx0Wb9LRqDYK+H2Ncu0NCP2mP4BlAeO0MrBJjfB+HPVuk+CrAYU8KUYgRwthbrOPlAGJApCHyPz99hJPFMkSQyA4KlHxcrw8vrecriyRQian/fvn3xaVJjfnG/4JBBOH9oxU84iqZCww4EYFXdw6ocueCE9BRe+Fw+LheL2FeO3OB2oc0varx/SZP3cUHk2DLdVIP5VmGFn2T34JMDSOHeV6YCygZGBKiW1YetvfIK92hRDMACjcm8lLkcUGZ3dK+xikAIKhT8OKeplV2u2WdRaSSP0Z5OZsjgeGVVfZOnjnvj9DCsDtzBuc63clCDzvEWIzIAIF4WMu2tWMZmFB0+zzr27oCM1YiFYwulk2JK1giazS144OA31E0K8NvMPJBe3vTDvL3l/8HHPJn62dntSAAAAAASUVORK5CYII="
const yaImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMWE5LjAwMiA5LjAwMiAwIDAgMC02LjM2NiAxNS4zNjJjMS42MyAxLjYzIDUuNDY2IDMuOTg4IDUuNjkzIDYuNDY1LjAzNC4zNy4zMDMuNjczLjY3My42NzMuMzcgMCAuNjQtLjMwMy42NzMtLjY3My4yMjctMi40NzcgNC4wNi00LjgzMSA1LjY4OS02LjQ2QTkuMDAyIDkuMDAyIDAgMCAwIDEyIDF6IiBmaWxsPSIjRjQzIj48L3BhdGg+PHBhdGggZD0iTTEyIDEzLjA3OWEzLjA3OSAzLjA3OSAwIDEgMSAwLTYuMTU4IDMuMDc5IDMuMDc5IDAgMCAxIDAgNi4xNTh6IiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+"
const yaMapImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMWE5LjAwMiA5LjAwMiAwIDAgMC02LjM2NiAxNS4zNjJjMS42MyAxLjYzIDUuNDY2IDMuOTg4IDUuNjkzIDYuNDY1LjAzNC4zNy4zMDMuNjczLjY3My42NzMuMzcgMCAuNjQtLjMwMy42NzMtLjY3My4yMjctMi40NzcgNC4wNi00LjgzMSA1LjY4OS02LjQ2QTkuMDAyIDkuMDAyIDAgMCAwIDEyIDF6IiBmaWxsPSIjRkNENzU5Ij48L3BhdGg+PHBhdGggZD0iTTEyIDEzLjA3OWEzLjA3OSAzLjA3OSAwIDEgMSAwLTYuMTU4IDMuMDc5IDMuMDc5IDAgMCAxIDAgNi4xNTh6IiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+";

// Регулярки для поиска сискодов и координат
const firmRegex = /(?<=firm\/)[0-9]*/g
const geoRegex = /(?<=(geo|inside|platform|stationEntrance|station)\/)[0-9]*/g
const coordRegex = /(?<=\/|C|=)[0-9-]{1,3}\.[0-9]*/g

// Имена кнопочек и тут происходит создание через функцию createButton(Название кнопочки)
const fijiLink = createButton("link");
const fijiSysCode = createButton("fiji-syscode");
const irYouraGroup = createButtonGroup("ir-youra-group"); // Смежные кнопки IR и Youra
const rosreestrLink = createButton("rosreestr-link");
const yaLink = createYaGroup("ya-link"); // Смежные кнопки Ya и YaMap



// Функция main
function fijIR(url) {
    console.log('Processing URL:', url);
    
    let coord = url.match(coordRegex);
    let syscodeGeo = url.match(geoRegex);
    let syscodeFirm = url.match(firmRegex);

    console.log('Found coord:', coord);
    console.log('Found syscodeGeo:', syscodeGeo);
    console.log('Found syscodeFirm:', syscodeFirm);

    if (coord && coord.length > 4) {
        coord = coord.slice(-4);
    };

    if(coord){
    // Массив для ссылок перехода в Fiji, Кадастр и Яндекс по координатам, Яндекс можно выпилить. Сейчас создаётся группа с раскрывающимся списком
    linksCoord = [
        `<a href="fiji://view/lon=${coord[0]}&lat=${coord[1]}" title="Перейти в Fiji по координатам"><img width="32" height="32" src="${fijiImage}"></a>`,
        `<a href="https://yandex.ru/maps/?l=sat%2Cstv%2Csta&ll=${coord[0]}%2C${coord[1]}&z=18" title="Перейти в Ya по координатам" target="_blank"><img width="32" height="32" src="${yaImage}"></a>`,
        `<a href="https://кадастр.сайт/%D0%BA%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BA%D0%B0%D1%80%D1%82%D0%B0#ct=${coord[1]}&cg=${coord[0]}&zoom=17&layer=dgis" target="_blank" title="Перейти на rosreest-docs"><img width="32" height="32" src="https://xn--80aalw7afh.xn--80aswg/favicon.ico"></a>`
    ];
    

    let moveToFiji = linksCoord[0];
    let moveToRosreestr =  linksCoord[2];
    
    fijiLink.innerHTML = moveToFiji;
    rosreestrLink.innerHTML = moveToRosreestr;

    // Стили для кнопки Fiji
    const fijiLinkAnchor = fijiLink.querySelector('a');
    if (fijiLinkAnchor) {
        fijiLinkAnchor.style.cssText = `
            display: flex; 
            align-items: center; 
            justify-content: center; 
            width: 100%; 
            height: 100%; 
            text-decoration: none;
        `;
    }
    const fijiImg = fijiLink.querySelector('img');
    if (fijiImg) {
        fijiImg.style.cssText = `
            width: 32px; 
            height: 32px; 
            display: block;
        `;
    }

    // Стили для кнопки Яндекс
    const yaLinkAnchor = yaLink.querySelector('a');
    const yandexLinks = [
        `<a href="https://n.maps.yandex.ru/#!/?z=18&ll=${coord[0]}%2C${coord[1]}&l=nk%23sat" title="Перейти в Народную карту по координатам" target="_blank"><img width="32" height="32" src="${yaMapImage}"></a>`,
        `<a href="https://yandex.ru/maps/?l=sat%2Cstv%2Csta&ll=${coord[0]}%2C${coord[1]}&z=18" title="Перейти в Ya по координатам" target="_blank"><img width="32" height="32" src="${yaImage}"></a>`        
    ];

    if (yaLinkAnchor) {
        yaLinkAnchor.style.cssText = `
            display: flex; 
            align-items: center; 
            justify-content: center; 
            width: 100%; 
            height: 100%; 
            text-decoration: none;
        `;
    }
    const yaImg = yaLink.querySelector('img');

    if (yaImg) {
        yaImg.style.cssText = `
            width: 32px; 
            height: 32px; 
            display: block;
        `;
    }

    // Заполнение для группы Яндекс
    updateYaGroup(yaLink, yandexLinks);

    // Стили для кнопки Росреестр
    const rosreestrAnchor = rosreestrLink.querySelector('a');
    if (rosreestrAnchor) {
        rosreestrAnchor.style.cssText = `
            display: flex; 
            align-items: center; 
            justify-content: center; 
            width: 100%; 
            height: 100%; 
            text-decoration: none;
        `;
    }
    const rosreestrImg = rosreestrLink.querySelector('img');

    if (rosreestrImg) {
        rosreestrImg.style.cssText = `
            width: 32px; 
            height: 32px; 
            display: block;
        `;
    }    
}

if (syscodeGeo) {
    // Массив для ссылок перехода в Fiji по Сискоду
    linksSyscodeGeo = [
        `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="26" height="32" id="img1" href="${geoImage}"/></defs><use id="Background" href="#img1" x="3" y="0"/></svg></a>`,
        `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду остановки"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="31" height="27" id="img1" href="${platformImage}"/></defs><style></style><use id="Background" href="#img1" x="1" y="2"/></svg></a>`,
        `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду входа в метро"><svg width="32px" height="32px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="metro_red_88" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="metro/88/bounding" fill="#FF0000" stroke="#FFFFFF"><circle id="Oval" cx="44" cy="44" r="43.5"></circle></g><polygon id="Page-1" fill="#FFFFFF" points="57 17 44 42 31 17 15 61 28 61 34 44 44 64 54 44 60 61 73 61"></polygon></g></svg></a>`,
        `<a href="fiji://editBySysCode/${syscodeGeo}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a>`,
        `<a href="fiji://editBySysCode/${syscodeGeo[0]}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a><a href="fiji://editBySysCode/${syscodeGeo[1]}" title="Перейти в Fiji по сискоду"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="26" height="32" id="img1" href=${geoImage}/></defs><use id="Background" href="#img1" x="3" y="0"/></svg></a>`,
        `<a href="fiji://editBySysCode/${syscodeGeo[0]}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a><a href="fiji://editBySysCode/${syscodeGeo[1]}" title="Перейти в Fiji по сискоду остановки"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><defs><image  width="31" height="27" id="img1" href=${platformImage}/></defs><style></style><use id="Background" href="#img1" x="1" y="2"/></svg></a>`,
        `<a href="fiji://editBySysCode/${syscodeGeo[0]}" title="Перейти в Fiji по сискоду здания"><svg width="32px" height="32px" viewBox="0 0 60.031 60.031" id="home" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1 {fill: #78B93E;}.cls-1, .cls-2 {fill-rule: evenodd;}.cls-2 {fill: #00B2DD;}</style></defs><path class="cls-1" d="M81.16,124.809l17.421-17.433a2,2,0,0,1,2.83,0l17.421,17.433A4.015,4.015,0,0,1,120,127.642v18.365a4,4,0,0,1-4,4H106V138a4,4,0,0,0-4-4H98a4,4,0,0,0-4,4v12.012H83.99a4,4,0,0,1-4-4V127.642A4.01,4.01,0,0,1,81.16,124.809Z" data-name="home" id="home-2" transform="translate(-70 -89.969)"/><path class="cls-2" d="M128.837,122.807a4,4,0,0,1-5.659,0l-21.767-21.784a2,2,0,0,0-2.83,0L76.814,122.807a4,4,0,0,1-5.659-5.663L97.167,91.112a4,4,0,0,1,5.659,0l26.011,26.032A4.006,4.006,0,0,1,128.837,122.807Z" data-name="home" id="home-3" transform="translate(-70 -89.969)"/></svg></a><a href="fiji://editBySysCode/${syscodeGeo[1]}" title="Перейти в Fiji по сискоду входа в метро"><svg width="32px" height="32px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="metro_red_88" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="metro/88/bounding" fill="#FF0000" stroke="#FFFFFF"><circle id="Oval" cx="44" cy="44" r="43.5"></circle></g><polygon id="Page-1" fill="#FFFFFF" points="57 17 44 42 31 17 15 61 28 61 34 44 44 64 54 44 60 61 73 61"></polygon></g></svg></a>`
    ];

    let moveToFijiBySyscode;
    if (url.match(/geo/g)) {
        moveToFijiBySyscode = linksSyscodeGeo[0];;
    };
    if ((url.match(/platform/g)) || (url.match(/station/g))) {
        moveToFijiBySyscode = linksSyscodeGeo[1];
    };
    if (url.match(/stationEntrance/g)) {
        moveToFijiBySyscode = linksSyscodeGeo[2];
    };
    if (url.match(/inside\//g)) {
        moveToFijiBySyscode = linksSyscodeGeo[3];
        if (url.match(/geo/g) && syscodeGeo[0] != syscodeGeo[1]) {
            moveToFijiBySyscode = linksSyscodeGeo[4];
        };
        if (url.match(/platform/g)) {
            moveToFijiBySyscode = linksSyscodeGeo[5];
        };
        if (url.match(/stationEntrance/g)) {
            moveToFijiBySyscode = linksSyscodeGeo[6];
        };
    };
    fijiSysCode.innerHTML = moveToFijiBySyscode;

    // Стили для кнопки Fiji по сискоду
    const fijiSysCodeAnchor = fijiSysCode.querySelector('a');
    if (fijiSysCodeAnchor) {
        fijiSysCodeAnchor.style.cssText = `
            display: flex; 
            align-items: center; 
            justify-content: center; 
            width: 100%; 
            height: 100%; 
            text-decoration: none;
        `;
    }
    const fijiSysCodeSvg = fijiSysCode.querySelector('svg');
    if (fijiSysCodeSvg) {
        fijiSysCodeSvg.style.cssText = `
            width: 32px; 
            height: 32px; 
            display: block;
        `;
    }
}
    
    if (syscodeFirm) {
    console.log('syscodeFirm found:', syscodeFirm);
    // Массив для ссылок перехода в IR и YouRa
    linksSyscodeFirm = [
        `<a href="dgis://editcard/id=${syscodeFirm}&sV=true" title="Перейти в IR"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="32" height="32"><g transform="matrix(1 0 0 1 0 0)"><image  x="0" y="0" xlink:href="${infoRussiaImage}" preserveAspectRatio="none" width="32" height="32"/></g></svg></a>`,
        `<a href="https://youra.2gis.ru/card/${syscodeFirm}" title="Перейти в YouRa" target="_blank"><img width="32" height="32" src="${youraImage}"></a>`
    ];
    
    console.log('Links array:', linksSyscodeFirm);
    
    // Заполняем группу IR и Youra
    updateButtonGroup(irYouraGroup, linksSyscodeFirm);
    
};

    const visible = [];
    if (coord) visible.push('link', 'ya-link', 'rosreestr-link');
    if (syscodeGeo) visible.push('fiji-syscode');
    if (syscodeFirm) visible.push('ir-youra-group');

    console.log('Will show buttons:', visible);

    showButtons(visible);
}



// Показ кнопочек
function showButtons(visibleClasses) {
    const allButtons = ['link', 'ya-link', 'rosreestr-link', 'fiji-syscode', 'ir-youra-group'];
    let hasVisible = false;

    allButtons.forEach(className => {
        const btn = document.querySelector('.' + className);
        if (btn) {
            const shouldShow = visibleClasses.includes(className);
            btn.style.display = shouldShow ? 'flex' : 'none';
            if (shouldShow) hasVisible = true;
            
            // Обработка группы Яндекс
            if (shouldShow && className === 'ya-link') {
                // Показ основной кнопки
                const mainButtonYa = btn.querySelector('.main-button-ya');
                if (mainButtonYa) {
                    mainButtonYa.style.display = 'flex';
                    mainButtonYa.style.backgroundColor = 'transparent';
                }
                
                // Скрываем выпадающую кнопку при повторном показе
                const dropdownButtonYaMap = btn.querySelector('.dropdown-button-yamap');
                const arrowButtonYa = btn.querySelector('.arrow-button-ya');
                if (dropdownButtonYaMap) {
                    dropdownButtonYaMap.style.display = 'none';
                    dropdownButtonYaMap.style.height = '0';
                    dropdownButtonYaMap.style.opacity = '0';
                }
                if (arrowButtonYa) {
                    arrowButtonYa.style.display = 'none';
                    arrowButtonYa.innerHTML = '▼';
                    arrowButtonYa.style.top = '40px';
                    arrowButtonYa.style.bottom = '84px';
                    arrowButtonYa.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                }
                
                // Сброс состояния
                btn._isDropdownVisible = false;
            }

            // Обработка группы IR/Youra
            if (shouldShow && className === 'ir-youra-group') {
                // Показ основной кнопки
                const mainButton = btn.querySelector('.main-button');
                if (mainButton) {
                    mainButton.style.display = 'flex';
                    mainButton.style.backgroundColor = 'transparent';
                }
                
                // Скрываем выпадающую кнопку при повторном показе
                const dropdownButton = btn.querySelector('.dropdown-button');
                const arrowButton = btn.querySelector('.arrow-button');
                if (dropdownButton) {
                    dropdownButton.style.display = 'none';
                    dropdownButton.style.height = '0';
                    dropdownButton.style.opacity = '0';
                }
                if (arrowButton) {
                    arrowButton.style.display = 'none';
                    arrowButton.innerHTML = '▼';
                    arrowButton.style.top = '40px';
                    arrowButton.style.bottom = '84px';
                    arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                }
                
                // Сброс состояния
                btn._isDropdownVisible = false;
            }
        }
    });

    const panel = document.querySelector('.link-under-the-coord');
    if (panel) {
        panel.style.display = hasVisible ? 'flex' : 'none';
        panel.style.float = 'right';
        panel.style.marginRight = hasVisible ? '12px' : '';
        
        // Принудительный показ панели, если есть видимые кнопки
        if (hasVisible) {
            panel.style.display = 'flex';
        }
    }
    
    console.log('Visible buttons:', visibleClasses);
    console.log('Panel visible:', hasVisible);
}



// Создание панели для кнопочек
function waitForElement(selectors, callback) {
    // Поддерживаем как массив селекторов, так и строку для обратной совместимости
    const selectorArray = Array.isArray(selectors) ? selectors : [selectors];
    
    const observer = new MutationObserver(() => {
        for (const selector of selectorArray) {
            const element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                callback(element);
                return;
            }
        }
    });
    
    // Проверяем сразу при запуске (на случай если элемент уже есть)
    for (const selector of selectorArray) {
        const element = document.querySelector(selector);
        if (element) {
            callback(element);
            return;
        }
    }
    
    observer.observe(document.body, { childList: true, subtree: true });
}


//Поиск элемента в котором содержатся пробки для привязки и размещения в несколькиз уровнях выше панели с кнопками
waitForElement('a[href$="?traffic"]', (trafficLink) => {
    const trafficButton = trafficLink.querySelector('button');
    const container = trafficButton?.parentElement?.parentElement?.parentElement;
    
    if (container && !document.querySelector('.link-under-the-coord')) {
        const linksPanel = document.createElement('div');
        linksPanel.className = "link-under-the-coord";
        linksPanel.style.cssText = "display:none; float:right; margin-right:12px;";
        
        linksPanel.append(fijiLink, yaLink, rosreestrLink, fijiSysCode, irYouraGroup);
        container.append(linksPanel);
    }
});



// Создание самих кнопочек
function createButton(className) {
    const button = document.createElement('div');
    button.className = className;
    button.style.cssText = `
        width: 40px;
        height: 40px;
        border: none;
        overflow: hidden;
        padding: 0;
        margin-left: 2px;
        margin-right: 2px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(38,38,38,0.5);
        box-sizing: border-box;
        background: #ffffff;
        color: #262626;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    button.onmouseover = () => button.style.backgroundColor = '#F0F8FF';
    button.onmouseout = () => button.style.backgroundColor = 'white';

    return button;
}



// Создание выпадающей группы кнопок Ya/YaMap
function createYaGroup(className) {
    const group = document.createElement('div');
    group.className = className;
    group.style.cssText = `
        display: flex; 
        width: 40px; 
        height: 40px; 
        border: none;
        overflow: visible;
        margin-left: 2px; 
        margin-right: 2px; 
        border-radius: 4px; 
        box-shadow: 0 1px 3px rgba(38,38,38,0.5); 
        box-sizing: border-box; 
        background: #ffffff; 
        color: #262626; 
        float: left;
        align-items: center;
        justify-content: center;
        position: relative;
    `;
    
    // Основная кнопка Ya 
    const mainButtonYa = document.createElement('div');
    mainButtonYa.className = 'main-button-ya';
    mainButtonYa.style.cssText = `
        width: 40px; 
        height: 40px; 
        padding: 0;
        display: flex; 
        align-items: center; 
        justify-content: center;
        border-radius: 4px;
        overflow: hidden;
        border: none;
        background: transparent;
        cursor: pointer;
        transition: background-color 0.2s ease;
    `;
    
    // Кнопка-стрелочка
    const arrowButtonYa = document.createElement('div');
    arrowButtonYa.className = 'arrow-button-ya';
    arrowButtonYa.style.cssText = `
        position: absolute;
        top: 40px;
        bottom: 40px;
        width: 38px;
        height: 15px;
        background: #ffffff;
        border: 1px solid #ccc;
        border-radius: 4px;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 30;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        transition: all 0.2s ease;
        -moz-border-radius:0px 0px 45px 45px;
        -webkit-border-radius:0px 0px 45px 45px;
    `;
    arrowButtonYa.innerHTML = '▼';
    arrowButtonYa.style.fontSize = '8px';
    arrowButtonYa.style.lineHeight = '8px';
    
    // Выпадающая кнопка YaMap
    const dropdownButtonYaMap = document.createElement('div');
    dropdownButtonYaMap.className = 'dropdown-button-yamap';
    dropdownButtonYaMap.style.cssText = `
        position: absolute;
        top: 45px;
        width: 40px;
        height: 0; /* Начинаем с высоты 0 для анимации */
        background: #ffffff;
        border: none;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 20;
        cursor: pointer;
        overflow: hidden;
        transition: height 0.3s ease, opacity 0.2s ease;
        opacity: 0;
    `;

    // Добавление элементов в группу
    group.appendChild(mainButtonYa);
    group.appendChild(arrowButtonYa);
    group.appendChild(dropdownButtonYaMap);
    
    // Обработчик событий
    let isDropdownVisible = false;
    
    // Показ стрелочки при наведении на основную кнопку
    mainButtonYa.addEventListener('mouseenter', () => {
        arrowButtonYa.style.display = 'flex';
        mainButtonYa.style.backgroundColor = '#F0F8FF';
    });
    
    mainButtonYa.addEventListener('mouseleave', () => {
        if (!isDropdownVisible) {
            mainButtonYa.style.backgroundColor = 'transparent';
        }
    });
    
    // Скрытие стрелочки, если не наведено ни на основную кнопку, ни на стрелочку
    group.addEventListener('mouseleave', () => {
        if (!isDropdownVisible) {
            arrowButtonYa.style.display = 'none';
            mainButtonYa.style.backgroundColor = 'transparent';
        }
    });
    
    // Обработчик для стрелочки
    arrowButtonYa.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем всплытие
        isDropdownVisible = !isDropdownVisible;
        
        if (isDropdownVisible) {
            // Ну это анимация
            dropdownButtonYaMap.style.display = 'flex';
            setTimeout(() => {
                dropdownButtonYaMap.style.height = '40px';
                dropdownButtonYaMap.style.opacity = '1';
            }, 10);
            
            // Смена направления стрелочки
            arrowButtonYa.innerHTML = '▲';
            arrowButtonYa.style.top = '87px';
            arrowButtonYa.style.bottom = '10px'; // Перемещаем стрелочку под выпадающую кнопку
            arrowButtonYa.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Замена цвета кнопки при открытом состоянии
            mainButtonYa.style.backgroundColor = '#F0F8FF';
        } else {
            // Скрытие, тоже с анимацией
            dropdownButtonYaMap.style.height = '0';
            dropdownButtonYaMap.style.opacity = '0';
            setTimeout(() => {
                if (!isDropdownVisible) {
                    dropdownButtonYaMap.style.display = 'none';
                }
            }, 300);
            
            // Возврат стрелочки на место
            arrowButtonYa.innerHTML = '▼';
            arrowButtonYa.style.top = '40px';
            arrowButtonYa.style.bottom = '10px';
            arrowButtonYa.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Возврат цвета кнопки
            if (!group.matches(':hover')) {
                mainButtonYa.style.backgroundColor = 'transparent';
            }
        }
        
        // Показываем стрелочки при активном дропдауне
        arrowButtonYa.style.display = 'flex';
    });
    
    // Закрытие при клике на выпадающую кнопку
    dropdownButtonYaMap.addEventListener('click', () => {
        // Закрытие меню после клика на выпадающую кнопку
        setTimeout(() => {
            isDropdownVisible = false;
            dropdownButtonYaMap.style.height = '0';
            dropdownButtonYaMap.style.opacity = '0';
            setTimeout(() => {
                dropdownButtonYaMap.style.display = 'none';
            }, 300);
            
            arrowButtonYa.innerHTML = '▼';
            arrowButtonYa.style.top = '40px';
            arrowButtonYa.style.bottom = '10px';
            arrowButtonYa.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            if (!group.matches(':hover')) {
                arrowButtonYa.style.display = 'none';
                mainButtonYa.style.backgroundColor = 'transparent';
            }
        }, 100);
    });
    
    // Скрытие выпадающей кнопки при клике вне группы
    document.addEventListener('click', (e) => {
        if (!group.contains(e.target) && isDropdownVisible) {
            isDropdownVisible = false;
            dropdownButtonYaMap.style.height = '0';
            dropdownButtonYaMap.style.opacity = '0';
            setTimeout(() => {
                dropdownButtonYaMap.style.display = 'none';
            }, 300);
            
            arrowButtonYa.innerHTML = '▼';
            arrowButtonYa.style.top = '40px';
            arrowButtonYa.style.bottom = '10px';
            arrowButtonYa.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Скрытие стрелочки, если курсор не над группой
            if (!group.matches(':hover')) {
                arrowButtonYa.style.display = 'none';
                mainButtonYa.style.backgroundColor = 'transparent';
            }
        }
    });
    
    // Обработчик наведения на стрелочку
    arrowButtonYa.addEventListener('mouseenter', () => {
        arrowButtonYa.style.backgroundColor = '#F0F8FF';
    });
    
    arrowButtonYa.addEventListener('mouseleave', () => {
        arrowButtonYa.style.backgroundColor = '#ffffff';
    });
    
    return group;
}



// Обновление содержимого выпадающей группы кнопок Ya/YaMap
function updateYaGroup(group, links) {
    console.log('Updating button group with links:', links);
    
    const mainButtonYa = group.querySelector('.main-button-ya');
    const dropdownButtonYaMap = group.querySelector('.dropdown-button-yamap');
    const arrowButtonYa = group.querySelector('.arrow-button-ya');
    
    // основная кнопка - Ya, выпадающая - YaMap
    if (links[1] && mainButtonYa) { 
        mainButtonYa.innerHTML = links[1];
        
        // Находим ссылку внутри и применяем стили
        const mainLink = mainButtonYa.querySelector('a');
        if (mainLink) {
            mainLink.style.cssText = `
                display: flex; 
                align-items: center; 
                justify-content: center; 
                width: 100%; 
                height: 100%; 
                text-decoration: none;
                padding: 0;
                border: none;
                transition: opacity 0.2s ease;
            `;
            
            mainLink.addEventListener('mouseenter', () => {
                mainLink.style.opacity = '1';
                mainLink.style.backgroundColor = '#F0F8FF';
            });
            
            mainLink.addEventListener('mouseleave', () => {
                mainLink.style.opacity = '1';
                mainLink.style.backgroundColor = '#ffffff';
            });
        }
        
        // Находим изображение/иконку внутри ссылки
        const mainImg = mainButtonYa.querySelector('img, svg');
        if (mainImg) {
            mainImg.style.cssText = `
                width: 32px; 
                height: 32px; 
                display: block;
                margin: 0;
                border: none;
                transition: transform 0.2s ease;
            `;
            
            mainButtonYa.addEventListener('mouseenter', () => {
                mainImg.style.transform = 'scale(1)';
            });
            
            mainButtonYa.addEventListener('mouseleave', () => {
                mainImg.style.transform = 'scale(1)';
            });
        }
    }
    
    if (links[0] && dropdownButtonYaMap) {
        dropdownButtonYaMap.innerHTML = links[0];
        
        // Находим ссылку внутри и применяем стили
        const dropdownLink = dropdownButtonYaMap.querySelector('a');
        if (dropdownLink) {
            dropdownLink.style.cssText = `
                display: flex; 
                align-items: center; 
                justify-content: center; 
                width: 100%; 
                height: 100%; 
                text-decoration: none;
                padding: 0;
                border: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            // Анимируем появление ссылки после появления контейнера
            setTimeout(() => {
                dropdownLink.style.opacity = '1';
            }, 150);
            
            dropdownLink.addEventListener('mouseenter', () => {
                dropdownLink.style.opacity = '1';
                dropdownLink.style.backgroundColor = '#F0F8FF';
            });
            
            dropdownLink.addEventListener('mouseleave', () => {
                dropdownLink.style.opacity = '1';
                dropdownLink.style.backgroundColor = '#ffffff';
            });
        }
        
        // Находим изображение/иконку внутри ссылки
        const dropdownImg = dropdownButtonYaMap.querySelector('img, svg');
        if (dropdownImg) {
            dropdownImg.style.cssText = `
                width: 32px; 
                height: 32px; 
                display: block;
                margin: 0;
                border: none;
                transition: transform 0.2s ease;
            `;
            
            dropdownButtonYaMap.addEventListener('mouseenter', () => {
                dropdownImg.style.transform = 'scale(1)';
            });
            
            dropdownButtonYaMap.addEventListener('mouseleave', () => {
                dropdownImg.style.transform = 'scale(1)';
            });
        }
    }
    
    // Сбрасываем состояние стрелочки при обновлении
    if (arrowButtonYa) {
        arrowButtonYa.style.top = '40px';
        arrowButtonYa.style.bottom = '84px';
        arrowButtonYa.innerHTML = '▼';
        arrowButtonYa.style.display = 'none';
    }
    
    // Сбрасываем состояние выпадающей кнопки
    dropdownButtonYaMap.style.height = '0';
    dropdownButtonYaMap.style.opacity = '0';
    dropdownButtonYaMap.style.display = 'none';
    
    group._isDropdownVisible = false;
    group.style.display = 'flex';
}



// Создание выпадающей группы кнопок IR/Youra
function createButtonGroup(className) {
    const group = document.createElement('div');
    group.className = className;
    group.style.cssText = `
        display: flex; 
        width: 40px; 
        height: 40px; 
        border: none;
        overflow: visible;
        margin-left: 2px; 
        margin-right: 2px; 
        border-radius: 4px; 
        box-shadow: 0 1px 3px rgba(38,38,38,0.5); 
        box-sizing: border-box; 
        background: #ffffff; 
        color: #262626; 
        float: left;
        align-items: center;
        justify-content: center;
        position: relative;
    `;
    
    // Основная кнопка Youra
    const mainButton = document.createElement('div');
    mainButton.className = 'main-button';
    mainButton.style.cssText = `
        width: 40px; 
        height: 40px; 
        padding: 0;
        display: flex; 
        align-items: center; 
        justify-content: center;
        border-radius: 4px;
        overflow: hidden;
        border: none;
        background: transparent;
        cursor: pointer;
        transition: background-color 0.2s ease;
    `;
    
    // Кнопка-стрелочка
    const arrowButton = document.createElement('div');
    arrowButton.className = 'arrow-button';
    arrowButton.style.cssText = `
        position: absolute;
        top: 40px;
        bottom: 40px;
        width: 38px;
        height: 15px;
        background: #ffffff;
        border: 1px solid #ccc;
        border-radius: 4px;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 30;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        transition: all 0.2s ease;
        -moz-border-radius:0px 0px 45px 45px;
        -webkit-border-radius:0px 0px 45px 45px;
    `;
    arrowButton.innerHTML = '▼';
    arrowButton.style.fontSize = '8px';
    arrowButton.style.lineHeight = '8px';
    
    // Выпадающая кнопка IR
    const dropdownButton = document.createElement('div');
    dropdownButton.className = 'dropdown-button';
    dropdownButton.style.cssText = `
        position: absolute;
        top: 45px;
        width: 40px;
        height: 0; /* Начинаем с высоты 0 для анимации */
        background: #ffffff;
        border: none;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 20;
        cursor: pointer;
        overflow: hidden;
        transition: height 0.3s ease, opacity 0.2s ease;
        opacity: 0;
    `;

    // Добавление элементов в группу
    group.appendChild(mainButton);
    group.appendChild(arrowButton);
    group.appendChild(dropdownButton);
    
    // Обработчик событий
    let isDropdownVisible = false;
    
    // Показ стрелочки при наведении на основную кнопку
    mainButton.addEventListener('mouseenter', () => {
        arrowButton.style.display = 'flex';
        mainButton.style.backgroundColor = '#F0F8FF';
    });
    
    mainButton.addEventListener('mouseleave', () => {
        if (!isDropdownVisible) {
            mainButton.style.backgroundColor = 'transparent';
        }
    });
    
    // Скрытие стрелочки, если не наведено ни на основную кнопку, ни на стрелочку
    group.addEventListener('mouseleave', () => {
        if (!isDropdownVisible) {
            arrowButton.style.display = 'none';
            mainButton.style.backgroundColor = 'transparent';
        }
    });
    
    // Обработчик для стрелочки
    arrowButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем всплытие
        isDropdownVisible = !isDropdownVisible;
        
        if (isDropdownVisible) {
            // Ну это анимация
            dropdownButton.style.display = 'flex';
            setTimeout(() => {
                dropdownButton.style.height = '40px';
                dropdownButton.style.opacity = '1';
            }, 10);
            
            // Замена направления стрелочки
            arrowButton.innerHTML = '▲';
            arrowButton.style.top = '87px'; // Перемещаем стрелочку под выпадающую кнопку
            arrowButton.style.bottom = '10px'; 
            arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Замена цвета кнопки при открытом состоянии
            mainButton.style.backgroundColor = '#F0F8FF';
        } else {
            // Скрываем с анимацией
            dropdownButton.style.height = '0';
            dropdownButton.style.opacity = '0';
            setTimeout(() => {
                if (!isDropdownVisible) {
                    dropdownButton.style.display = 'none';
                }
            }, 300);
            
            // Возврат стрелочки на место
            arrowButton.innerHTML = '▼';
            arrowButton.style.top = '40px';
            arrowButton.style.bottom = '10px';
            arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Возврат цвета кнопки
            if (!group.matches(':hover')) {
                mainButton.style.backgroundColor = 'transparent';
            }
        }
        
        // Показ стрелочки при активном дропдауне
        arrowButton.style.display = 'flex';
    });
    
    // Закрытие при клике на выпадающую кнопку
    dropdownButton.addEventListener('click', () => {
        // Скрытие меню после клика на выпадающую кнопку
        setTimeout(() => {
            isDropdownVisible = false;
            dropdownButton.style.height = '0';
            dropdownButton.style.opacity = '0';
            setTimeout(() => {
                dropdownButton.style.display = 'none';
            }, 300);
            
            arrowButton.innerHTML = '▼';
            arrowButton.style.top = '40px';
            arrowButton.style.bottom = '10px';
            arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            if (!group.matches(':hover')) {
                arrowButton.style.display = 'none';
                mainButton.style.backgroundColor = 'transparent';
            }
        }, 100);
    });
    
    // Скрытие выпадающей кнопки при клике вне группы
    document.addEventListener('click', (e) => {
        if (!group.contains(e.target) && isDropdownVisible) {
            isDropdownVisible = false;
            dropdownButton.style.height = '0';
            dropdownButton.style.opacity = '0';
            setTimeout(() => {
                dropdownButton.style.display = 'none';
            }, 300);
            
            arrowButton.innerHTML = '▼';
            arrowButton.style.top = '40px';
            arrowButton.style.bottom = '10px';
            arrowButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            
            // Скрытие стрелочки, если курсор не над группой
            if (!group.matches(':hover')) {
                arrowButton.style.display = 'none';
                mainButton.style.backgroundColor = 'transparent';
            }
        }
    });
    
    // Обработчик наведения на стрелочку
    arrowButton.addEventListener('mouseenter', () => {
        arrowButton.style.backgroundColor = '#F0F8FF';
    });
    
    arrowButton.addEventListener('mouseleave', () => {
        arrowButton.style.backgroundColor = '#ffffff';
    });
    
    return group;
}



// Обновление содержимого выпадающей группы кнопок IR/Youra
function updateButtonGroup(group, links) {
    console.log('Updating button group with links:', links);
    
    const mainButton = group.querySelector('.main-button');
    const dropdownButton = group.querySelector('.dropdown-button');
    const arrowButton = group.querySelector('.arrow-button');
    
    // основная кнопка - Youra, выпадающая - IR
    if (links[1] && mainButton) { 
        mainButton.innerHTML = links[1];
        
        // Находим ссылку внутри и применяем стили
        const mainLink = mainButton.querySelector('a');
        if (mainLink) {
            mainLink.style.cssText = `
                display: flex; 
                align-items: center; 
                justify-content: center; 
                width: 100%; 
                height: 100%; 
                text-decoration: none;
                padding: 0;
                border: none;
                transition: opacity 0.2s ease;
            `;
            
            mainLink.addEventListener('mouseenter', () => {
                mainLink.style.opacity = '1';
                mainLink.style.backgroundColor = '#F0F8FF';
            });
            
            mainLink.addEventListener('mouseleave', () => {
                mainLink.style.opacity = '1';
                mainLink.style.backgroundColor = '#ffffff';
            });
        }
        
        // Находим изображение/иконку внутри ссылки
        const mainImg = mainButton.querySelector('img, svg');
        if (mainImg) {
            mainImg.style.cssText = `
                width: 32px; 
                height: 32px; 
                display: block;
                margin: 0;
                border: none;
                transition: transform 0.2s ease;
            `;
            
            mainButton.addEventListener('mouseenter', () => {
                mainImg.style.transform = 'scale(1)';
            });
            
            mainButton.addEventListener('mouseleave', () => {
                mainImg.style.transform = 'scale(1)';
            });
        }
    }
    
    if (links[0] && dropdownButton) { 
        dropdownButton.innerHTML = links[0];
        
        // Находим ссылку внутри и применяем стили
        const dropdownLink = dropdownButton.querySelector('a');
        if (dropdownLink) {
            dropdownLink.style.cssText = `
                display: flex; 
                align-items: center; 
                justify-content: center; 
                width: 100%; 
                height: 100%; 
                text-decoration: none;
                padding: 0;
                border: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            // Анимируем появление ссылки после появления контейнера
            setTimeout(() => {
                dropdownLink.style.opacity = '1';
            }, 150);
            
            dropdownLink.addEventListener('mouseenter', () => {
                dropdownLink.style.opacity = '1';
                dropdownLink.style.backgroundColor = '#F0F8FF';
            });
            
            dropdownLink.addEventListener('mouseleave', () => {
                dropdownLink.style.opacity = '1';
                dropdownLink.style.backgroundColor = '#ffffff';
            });
        }
        
        // Находим изображение/иконку внутри ссылки
        const dropdownImg = dropdownButton.querySelector('img, svg');
        if (dropdownImg) {
            dropdownImg.style.cssText = `
                width: 32px; 
                height: 32px; 
                display: block;
                margin: 0;
                border: none;
                transition: transform 0.2s ease;
            `;
            
            dropdownButton.addEventListener('mouseenter', () => {
                dropdownImg.style.transform = 'scale(1)';
            });
            
            dropdownButton.addEventListener('mouseleave', () => {
                dropdownImg.style.transform = 'scale(1)';
            });
        }
    }
    
    // Сброс состояния стрелочки при обновлении
    if (arrowButton) {
        arrowButton.style.top = '40px';
        arrowButton.style.bottom = '84px';
        arrowButton.innerHTML = '▼';
        arrowButton.style.display = 'none';
    }
    
    // Сброс состояния выпадающей кнопки
    dropdownButton.style.height = '0';
    dropdownButton.style.opacity = '0';
    dropdownButton.style.display = 'none';
    
    group._isDropdownVisible = false;
    group.style.display = 'flex';
}



// Прослушка обновления ссылки
function hrefHandler() {
    let currentHref = window.location.href;
    let firstOpen = true;

    this.detect = function () {
        const newUrl = window.location.href;
        if (newUrl !== currentHref || firstOpen) {
            firstOpen = false;
            currentHref = newUrl;
            fijIR(newUrl);
        }
    };

    this.Check = setInterval(this.detect.bind(this), 500);
}


const hrefDetection = new hrefHandler();
