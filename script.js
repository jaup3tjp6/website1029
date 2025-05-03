// 展位資訊
const boothInfo = {
    1: {
        title: "展位 1",
        description: "展位 1 的詳細介紹",
        image: "星球/介紹版/1.png"
    },
    2: {
        title: "展位 2",
        description: "展位 2 的詳細介紹",
        image: "星球/介紹版/2.png"
    },
    3: {
        title: "展位 3",
        description: "展位 3 的詳細介紹",
        image: "星球/介紹版/3.png"
    },
    4: {
        title: "展位 4",
        description: "展位 4 的詳細介紹",
        image: "星球/介紹版/4.png"
    },
    5: {
        title: "展位 5",
        description: "展位 5 的詳細介紹",
        image: "星球/介紹版/5.png"
    },
    6: {
        title: "展位 6",
        description: "展位 6 的詳細介紹",
        image: "星球/介紹版/6.png"
    },
    7: {
        title: "展位 7",
        description: "展位 7 的詳細介紹",
        image: "星球/介紹版/7.png"
    },
    8: {
        title: "展位 8",
        description: "展位 8 的詳細介紹",
        image: "星球/介紹版/8.png"
    },
    9: {
        title: "展位 9",
        description: "展位 9 的詳細介紹",
        image: "星球/介紹版/9.png"
    },
    10: {
        title: "展位 10",
        description: "展位 10 的詳細介紹",
        image: "星球/介紹版/10.png"
    },
    11: {
        title: "展位 11",
        description: "展位 11 的詳細介紹",
        image: "星球/介紹版/11.png"
    },
    12: {
        title: "展位 12",
        description: "展位 12 的詳細介紹",
        image: "星球/介紹版/12.png"
    },
    13: {
        title: "展位 13",
        description: "展位 13 的詳細介紹",
        image: "星球/介紹版/13.png"
    }
};

// DOM 元素
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const areas = document.querySelectorAll('.area');
const dots = document.querySelectorAll('.dot');
const nextButton = document.querySelector('.next-button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');

// 當前區域索引
let currentAreaIndex = 0;

// 新增一個全螢幕顯示圖片的容器
let fullscreenImgDiv = document.getElementById('fullscreen-img-div');
if (!fullscreenImgDiv) {
    fullscreenImgDiv = document.createElement('div');
    fullscreenImgDiv.id = 'fullscreen-img-div';
    fullscreenImgDiv.style.cssText = `
        display: none; position: fixed; z-index: 2000; top: 0; left: 0; width: 100vw; height: 100vh; background: #000; justify-content: center; align-items: center;`;
    document.body.appendChild(fullscreenImgDiv);
}

// 選單控制
menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    menuButton.classList.remove('active');
});

// 區域切換
function switchArea(index) {
    areas.forEach(area => area.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    areas[index].classList.add('active');
    dots[index].classList.add('active');
    currentAreaIndex = index;
}

// 導航點擊事件
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        switchArea(index);
    });
});

// 下一頁按鈕
nextButton.addEventListener('click', () => {
    const newIndex = (currentAreaIndex + 1) % areas.length;
    switchArea(newIndex);
});

// 展位點擊事件
document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
        const boothId = planet.getAttribute('data-booth');
        planet.classList.add('active');
        showBoothInfo(boothId);
    });
});

// 顯示展位資訊
function showBoothInfo(boothId) {
    const imgSrc = `星球/${boothId}.png`;
    fullscreenImgDiv.innerHTML = `<img src="${imgSrc}" alt="展位${boothId}" style="width:100vw; height:100vh; max-width:100vw; max-height:100vh; object-fit:contain; display:block; margin:0;">`;
    fullscreenImgDiv.style.display = 'flex';
}

// 點擊全螢幕圖片時關閉
fullscreenImgDiv.onclick = function() {
    fullscreenImgDiv.style.display = 'none';
};

// 關閉彈窗
function closeBoothInfo() {
    modal.classList.remove('active');
}

closeModal.addEventListener('click', closeBoothInfo);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeBoothInfo();
    }
});

// 鍵盤事件
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menu.classList.remove('active');
        closeBoothInfo();
    } else if (e.key === 'ArrowRight') {
        const newIndex = (currentAreaIndex + 1) % areas.length;
        switchArea(newIndex);
    }
});

// 選單連結點擊事件
const menuMessages = {
    '#about': '114級數位系畢製成果展「啟程轉何」<br>歡迎參觀 !！',
    '#contact': `<div style="text-align:left;">
    <b><a href="https://www.facebook.com/ntcudct114" target="_blank">Facebook</a></b>
    <span style="display:inline-block; width:32px;"></span>
    <b><a href="https://www.instagram.com/ntcudct114?fbclid=IwY2xjawKC0yhleHRuA2FlbQIxMABicmlkETFTeUZlbjQzMGhJb3FBekhtAR4qeV1BG4YGL9jKlj9iAWSLiTV8QF7bDBwpzaqG_XjjCv3PbBGJNugyfexlPw_aem_6KXOGp4Y1a0oUlhsQzwpFQ" target="_blank">Instagram</a></b>
</div>`,
    '#help': '歡迎來探索展區地圖！<br>點點每一顆星球，就能看到展位的詳細介紹。<br>想切換不同展區？只要點下方的圓點或「下一區」按鈕就行囉！<br>一開始星球都是神祕的黑色，點擊後就會亮出它們的真面目！'
};
document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        menu.classList.remove('active');
        menuButton.classList.remove('active');
        const href = link.getAttribute('href');
        if (menuMessages[href]) {
            showMenuMessage(menuMessages[href]);
            e.preventDefault();
        }
    });
});

function showMenuMessage(message) {
    const content = `
        <div class="info-content">
            <p>${message}</p>
        </div>
    `;
    modalContent.innerHTML = content;
    modal.classList.add('active');
}

// 初始化顯示第一個區域
switchArea(0);

window.addEventListener('DOMContentLoaded', () => {
  const opening = document.getElementById('opening-animation');
  if (opening) {
    setTimeout(() => {
      opening.classList.add('hide');
      setTimeout(() => opening.remove(), 1000);
    }, 1800);
  }
}); 