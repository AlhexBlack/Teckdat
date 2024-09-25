const products = {
    iphones: [
        { name: "iPhone 12 Pro Max", description: "Powerful iPhone with A14 Bionic chip and 256GB storage.", price: 550000, image: "/image/iphones.png" },
        { name: "iPhone 13 Mini", description: "Compact iPhone with A15 Bionic chip and 128GB storage.", price: 450000, image: "path_to_image/iphone13_mini.png" },
        { name: "iPhone 14", description: "Latest iPhone with A16 Bionic chip and 256GB storage.", price: 650000, image: "path_to_image/iphone14.png" },
        { name: "iPhone 12", description: "Affordable iPhone with A14 Bionic chip and 128GB storage.", price: 400000, image: "path_to_image/iphone12.png" },
        { name: "iPhone 11 Pro Max", description: "iPhone with A13 Bionic chip and 512GB storage.", price: 350000, image: "path_to_image/iphone11_pro_max.png" },
        { name: "iPhone XR", description: "Budget-friendly iPhone with A12 Bionic chip.", price: 200000, image: "path_to_image/iphone_xr.png" },
        { name: "iPhone SE", description: "Compact iPhone with A13 Bionic chip and 64GB storage.", price: 150000, image: "path_to_image/iphone_se.png" },
        { name: "iPhone 12 Mini", description: "Small-sized iPhone with A14 Bionic chip and 256GB storage.", price: 300000, image: "path_to_image/iphone12_mini.png" },
        { name: "iPhone 11", description: "Versatile iPhone with A13 Bionic chip and dual-camera system.", price: 280000, image: "path_to_image/iphone11.png" },
        { name: "iPhone 13 Pro", description: "High-end iPhone with 256GB storage and A15 chip.", price: 600000, image: "path_to_image/iphone13_pro.png" },
        { name: "iPhone 14 Pro Max", description: "Flagship iPhone with A16 chip and 512GB storage.", price: 800000, image: "path_to_image/iphone14_pro_max.png" },
        { name: "iPhone XS", description: "Premium iPhone with OLED display and dual cameras.", price: 320000, image: "path_to_image/iphone_xs.png" },
        { name: "iPhone 8 Plus", description: "Classic iPhone with dual cameras and 64GB storage.", price: 180000, image: "path_to_image/iphone8_plus.png" },
        { name: "iPhone 7", description: "Older model iPhone with 32GB storage, still functional.", price: 120000, image: "path_to_image/iphone7.png" },
        { name: "iPhone 6S", description: "Affordable entry-level iPhone with basic features.", price: 80000, image: "path_to_image/iphone6s.png" },
        { name: "iPhone X", description: "Revolutionary iPhone with OLED display and Face ID.", price: 300000, image: "path_to_image/iphone_x.png" },
        { name: "iPhone 8", description: "Classic iPhone with A11 Bionic chip.", price: 180000, image: "path_to_image/iphone8.png" },
        { name: "iPhone 7 Plus", description: "Dual-camera system with optical zoom.", price: 150000, image: "path_to_image/iphone7_plus.png" },
        { name: "iPhone 6", description: "Affordable option with 64GB storage.", price: 100000, image: "path_to_image/iphone6.png" },
        { name: "iPhone 5S", description: "Compact iPhone with Touch ID.", price: 60000, image: "path_to_image/iphone5s.png" },
        { name: "iPhone X", description: "Revolutionary iPhone with OLED display and Face ID.", price: 300000, image: "path_to_image/iphone_x.png" },
        { name: "iPhone 8", description: "Classic iPhone with A11 Bionic chip.", price: 180000, image: "path_to_image/iphone8.png" },
        { name: "iPhone 7 Plus", description: "Dual-camera system with optical zoom.", price: 150000, image: "path_to_image/iphone7_plus.png" },
        { name: "iPhone 6", description: "Affordable option with 64GB storage.", price: 100000, image: "path_to_image/iphone6.png" },
        { name: "iPhone 5S", description: "Compact iPhone with Touch ID.", price: 60000, image: "path_to_image/iphone5s.png" },
    ],
    androids: [
        { name: "Samsung Galaxy S21", description: "Flagship Samsung phone with Exynos 2100 chip.", price: 450000, image: "path_to_image/galaxy_s21.png" },
        { name: "Google Pixel 6", description: "Google's latest phone with pure Android experience.", price: 400000, image: "path_to_image/pixel_6.png" },
        { name: "OnePlus 9 Pro", description: "Premium Android phone with Snapdragon 888 and 12GB RAM.", price: 430000, image: "path_to_image/oneplus_9_pro.png" },
        { name: "Xiaomi Mi 11", description: "Flagship Xiaomi phone with AMOLED display and Snapdragon 888.", price: 370000, image: "path_to_image/mi_11.png" },
        { name: "Oppo Find X3 Pro", description: "High-end phone with 50MP camera and Snapdragon 888.", price: 380000, image: "path_to_image/oppo_find_x3_pro.png" },
        { name: "Samsung Galaxy A52", description: "Mid-range Samsung phone with Super AMOLED display.", price: 250000, image: "path_to_image/galaxy_a52.png" },
        { name: "Vivo V21", description: "Stylish Android phone with 44MP front camera.", price: 180000, image: "path_to_image/vivo_v21.png" },
        { name: "Huawei P40", description: "Powerful Huawei phone with Kirin 990 chip.", price: 330000, image: "path_to_image/huawei_p40.png" },
        { name: "Realme GT", description: "Affordable phone with Snapdragon 888 and 120Hz display.", price: 270000, image: "path_to_image/realme_gt.png" },
        { name: "Motorola Edge 20 Pro", description: "Motorola flagship with Snapdragon 870 and 144Hz display.", price: 340000, image: "path_to_image/edge_20_pro.png" },
        { name: "Sony Xperia 5 III", description: "Compact phone with Snapdragon 888 and triple cameras.", price: 450000, image: "path_to_image/xperia_5_iii.png" },
        { name: "Nokia 8.3", description: "Nokia's 5G phone with PureDisplay technology.", price: 230000, image: "path_to_image/nokia_8_3.png" },
        { name: "Tecno Camon 17", description: "Budget phone with AI-enhanced cameras.", price: 130000, image: "path_to_image/camon_17.png" },
        { name: "Infinix Zero 8", description: "Affordable phone with dual selfie cameras.", price: 150000, image: "path_to_image/zero_8.png" },
        { name: "Samsung Galaxy Note 20", description: "Stylus-equipped phone with Exynos 990 chip.", price: 520000, image: "path_to_image/note_20.png" },
        { name: "Xiaomi Redmi Note 10", description: "Budget phone with AMOLED display and Snapdragon 678.", price: 150000, image: "path_to_image/redmi_note_10.png" },
        { name: "OnePlus Nord", description: "Affordable 5G phone with Snapdragon 765G.", price: 220000, image: "path_to_image/oneplus_nord.png" },
        { name: "Oppo Reno 5", description: "Mid-range phone with AI-enhanced cameras.", price: 210000, image: "path_to_image/oppo_reno_5.png" },
        { name: "Realme 8 Pro", description: "Phone with 108MP camera and Super AMOLED display.", price: 180000, image: "path_to_image/realme_8_pro.png" },
        { name: "Tecno Phantom X", description: "Stylish phone with AMOLED display and 50MP camera.", price: 150000, image: "path_to_image/phantom_x.png" },
    ],
    headphones: [
        { name: "Sennheiser HD 450BT", description: "Wireless over-ear headphones with active noise cancellation.", price: 100000, image: "path_to_image/sennheiser_hd450bt.png" },
        { name: "Beats Solo Pro", description: "On-ear wireless headphones with ANC.", price: 140000, image: "path_to_image/beats_solo_pro.png" },
        { name: "Skullcandy Crusher", description: "Wireless headphones with adjustable bass.", price: 85000, image: "path_to_image/skullcandy_crusher.png" },
        { name: "Audio-Technica ATH-M50xBT", description: "Wireless version of the popular M50x headphones.", price: 120000, image: "path_to_image/ath_m50xbt.png" },
        { name: "AKG N700NC", description: "Premium noise-cancelling headphones with rich sound.", price: 150000, image: "path_to_image/akg_n700nc.png" },
        { name: "Sony WH-1000XM4", description: "Noise-cancelling over-ear headphones.", price: 120000, image: "path_to_image/wh1000xm4.png" },
        { name: "Bose QuietComfort 35 II", description: "Premium noise-cancelling wireless headphones.", price: 150000, image: "path_to_image/qc35.png" },
        { name: "Apple AirPods Pro", description: "True wireless earbuds with noise cancellation.", price: 110000, image: "path_to_image/airpods_pro.png" },
        { name: "Samsung Galaxy Buds Live", description: "Wireless earbuds with unique bean shape.", price: 75000, image: "path_to_image/buds_live.png" },
        { name: "Jabra Elite 85h", description: "Smart noise-cancelling over-ear headphones.", price: 130000, image: "path_to_image/jabra_elite.png" },

    ],
    bluetoothSpeakers: [
        { name: "Tribit StormBox", description: "Compact Bluetooth speaker with powerful sound.", price: 50000, image: "path_to_image/tribit_stormbox.png" },
        { name: "Sony SRS-XB33", description: "Portable Bluetooth speaker with Extra Bass.", price: 95000, image: "path_to_image/sony_xb33.png" },
        { name: "Bang & Olufsen Beosound A1", description: "Premium Bluetooth speaker with voice assistant.", price: 200000, image: "path_to_image/beosound_a1.png" },
        { name: "Anker Soundcore Motion+", description: "Bluetooth speaker with hi-res audio and enhanced bass.", price: 80000, image: "path_to_image/soundcore_motion.png" },
        { name: "Marshall Emberton", description: "Stylish Bluetooth speaker with Marshall's iconic design.", price: 170000, image: "path_to_image/marshall_emberton.png" },
        { name: "JBL Charge 5", description: "Portable Bluetooth speaker with deep bass.", price: 85000, image: "path_to_image/charge5.png" },
        { name: "Sony SRS-XB43", description: "Bluetooth speaker with Extra Bass technology.", price: 100000, image: "path_to_image/xb43.png" },
        { name: "Anker Soundcore Flare", description: "360-degree Bluetooth speaker with LED lights.", price: 60000, image: "path_to_image/soundcore_flare.png" },
        { name: "Ultimate Ears Boom 3", description: "Rugged, portable wireless Bluetooth speaker.", price: 90000, image: "path_to_image/boom3.png" },
        { name: "Bose SoundLink Revolve+", description: "Premium Bluetooth speaker with 360-degree sound.", price: 150000, image: "path_to_image/soundlink_revolve.png" },

    ],
    powerBanks: [
        { name: "Baseus 30000mAh", description: "Massive power bank with dual output and fast charging.", price: 60000, image: "path_to_image/baseus_30000mah.png" },
        { name: "Samsung Wireless Charger Portable Battery", description: "10000mAh power bank with wireless charging.", price: 55000, image: "path_to_image/samsung_wireless.png" },
        { name: "Aukey Basix Pro 10000mAh", description: "Compact wireless charging power bank.", price: 35000, image: "path_to_image/aukey_basix_pro.png" },
        { name: "Mophie Powerstation XXL", description: "20000mAh power bank with dual USB ports.", price: 45000, image: "path_to_image/mophie_xxl.png" },
        { name: "Zendure A6PD", description: "Portable power bank with 45W PD fast charging.", price: 90000, image: "path_to_image/zendure_a6pd.png" },
        { name: "Anker PowerCore 20000mAh", description: "High-capacity power bank with fast charging.", price: 40000, image: "path_to_image/anker_powercore.png" },
        { name: "Xiaomi Mi Power Bank 3", description: "20000mAh power bank with dual output.", price: 35000, image: "path_to_image/mi_power_bank.png" },
        { name: "RAVPower 26800mAh", description: "Massive power bank with triple output.", price: 50000, image: "path_to_image/ravpower.png" },
        { name: "AUKEY 10000mAh", description: "Compact power bank with 18W fast charging.", price: 25000, image: "path_to_image/aukey_powerbank.png" },

    ],
    chargers: [
        { name: "RAVPower 61W PD 3.0 Charger", description: "Fast charger with USB-C Power Delivery.", price: 20000, image: "path_to_image/ravpower_61w.png" },
        { name: "Ugreen 65W USB-C Charger", description: "GaN charger with dual USB-C ports and fast charging.", price: 25000, image: "path_to_image/ugreen_65w.png" },
        { name: "Spigen 30W Wall Charger", description: "Compact USB-C charger with PowerIQ 3.0.", price: 15000, image: "path_to_image/spigen_30w.png" },
        { name: "Belkin 30W USB-C Charger", description: "High-speed charger for smartphones and tablets.", price: 18000, image: "path_to_image/belkin_30w.png" },
        { name: "HyperJuice 100W GaN Charger", description: "Multi-port charger for charging multiple devices at once.", price: 35000, image: "path_to_image/hyperjuice_100w.png" }
    ]
};

function renderProducts(category) {
    const productList = document.getElementById('product-list');
    const selectedProducts = products[category] || [];

    selectedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="cardDis">${product.description}</p>
      <div>
      <p class="cardPrice">₦${product.price.toLocaleString()}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      </div>
    `;

        productList.appendChild(productCard);
    });
}
