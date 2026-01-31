// Initialize Lucide Icons
lucide.createIcons();

// --- Store Data ---
const STORES = [
    { id: 1, name: '리도림 (LEEDORIM Coffee & Bakery)', lat: 37.581, lng: 126.971, price: 5000, area: '종로구', type: '비건베이커리', desc: '경복궁 근처 제주/송리단길 감성 베이커리 카페', mapUrl: 'https://map.naver.com/v5/search/리도림', phone: '02-730-1234', address: '서울 종로구 옥인길' },
    { id: 2, name: '구욱희씨 (Gu Wook-hee)', lat: 37.544, lng: 127.045, price: 4500, area: '성동구', type: '쿠키전문', desc: '성수동의 대표적인 수제 쿠키 전문 카페', mapUrl: 'https://map.naver.com/v5/search/구욱희씨', phone: '02-461-1234', address: '서울 성동구 연무장길' },
    { id: 3, name: '크리에잇쿠키 역삼본점', lat: 37.502, lng: 127.036, price: 4000, area: '강남구', type: '쿠키전문', desc: '미국 정통 스타일의 쫀득한 수제 쿠키', mapUrl: 'https://map.naver.com/v5/search/크리에잇쿠키 역삼', phone: '02-558-8890', address: '서울 강남구 테헤란로25길 36' },
    { id: 4, name: '정애 쿠키 (Jungae Cookie)', lat: 37.575, lng: 126.985, price: 3800, area: '종로구', type: '디저트', desc: '정성이 담긴 수제 종로 디저트 맛집', mapUrl: 'https://map.naver.com/v5/search/정애쿠키', phone: '010-1111-2222', address: '서울 종로구 율곡로' },
    { id: 5, name: '원더쿠키 (Wonder Cookies)', lat: 37.572, lng: 127.000, price: 4200, area: '종로구', type: '수제쿠키', desc: '전통과 현대가 어우러진 수제 쿠키 전문점', mapUrl: 'https://map.naver.com/v5/search/원더쿠키', phone: '02-744-1234', address: '서울 종로구 인사동길' },
    { id: 6, name: '올더어글리쿠키 & 사부아페어', lat: 37.548, lng: 127.052, price: 6500, area: '성동구', type: '성지', desc: '쿠키 매니아들 사이에서 유명한 웨이팅 맛집', mapUrl: 'https://map.naver.com/v5/search/올더어글리쿠키', phone: '010-2222-3333', address: '서울 성동구 성수동' },
    { id: 7, name: '디저트 카페 (망원동)', lat: 37.555, lng: 126.901, price: 5000, area: '마포구', type: '감성카페', desc: '망원동 골목의 분위기 좋은 디저트 카페', mapUrl: 'https://map.naver.com/v5/search/망원동 디저트카페', phone: '010-5555-6666', address: '서울 마포구 망원동' },
    { id: 8, name: '골든피스 (GOLDEN PIECE)', lat: 37.535, lng: 127.001, price: 15000, area: '용산구', type: '프리미엄', desc: '고급스러운 패키지와 맛의 전통 프리미엄 디저트', mapUrl: 'https://map.naver.com/v5/search/골든피스', phone: '02-790-1234', address: '서울 용산구 한남동' },
    { id: 9, name: '테디뵈르하우스 (Teddy Beurre House)', lat: 37.532, lng: 126.972, price: 6000, area: '용산구', type: '베이커리', desc: '파리 감성 가득한 용리단길 크로와상 성지', mapUrl: 'https://map.naver.com/v5/search/테디뵈르하우스', phone: '02-123-4567', address: '서울 용산구 한강대로40가길 42' },
    { id: 10, name: '스코프 부암점 (SCOFF BAKEHOUSE)', lat: 37.592, lng: 126.963, price: 5000, area: '종로구', type: '영국식', desc: '부암동에서 만나는 정통 영국식 베이커리', mapUrl: 'https://map.naver.com/v5/search/스코프 부암', phone: '070-1111-2222', address: '서울 종로구 창의문로 149' },
    { id: 11, name: '스코프 (SCOFF BAKEHOUSE)', lat: 37.579, lng: 126.969, price: 5000, area: '종로구', type: '수제베이커리', desc: '두툼하고 투박한 매력의 수제 빵집', mapUrl: 'https://map.naver.com/v5/search/스코프 서촌', phone: '02-736-1234', address: '서울 종로구 누하동' },
    { id: 12, name: '더파이홀 (The Pie Hole)', lat: 37.557, lng: 126.935, price: 7000, area: '서대문구', type: '파이전문', desc: '신촌에서 소문난 정성 가득한 파이 전문점', mapUrl: 'https://map.naver.com/v5/search/더파이홀', phone: '010-8888-7777', address: '서울 서대문구 창천동' },
    { id: 13, name: '브릭샌드 명동 (BRICKSAND)', lat: 37.562, lng: 126.985, price: 3000, area: '중구', type: '구움과자', desc: '명동에서 만나는 특별한 벽돌 모양 휘낭시에', mapUrl: 'https://map.naver.com/v5/search/브릭샌드 명동', phone: '02-777-1234', address: '서울 중구 명동' },
    { id: 14, name: '브릭샌드 서울 (BRICKSAND)', lat: 37.554, lng: 126.971, price: 3000, area: '중구', type: '베이커리', desc: '서울역 여행의 시작과 끝을 함께하는 간식', mapUrl: 'https://map.naver.com/v5/search/브릭샌드 서울역', phone: '02-333-5555', address: '서울 중구 서울역' },
    { id: 15, name: '더 베이커스 테이블 (The Baker\'s Table)', lat: 37.540, lng: 126.987, price: 6000, area: '용산구', type: '브런치', desc: '경리단길 독일식 빵과 스프가 유명한 곳', mapUrl: 'https://map.naver.com/v5/search/더베이커스테이블', phone: '02-797-1327', address: '서울 용산구 이태원동' },
    { id: 16, name: '모닐이네하우스 글루텐프리', lat: 37.550, lng: 126.905, price: 5500, area: '마포구', type: '공방카페', desc: '속이 편한 글루텐프리 디저트를 만드는 공방', mapUrl: 'https://map.naver.com/v5/search/모닐이네하우스', phone: '010-9999-0000', address: '서울 마포구 성산동' },
    { id: 17, name: '소소쿠키빌 (sosocookieville)', lat: 37.548, lng: 127.072, price: 4500, area: '광진구', type: '디저트', desc: '아이들과 함께 즐기기 좋은 귀여운 쿠키집', mapUrl: 'https://map.naver.com/v5/search/소소쿠키빌', phone: '02-456-7890', address: '서울 광진구 군자동' },
    { id: 18, name: '서울 베이킹 컴퍼니 (Conrad)', lat: 37.525, lng: 126.924, price: 12000, area: '영등포구', type: '호텔베이커리', desc: '콘래드 서울의 품격 있는 베이커리', mapUrl: 'https://map.naver.com/v5/search/서울베이킹컴퍼니', phone: '02-6137-7120', address: '서울 영등포구 여의도동' },
    { id: 19, name: '아티스트 베이커리 (Artist Bakery)', lat: 37.577, lng: 126.986, price: 6000, area: '종로구', type: '인기', desc: '요즘 가장 핫한 안국동 소금빵 성지', mapUrl: 'https://map.naver.com/v5/search/아티스트베이커리', phone: '02-743-1234', address: '서울 종로구 안국동' },
    { id: 20, name: '마이 페이보릿 쿠키테리아', lat: 37.523, lng: 127.022, price: 5500, area: '강남구', type: '쿠키카페', desc: '신사동 가로수길의 미국 감성 쿠키 카페', mapUrl: 'https://map.naver.com/v5/search/마이페이보릿쿠키테리아', phone: '02-511-1234', address: '서울 강남구 신사동' },
    { id: 21, name: '프릳츠 커피 컴퍼니 도화점', lat: 37.541, lng: 126.947, price: 4500, area: '마포구', type: '커피&빵', desc: '한국적인 레트로 감성과 훌륭한 빵', mapUrl: 'https://map.naver.com/v5/search/프릳츠 도화', phone: '02-3275-2045', address: '서울 마포구 도화동' },
    { id: 22, name: '캐시미어 커피 (Bakery)', lat: 37.532, lng: 127.124, price: 5000, area: '강동구', type: '베이커리', desc: '감성적인 공간에서 즐기는 맛있는 베이커리', mapUrl: 'https://map.naver.com/v5/search/캐시미어커피', phone: '02-488-8888', address: '서울 강동구 성내동' },
    { id: 23, name: '뚜레쥬르 (Tous Les Jours)', lat: 37.561, lng: 127.005, price: 4000, area: '중구', type: '프랜차이즈', desc: 'CJ제일제당센터 플래그십 매장', mapUrl: 'https://map.naver.com/v5/search/뚜레쥬르 본점', phone: '02-6740-7930', address: '서울 중구 쌍림동' },
    { id: 24, name: 'Bakery & Cafe (Yongsan)', lat: 37.525, lng: 126.965, price: 8000, area: '용산구', type: '지구베이커리', desc: '용산의 다양한 베이커리 제품들', mapUrl: 'https://map.naver.com/v5/search/용산 베이커리카페', phone: '02-792-2423', address: '서울 용산구 용산동' },
    { id: 25, name: '원더쿠키 (Jongno)', lat: 37.571, lng: 127.001, price: 4200, area: '종로구', type: '디저트샵', desc: '종로구의 한적한 골목 안 디저트 샵', mapUrl: 'https://map.naver.com/v5/search/원더쿠키 종로', phone: '02-744-5555', address: '서울 종로구 혜화동' },
    { id: 26, name: '파리크라상 (Paris Croissant)', lat: 37.534, lng: 127.002, price: 5000, area: '용산구', type: '프리미엄', desc: '한남동에서 즐기는 고품격 베이커리', mapUrl: 'https://map.naver.com/v5/search/파리크라상 한남', phone: '02-790-2345', address: '서울 용산구 한남동' },
    { id: 27, name: '런던 베이글 뮤지엄 안국', lat: 37.579, lng: 126.986, price: 8500, area: '종로구', type: '베이글', desc: '줄 서지 않으면 맛볼 수 없는 베이글 성지', mapUrl: 'https://map.naver.com/v5/search/런던베이글뮤지엄 안국', phone: '010-4444-5555', address: '서울 종로구 계동' },
    { id: 28, name: '코리코 카페 (Koriko)', lat: 37.563, lng: 126.923, price: 7500, area: '마포구', type: '테마카페', desc: '마녀배달부 키키 테마의 예쁜 디저트 카페', mapUrl: 'https://map.naver.com/v5/search/코리코카페', phone: '02-333-1256', address: '서울 마포구 연남동' }
];

// --- Map State ---
let map, markers, userLocation, radiusCircle;
const DEFAULT_CENTER = [37.5665, 126.9780]; // Seoul City Hall

// --- Haversine Distance (meters) ---
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// --- Initialize Map ---
function initMap() {
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView(DEFAULT_CENTER, 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    markers = L.markerClusterGroup({
        showCoverageOnHover: false,
        maxClusterRadius: 50
    });
    map.addLayer(markers);

    renderMarkers(STORES);

    // Get User Location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            userLocation = [pos.coords.latitude, pos.coords.longitude];
            L.circleMarker(userLocation, {
                radius: 8,
                fillColor: '#007AFF',
                fillOpacity: 1,
                color: 'white',
                weight: 3
            }).addTo(map);
            updateNearbyList(); // Update sidebar list
            map.flyTo(userLocation, 14);
        }, err => {
            console.warn("Geolocation Error:", err);
            updateNearbyList(); // Show empty/all if failed
        });
    } else {
        updateNearbyList();
    }

    // Splash Timeout
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash').style.visibility = 'hidden';
            updateNearbyList(); // Show all stores in sidebar on start
        }, 800);
    }, 2000);
}

// --- Render Markers ---
function renderMarkers(data) {
    markers.clearLayers();
    data.forEach(store => {
        const priceLabel = (store.price / 1000).toFixed(1);
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="price-marker">${priceLabel}</div>`,
            iconSize: [40, 30],
            iconAnchor: [20, 30]
        });

        const marker = L.marker([store.lat, store.lng], { icon });
        marker.on('click', () => showStoreDetails(store));
        markers.addLayer(marker);
    });
}

// --- UI Logic ---
const bottomSheet = document.getElementById('bottom-sheet');
const storeDetails = document.getElementById('store-details');

function showStoreDetails(store) {
    const bottomNav = document.querySelector('.bottom-nav');
    const callBtn = document.getElementById('main-call-btn');

    if (callBtn && store.phone) {
        callBtn.href = `tel:${store.phone}`;
        callBtn.querySelector('span').innerText = `${store.name} 전화 연결`;
    }

    if (bottomNav) {
        bottomNav.classList.add('active'); // Show phone bar
    }

    storeDetails.innerHTML = `
        <div class="store-header">
            <div class="store-info">
                <span class="store-tag">${store.area}</span>
                <span class="store-tag">${store.type}</span>
                <h2>${store.name}</h2>
            </div>
            <div class="store-price">${store.price.toLocaleString()}원</div>
        </div>
        <div class="store-stats">
            <div class="stat-item"><i data-lucide="star"></i> 4.9</div>
            <div class="stat-item"><i data-lucide="phone"></i> ${store.phone}</div>
        </div>
        <p style="margin-bottom: 24px; color: #5D4037; font-size: 0.95rem; line-height: 1.6;">${store.desc}</p>
        <div class="action-buttons">
            <a href="${store.mapUrl}" target="_blank" class="btn-action btn-naver" style="grid-column: span 2; background: #03C75A; color: white;">
                <i data-lucide="map-pin"></i> ${store.address}
            </a>
        </div>
    `;
    lucide.createIcons();
    bottomSheet.classList.add('open');
}

// Close bottom sheet and nav when clicked
bottomSheet.addEventListener('click', (e) => {
    // If the click is on the address button or link, let it happen, otherwise close
    if (!e.target.closest('.btn-action')) {
        closeDetails();
    }
});

function closeDetails() {
    bottomSheet.classList.remove('open');
    document.querySelector('.bottom-nav').classList.remove('active');
}

// --- Filtering Logic ---
// No longer needed: btn-all, btn-nearby, btn-premium, btn-value listeners

function setActiveChip(el) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

// --- Search Logic ---
document.getElementById('store-search').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = STORES.filter(s => s.name.toLowerCase().includes(val) || s.area.includes(val));
    renderMarkers(filtered);
});

// --- Other UI ---
document.getElementById('recenter-btn').addEventListener('click', () => {
    if (userLocation) map.flyTo(userLocation, 15);
});

// --- Sidebar Logic ---
const nearbyList = document.getElementById('nearby-list');
const nearbyCount = document.getElementById('nearby-count');
const sidebar = document.getElementById('nearby-sidebar');

function updateNearbyList() {
    // Show all stores if location is not enabled, or sort by distance if it is
    let listData = [...STORES];

    if (userLocation) {
        listData = STORES.map(s => {
            const dist = getDistance(userLocation[0], userLocation[1], s.lat, s.lng);
            return { ...s, dist };
        }).sort((a, b) => a.dist - b.dist);
    }

    nearbyCount.innerText = `총 ${listData.length}곳 성지`;

    nearbyList.innerHTML = listData.map(s => `
        <div class="store-card" onclick="focusStore(${s.id})">
            <div class="card-title">
                ${s.name}
                ${s.dist ? `<span class="card-dist">${(s.dist / 1000).toFixed(1)}km</span>` : ''}
            </div>
            <div class="card-info">
                ${s.area} · ${s.price.toLocaleString()}원 · ${s.type}
            </div>
        </div>
    `).join('');
}

function focusStore(id) {
    const store = STORES.find(s => s.id === id);
    if (store) {
        map.flyTo([store.lat, store.lng], 16);
        showStoreDetails(store);
        if (window.innerWidth <= 768) sidebar.classList.remove('open');
    }
}

// Global expose for onclick
window.focusStore = focusStore;

// Toggle Sidebar
document.getElementById('toggle-sidebar').addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sheet, nav and sidebar on map interaction
if (map) {
    const closeAllUI = () => {
        closeDetails();
        sidebar.classList.remove('open');
    };

    map.on('click', closeAllUI);
    map.on('movestart', closeAllUI); // Also close when user starts moving the map
}

// Initialize
window.onload = initMap;
