
baris_produk.innerHTML = ""
var data_mentah = {
    "Arabica": [
        {
            "nama": "Arabica Gayo",
            "foto": "images/produk/product_capuchino.jpg",
            "harga": "25.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Arabica Papua",
            "foto": "images/produk/product_espresso.jpg",
            "harga": "15.000",
            "size": "100 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Arabica Jawa",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBvX2ja0UZYPwrRVd6kV3WjC63d5Yi8NzZwKbKmaopg&s",
            "harga": "20.000",
            "size": "100 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Arabica Toraja",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66xKgUwuLOpd1t7oUUgdQ1fAglIdnELqwzA&s",
            "harga": "25.000",
            "size": "100 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Robusta": [
        {
            "nama": "Kopi Susu",
            "foto": "images/produk/product_kopi_susu.jpg",
            "harga": "10.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Robusta Temanggung",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SNSfmK3Ia_sMjDlOLQOTFiPtAl04FJT6CQ&s",
            "harga": "18.000",
            "size": "90 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Robusta Flores",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUie3iowZlKXG3eQX4WxpjLrM8P-6L0_5vQ&s",
            "harga": "20.000",
            "size": "100 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Kopi Hijau",
            "foto": "https://www.aspirasionline.com/wp-content/uploads/2017/02/guspri-kopi-hijau.jpg",
            "harga": "20.000",
            "size": "100 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
    ],
    "Non Kopi": [
        {
            "nama": "Es Teh Manis",
            "foto": "https://fajar.co.id/wp-content/uploads/2023/09/IMG_0741.jpg",
            "harga": "10.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/ea,ifjlesjfi"
        },
        {
            "nama": "Lemon Tea",
            "foto": "https://cdn0-production-images-kly.akamaized.net/tE43LQJ2uJ4sl8PxyiHPMMh8yhs=/0x316:749x738/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4497936/original/058587100_1689043273-shutterstock_1671342028.jpg",
            "harga": "25.000",
            "size": "200 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Matcha",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreq7MuJbbdGFG6e2jONIczNuOUhjCa-RgQXQIsDGqOMw4Om56J-nph7b8TNwazi0SAys&usqp=CAU",
            "harga": "20.000",
            "size": "100 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Red Velvet",
            "foto": "https://freshpowderdrink.com/wp-content/uploads/2021/02/RED-VELVET-DRINK-min.jpg",
            "harga": "27.000",
            "size": "300 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Camilan": [
        {
            "nama": "Mendoan",
            "foto": "https://cdnwpseller.gramedia.com/wp-content/uploads/2022/11/mendoan.jpg",
            "harga": "15.000",
            "size": "10pcs",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Tahu Bakso",
            "foto": "https://cdn.yummy.co.id/content-images/images/20220415/3V3ISYmHldZc331vkHtnWWyHeXhN5TG2-31363439393730393831d41d8cd98f00b204e9800998ecf8427e.jpg?x-oss-process=image/resize,w_388,h_388,m_fixed,x-oss-process=image/format,webp",
            "harga": "15000",
            "size": "5pcs",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Tahu Walik",
            "foto": "https://cdn0-production-images-kly.akamaized.net/cvY4AUdF0HqVrDRfzZCnGsxBIiQ=/0x19:999x582/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3860025/original/004938400_1640874948-shutterstock_1828969904.jpg",
            "harga": "10000",
            "size": "8pcs",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Kentang Goreng",
            "foto": "https://kurio-img.kurioapps.com/22/02/11/8d92a2db-8a28-40e6-9a01-1ab859af5db0.jpe",
            "harga": "18000",
            "size": "1 porsi",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
    ]
}

console.log("data mentah:", data_mentah)
function updateSelect() {
    select_kopi.innerHTML = '<option selected disabled>-</option>'
    Object.keys(data_mentah).forEach(function (opsi) {
        select_kopi.innerHTML += '<option value="' + opsi + '">' + opsi + '</option>'
    })
    console.log("Melakukan Update Select")
}
updateSelect();
var data_kopi = []
select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Customer Memilih " + pilihan)
    data_kopi = data_mentah[pilihan]
    console.log("isi data_kopi = ", data_kopi)
    updateTampilan()
}

function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>
                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-primary fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <a href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart4"></i> Beli</a>
                    </div>
                </div>
            </div>`
    })
}
alert("Hallo Semuanya!")