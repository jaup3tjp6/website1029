// 漢堡按鈕和菜單
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

// 點擊漢堡按鈕切換菜單
hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// 切換星球佈局
function toggleLayout() {
  const planetMap = document.getElementById('planet-map');
  if (planetMap.classList.contains('layout-1')) {
    planetMap.classList.replace('layout-1', 'layout-3'); // 切換到 layout-3
  } else {
    planetMap.classList.replace('layout-3', 'layout-1'); // 切換回 layout-1
  }
}

// 顯示星球介紹
function showPlanetInfo(planetName) {
  const planetInfoImage = document.getElementById('planet-info-image');
  let imagePath = '';

  // 根據星球名稱設定圖片路徑
  switch (planetName) {
    case 'Planet1':
      imagePath = 'img/介紹版/1.png';
      break;
    case 'Planet2':
      imagePath = 'img/介紹版/2.png';
      break;
    case 'Planet3':
      imagePath = 'img/介紹版/3.png';
      break;
    case 'Planet4':
      imagePath = 'img/介紹版/4.png';
      break;
    case 'Planet5':
      imagePath = 'img/介紹版/5.png';
      break;
    case 'Planet6':
      imagePath = 'img/介紹版/6.png';
      break;
    case 'Planet7':
      imagePath = 'img/介紹版/7.png';
      break;
    case 'Planet8':
      imagePath = 'img/介紹版/8.png';
      break;
    case 'Planet9':
      imagePath = 'img/介紹版/9.png';
      break;
    case 'Planet10':
      imagePath = 'img/介紹版/10.png';
      break;
    case 'Planet11':
      imagePath = 'img/介紹版/11.png';
      break;
    case 'Planet12':
      imagePath = 'img/介紹版/12.png';
      break;
    case 'Planet13':
      imagePath = 'img/介紹版/13.png';
      break;
    default:
      imagePath = 'img/介紹版/default.png'; // 若星球無對應圖片
  }

  planetInfoImage.src = imagePath;

  // 顯示圖片
  const planetInfo = document.getElementById('planet-info');
  planetInfo.style.display = 'flex';

  // 移除所有星球的 clicked 樣式
  const planets = document.querySelectorAll('.planet');
  planets.forEach(planet => planet.classList.remove('clicked'));

  // 為當前點擊的星球加上 clicked 樣式
  const planet = document.querySelector(`[data-name="${planetName}"]`);
  if (planet) {
    planet.classList.add('clicked');
  }
}

// 關閉圖片顯示
function closePlanetInfo() {
  const planetInfo = document.getElementById('planet-info');
  planetInfo.style.display = 'none';

  // 移除所有星球的 clicked 樣式
  const planets = document.querySelectorAll('.planet');
  planets.forEach(planet => planet.classList.remove('clicked'));
}

// 確保菜單在點擊外部時自動關閉
document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// 漢堡內容彈窗
function openInfoBox(contentType) {
  const infoBox = document.getElementById('infoBox');
  const infoText = document.getElementById('infoText');

  // 設定彈窗內容
  if (contentType === 'introduction') {
    infoText.textContent = '探索這片神秘的星球地圖，踏上未知的冒險旅程！在這裡，每顆星球都代表著一段精彩的故事與傳奇，等待著你去發現。從深淵之光的璀璨景色到龍的曙光的壯麗風采，每個角落都蘊藏著無窮的驚喜。隨著探索的深入，你將解鎖各式各樣的秘密，了解更多關於星球的過去、現在與未來。這張地圖將帶你穿越時間和空間，體驗不一樣的奇幻世界。';
  } else if (contentType === 'socialMedia') {
    infoText.textContent = '在此加入相關社群媒體的連結或介紹。';
  } else if (contentType === 'notes') {
    infoText.textContent = '這裡可以顯示使用地圖或注意的相關提示。';
  }

  // 顯示資訊框，使用 flex
  infoBox.style.display = 'flex';
}

function closeInfoBox() {
  const infoBox = document.getElementById('infoBox');
  infoBox.style.display = 'none';
}
