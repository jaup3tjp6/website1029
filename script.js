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
  const planetInfoText = document.getElementById('planet-info-text');
  let infoContent = '';

  // 根據星球名稱設定介紹內容
  switch (planetName) {
      case 'Planet1':
          infoContent = '深淵之光：一個神秘的星球，擁有無盡的深淵和奇幻的光芒，探索者們常在此尋找稀有資源。';
          break;
      case 'Planet2':
          infoContent = '廢柴勇者：這裡是勇士的訓練場，據說每位勇者都曾在此地跌倒並重新站起。';
          break;
      case 'Planet3':
          infoContent = '小小守護者：一片平和的土地，這裡的小守護者們忠實地保護著星球上的居民。';
          break;
      case 'Planet4':
          infoContent = '家秘日記：這顆星球上隱藏著無數家族的秘密，等待著被揭露。';
          break;
      case 'Planet5':
          infoContent = 'JUSTRUN：這是速度之星，充滿了狂奔的熱血，許多賽跑者在此挑戰極限。';
          break;
      case 'Planet6':
          infoContent = '戰略AI：高科技與人工智慧的中心，這裡的居民以智慧與邏輯著稱。';
          break;
      case 'Planet7':
          infoContent = '龍的曙光：一個充滿神秘傳說的地方，據說有巨龍居住在這裡。';
          break;
      case 'Planet8':
          infoContent = '胡金：這裡是黃金貿易的中心，充滿了珍貴的金屬和財富。';
          break;
      case 'Planet9':
          infoContent = 'PYTEACHER：這顆星球是一個知識的寶庫，所有的教師和學習者都在這裡尋求真理。';
          break;
      case 'Planet10':
          infoContent = '水星的委託：這是探索的起點，許多冒險者在這裡接受任務並踏上旅途。';
          break;
      case 'Planet11':
          infoContent = '生生不熄：這顆星球象徵著生命的延續，是一個充滿生機的地方。';
          break;
      case 'Planet12':
          infoContent = '潘朵拉之庭：充滿奇珍異寶的星球，但開啟寶藏也許會帶來意想不到的後果。';
          break;
      case 'Planet13':
          infoContent = '拾光：這顆星球紀錄了歷史的片段，是時間的見證者。';
          break;
      default:
          infoContent = '未知星球，等待探索者揭開其神秘面紗。';
  }

  planetInfoText.textContent = infoContent;

  // 顯示介紹框
  const planetInfo = document.getElementById('planet-info');
  planetInfo.style.display = 'block';

  // 移除所有星球的 clicked 樣式
  const planets = document.querySelectorAll('.planet');
  planets.forEach(planet => planet.classList.remove('clicked'));

  // 為當前點擊的星球加上 clicked 樣式
  const planet = document.querySelector(`[data-name="${planetName}"]`);
  if (planet) {
      planet.classList.add('clicked');
  }
}

// 關閉星球介紹
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


//漢堡內容
function openInfoBox(contentType) {
    const infoBox = document.getElementById('infoBox');
    const infoTitle = document.getElementById('infoTitle');
    const infoText = document.getElementById('infoText');
  
    // 設定彈窗內容
    if (contentType === 'introduction') {
      infoText.textContent = '探索這片神秘的星球地圖，踏上未知的冒險旅程！在這裡，每顆星球都代表著一段精彩的故事與傳奇，等待著你去發現。從深淵之光的璀璨景色到龍的曙光的壯麗風采，每個角落都蘊藏著無窮的驚喜。隨著探索的深入，你將解鎖各式各樣的秘密，了解更多關於星球的過去、現在與未來。這張地圖將帶你穿越時間和空間，體驗不一樣的奇幻世界。探索這片神秘的星球地圖，踏上未知的冒險旅程！在這裡，每顆星球都代表著一段精彩的故事與傳奇，等待著你去發現。從深淵之光的璀璨景色到龍的曙光的壯麗風采，每個角落都蘊藏著無窮的驚喜。隨著探索的深入，你將解鎖各式各樣的秘密，了解更多關於星球的過去、現在與未來。這張地圖將帶你穿越時間和空間，體驗不一樣的奇幻世界。';
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
