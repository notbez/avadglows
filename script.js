const catalog = [
    { id: 1, name: "Браслет Panthère", price: 3651600, img: "https://sun9-20.userapi.com/s/v1/ig2/KkMv692S-tJ9otuBg1rKanmSKgP7YmS9GrcHhONC0gwJY6lO5JMn9mbsdw3UaboLtaI5fN8MlJMTiSJz-SR7WJzI.jpg?quality=95&as=32x44,48x65,72x98,108x147,160x218,240x326,360x490,480x653,540x734,640x870,720x979,864x1175&from=bu&u=cuMDmAAwITky_EWuGVg_w_UgWqiyccof9G1Oo_89ccY&cs=593x807", category: "bracelets", description:""},
    { id: 2, name: "Браслет Trinity", price: 277560, img: "https://sun9-68.userapi.com/s/v1/ig2/lxRS3eTHiwHpjUuOU9PC-03WeqaoAJMY_FcBbCZ6xrlUsY_JJ-4sQl9FNs48bY-Z1_QZABdgYKucPMS00Zifs2DY.jpg?quality=95&as=32x27,48x40,72x60,108x90,160x134,240x200,360x300,480x401,540x451,640x534,720x601,1080x901,1178x983&from=bu&u=SgNx4uafbeAHyIRp_pUDfU4fYRZR6sWhn6sBAgg04rg&cs=807x673", category: "bracelets", description:"" },
    { id: 3, name: "Браслет Happy Hearts ", price: 285000, img: "https://sun1-87.userapi.com/s/v1/ig2/b8HyHppE6jTWZteKCMUjYo3mCYHXkMY7L2Y3HTdC0GxEXvoNjGbbdetZL7eN769V6bR8wgu7pUmzO4RTC7h4Kxp7.jpg?quality=95&as=32x26,48x39,72x59,108x88,160x131,240x196,360x295,480x393,540x442,640x524,720x589,1080x884,1178x964&from=bu&u=yS8-JeeJITwJfE30WjEIBvoOgIe18adQfr91qhrt8J4&cs=807x660", category: "bracelets", description:"" },
    { id: 4, name: "Браслет ICE CUBE", price: 520000, img: "https://sun1-22.userapi.com/s/v1/ig2/I1KnrHvc-TXvE-hxm9xvvQf7vfv_HbNRYm0R2O234gzZkw8isY8ah7XdAtHp4YxMoTpWHqS2v9BRAg_qreOaabRS.jpg?quality=95&as=32x24,48x36,72x55,108x82,160x122,240x182,360x274,480x365,540x410,640x486,720x547,1080x821,1179x896&from=bu&u=Y3nerizaDwzwJ2PX6p9oCQItjutobXiammREBi8e33M&cs=807x613", category: "bracelets", description:""},
    { id: 5, name: "Кольцо Diamond hoop", price: 238570, img: "https://sun1-84.userapi.com/impg/uKea_vA60-L1pi6rDH6d0Zs8ptlG5tAH1DYAlA/FttiVWPefxE.jpg?size=1179x945&quality=95&sign=04756530bdeed235830039397345d6ea&type=album", category: "rings", description:""},
    { id: 6, name: "Кольцо Yard Ring", price: 152570, img: "https://sun1-28.userapi.com/impg/XCNediQMwqCtxpRl8rHnMtkLA1oqz_3BsJDKsw/e7JjmfUA3XY.jpg?size=1178x1003&quality=95&sign=03fa82c937155c24fa678549f41df141&type=album", category: "rings", description:"" },
    { id: 7, name: "Колько T wire", price: 307970, img: "https://sun1-14.userapi.com/impg/QjHFS1u0kiH8HyfmZcU9--dcIapJ66sO8kDiwg/0S4OTDL2Y2g.jpg?size=1178x942&quality=95&sign=74c1dc86fa2f90179efc622bf686091a&type=album", category: "rings", description:"" },
    { id: 8, name: "Колько exclusive", price: 307890, img: "https://sun1-15.userapi.com/impg/9J38WFFrB0W5mcxKCXPg8wOJcruPb44GV9bRGQ/NfOeChL4Xz8.jpg?size=1178x938&quality=95&sign=fa0324af8cbb3ba5ee639dea04b7c141&type=album", category: "rings", description:"" },
    { id: 9, name: "Колько Soleste", price: 311890, img: "https://sun1-96.userapi.com/impg/zMk0PMd_0HKg0YXwkBJ4P5INq9J6orpXfirePg/zB5kSyo95g4.jpg?size=1178x925&quality=95&sign=07d30755ae39341a07600355f84137a7&type=album", category: "rings", description:"" },
    { id: 10, name: "Колько Оливковая ветвь", price: 68700, img: "https://sun9-14.userapi.com/impg/rGaKEHQIjCDOGw4pFJk_dS7SSU8GO-znP76TEQ/Nc3WXnO9sP4.jpg?size=1178x968&quality=95&sign=c9ee482b8685627bbf103a65aa126a47&type=album", category: "rings", description:"" },
    { id: 11, name: "Колько Сuore sanguinante", price: 1493229, img: "https://sun1-84.userapi.com/impg/VqmWDlVKmVmbqrsNia-HdJHchT-icYQsSyTjAA/oahx33dabNE.jpg?size=1053x1021&quality=95&sign=bb11f7c594491de15ff346d54f925e11&type=album", category: "rings", description:"" },
    { id: 12, name: "Кольцо Harmony", price: 343750, img: "https://sun1-13.userapi.com/impg/xcg69gSGGfsLMQEOhz6bEdz8BOVIz6lb5ZCE3Q/fulUH4u2fXg.jpg?size=1179x930&quality=95&sign=4a1e6944918843584111f5f79393bd96&type=album", category: "rings", description:"" },
    { id: 13, name: "Кольцо Novo", price: 816000, img: "https://sun9-75.userapi.com/impg/KQGfdvEQa8LkNm66m_fY5azEnjSAcdN8Qa4i6g/B41tboHPHgs.jpg?size=1178x1134&quality=95&sign=44e1c7022ce9a8d9bf771966e2f8d41e&type=album", category: "rings", description:""},
    { id: 14, name: "Колько Peretti", price: 78540, img: "https://sun1-91.userapi.com/impg/eTpSVJGFNRAmgRyeP-32NpBqmLfFdcoIeNA8mg/IDTnZpV2wQg.jpg?size=1178x1095&quality=95&sign=caf1b3a1b8ee4e01a28221656fd19d24&type=album", category: "rings", description:"" },
    { id: 15, name: "Браслет Juste un Clou", price: 811625, img: "https://sun1-56.userapi.com/impg/VdMeOpjzMF0HAHxMSESctziPIMEWAUgOIMjcdA/U7kNlcAH94Y.jpg?size=1179x940&quality=95&sign=f382b6a9fc0dd9c6fe7eb84142dd8763&type=album", category: "bracelets", description:""},
    { id: 16, name: "Браслет Double", price: 271975, img: "https://sun1-13.userapi.com/impg/ufACZBrMxhHzFXQ29lyYORDs_T9I0I55vlZhjg/dioa4Bv3J7g.jpg?size=1178x931&quality=95&sign=4fd862b6d869be8fe728852408df6ef1&type=album", category: "bracelets", description:""},
    { id: 17, name: "Браслет Agrafe", price: 1343750, img: "https://sun1-54.userapi.com/impg/0Qws2uZa17XDmhQKZE8SZYQWKoZTcDBjmgxhfg/WdvmA8twt-E.jpg?size=1178x1007&quality=95&sign=044eed22b4074845fc1ccc8a6592c27a&type=album", category: "bracelets", description:"" },
    { id: 18, name: "Браслет Amulette", price: 144400, img: "https://sun9-67.userapi.com/impg/QM15RLEXZdYt9jEymSeNSsEq2KmQ4uYo7q0SEQ/bxtaoLUzTmU.jpg?size=1178x1175&quality=95&sign=c7c7f5c5b439996d8cce61c7c16d87f6&type=album", category: "bracelets", description:"" },
    { id: 19, name: "Серьги Victoria", price: 1210000, img: "https://sun9-41.userapi.com/impg/VJ4da_6TNRSNaY_nF_Z852uKk5KJ1H1_WN550g/P7qW4SAGS9k.jpg?size=1018x1008&quality=95&sign=d42e0eb74582e125f76cc694c7d8cdcd&type=album", category: "earrings", description:"" },
    { id: 20, name: "Серьги LOVE", price: 865000, img: "https://sun1-19.userapi.com/impg/2MEPTko19oG46NnCV6VoJPBYErxUTdc1dVrhbg/lypYfAi_pF4.jpg?size=914x835&quality=95&sign=cf281f3c58dc85c32e0564458997c846&type=album", category: "earrings", description:"" },
    { id: 21, name: "Серьги Nika", price: 300000, img: "https://sun1-28.userapi.com/impg/-GIdECOqmV-VYb_p_GOnBIL8MmUhflBDSg7sKA/7XiQhu1Cr4c.jpg?size=1170x1139&quality=95&sign=4aecdf01e9953193ac5a48bb4a431a60&type=album", category: "earrings", description:"" },
    { id: 22, name: "Серьги Darina", price: 250000, img: "https://sun1-25.userapi.com/impg/cs_HpU973fgoshFAz9uRy9MLstEvB-p-zNxhZg/0bnWQeb_RsQ.jpg?size=1031x1080&quality=95&sign=5d804ae2697b27ee36fe93fd002a4fc7&type=album", category: "earrings", description:"" },
    { id: 23, name: "Серьги Pre-Owned", price: 154000, img: "https://sun1-94.userapi.com/impg/bqvWW-bzYmixnlkVYi4jQjOPrKLuGy9lzxQcWA/SMAouixHYmw.jpg?size=1152x1043&quality=95&sign=3a60b9d6d18116a9f5a8325e2515631f&type=album", category: "earrings", description:"" },
    { id: 24, name: "Серьги Snake Hearts", price: 57000, img: "https://sun9-62.userapi.com/impg/Zaqe9lMmJyqoWiUMnfij1BJ2-_BpnUtHYVREKQ/4rM6STTQBCU.jpg?size=1030x918&quality=95&sign=42b2007d8ef5414ae1d26e9b26647f47&type=album", category: "earrings", description:"" },
    { id: 25, name: "Серьги Ariadna", price: 320000, img: "https://sun9-24.userapi.com/impg/wEMW9mbvmcyYxFszGfke2BwNiYb4PkzuDXhFHg/EZ3rpn-hbqc.jpg?size=1092x885&quality=95&sign=9cf3a2fd9f584670439749c547d427ee&type=album", category: "earrings", description:""},
    { id: 26, name: "Серьги Varya", price: 170000, img: "https://sun9-75.userapi.com/impg/Ysm-amcAILZPYj7qTef4uiNvFWQUIa0Ud9QStA/T6oaWK8f1Jg.jpg?size=940x848&quality=95&sign=0070a37c087b7dd7bfe5e88d6ccf7f3d&type=album", category: "earrings", description:""},
    { id: 27, name: "Серьги Anna", price: 9772610, img: "https://sun9-50.userapi.com/impg/t9kXNbbq_VD-gqf94EjYmVigsy2jj-NnAdTZzA/FEA7tWWyqpk.jpg?size=1131x804&quality=95&sign=ea9a698b4d1578a5b251a8de655456c5&type=album", category: "earrings", description:""},
    { id: 28, name: "Серьги Angel’s tear", price: 650000, img: "https://sun1-86.userapi.com/impg/WYf0C3cDCd6O09H37X15JGwy5S70J2-ojQHRtA/7HclNIpmYVs.jpg?size=1170x950&quality=95&sign=654c1c6119c0b62866eacb0585e52fca&type=album", category: "earrings", description:""},
    { id: 29, name: "Часы Lady-Datejust", price: 1470000, img: "https://sun1-15.userapi.com/impg/43QWSzbrXwNfqIE5lctp3-xRO02IMKJ8J_DNtg/s0sAJuNch6I.jpg?size=908x880&quality=95&sign=f67e845707b08036eab1e9a0ee05487d&type=album", category: "watch", description:""},
    { id: 30, name: "Часы Tiffany HardWear", price: 947000, img: "https://sun9-80.userapi.com/impg/XERq0si8sifmDc0e7N1fOmuiQaEOfvMd-_EILw/-_Hgjtk3A9c.jpg?size=970x977&quality=95&sign=630fa04d00e9681bca66dc6085845b47&type=album", category: "watch", description:""},
    { id: 31, name: "Часы Pink Sapphire", price: 4300000, img: "https://sun1-86.userapi.com/impg/yq9qRm7dc4zPvSGgwFzxAeNGLtOnXPiN1fkxsQ/AgptWLJ9Azo.jpg?size=1034x1049&quality=95&sign=b2e99a1ee2495a954d852e7600ad0538&type=album", category: "watch", description:""},
    { id: 32, name: "Часы Rose Gold Pearl Silver", price: 3000000, img: "https://sun1-95.userapi.com/impg/2W2ePWuIlFvrmGu8ZRTItn8lXqs9YNCbZLHmzQ/aR_8zwo4-LA.jpg?size=1021x1080&quality=95&sign=a5f0aae7a522734cae01be4c3ed66817&type=album", category: "watch", description:""},
    { id: 33, name: "Часы Tatiana Navka", price: 1157000, img: "https://sun1-20.userapi.com/impg/sET3PjkhRdtBnxgt-P3ECuPg3idxlN0oDONDOQ/bo6kFRnH9z8.jpg?size=1066x1080&quality=95&sign=04fa93a9dc7addbf5e7f705542b3acad&type=album", category: "watch", description:"" },
    { id: 34, name: "Часы Lady-Datejust Oyster", price: 2180000, img: "https://sun1-94.userapi.com/impg/rZab-TE2YqjgFzHBYxnK4rrvCQ6RwYeaziQ52w/2fnQkkiTmcA.jpg?size=1104x1044&quality=95&sign=4c9bb1d166f6a2745d6fd369e56f5606&type=album", category: "watch", description:""},
    { id: 35, name: "Часы Roadster XL Chronograph 2826", price: 2350000, img: "https://sun1-56.userapi.com/impg/T_d7xX4-doWhRw8c_k-6UBm4nIDx8-a3sEYM7Q/3C3ErB4gd7Q.jpg?size=1003x1080&quality=95&sign=b4ae8d93779c8a048bd1cefe192a2a05&type=album", category: "watch", description:""},
    { id: 36, name: "Часы Datejust 41mm Diamonds ", price: 1800000, img: "https://sun1-84.userapi.com/impg/4v8C417guV5MdknceHpIbIk1JUmnC2vH15EeDg/P38iADFnTBw.jpg?size=1022x1080&quality=95&sign=731dd05259c489315068048c92babcf9&type=album", category: "watch", description:"" },
    { id: 37, name: "Часы Ballon Bleu De Cartier", price: 800000, img: "https://sun1-47.userapi.com/impg/PEbfhUWawTeqfKy5vRAql-OKxzQBdkAk90rn3A/Ji0JJLDj320.jpg?size=753x1080&quality=95&sign=9e5efef01ba97b4d20bf54318753e5c2&type=album", category: "watch", description:""},
    { id: 38, name: "Часы Tiffany Eternity", price: 3400000, img: "https://sun1-17.userapi.com/impg/S03gVUFzUM8jJN6zHbymaju-LF1kZ0OEQkefFw/yg1Kx0U3giA.jpg?size=1096x1065&quality=95&sign=d495d5769de96de6cda7fe16a40616c2&type=album", category: "bracelets", description:"" }
  
];

const catalogContainer = document.getElementById("catalog-container");
const buttons = document.querySelectorAll(".filter-btn");

function renderCatalog(category = "all") {
    catalogContainer.innerHTML = "";
    const filteredCatalog = category === "all" ? catalog : catalog.filter(item => item.category === category);
    
    filteredCatalog.forEach(item => {
        catalogContainer.innerHTML += `
            <div class="product" data-category="${item.category}">
                <img src="${item.img}" alt="${item.name}" style="width: 40%; height="auto"">
                <h3>${item.name}</h3>
                <p>${item.price.toLocaleString()} ₽</p>
                <button onclick="addToCart(${item.id})">Добавить в корзину</button>
                <button class="details-btn" data-id="${item.id}">Подробнее</button>
                <p class="product-description" id="desc-${item.id}" style="display: none;">${item.description}</p>
            </div>
        `;
    });

    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", event => {
            const productId = event.target.dataset.id;
            const description = document.getElementById(`desc-${productId}`);
            description.style.display = description.style.display === "none" ? "block" : "none";
        });
    });
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        renderCatalog(category);
    });
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = catalog.find(item => item.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

renderCatalog();