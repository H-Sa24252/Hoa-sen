function setActive(element) {
    let items = document.getElementsByClassName("menu-item");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    element.classList.add("active");
}

function chuyenNoiDung(noidung) {
    let content = document.getElementById("content");
    content.classList.add("fade-out");

    setTimeout(function () {
        content.innerHTML = noidung;
        content.classList.remove("fade-out");
        content.classList.add("fade-in");
    }, 300);
}

/* 1. Trang chủ */
function trangChu() {
    chuyenNoiDung(
        `<h2>Trang Chủ</h2>
        <p>Hoa sen là biểu tượng của sự tinh khiết và ý chí vươn lên.</p>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Lotus_flower_%28978659%29.jpg/1280px-Lotus_flower_%28978659%29.jpg" 
     alt="Hoa sen" 
     width="400">`
    );
}

/* 2. Mô tả */
function moTa() {
    chuyenNoiDung(
        `<h2>Mô tả về hoa sen</h2>
        <p>Hoa sen là thực vật sống dưới nước, thường mọc ở ao hồ.</p>
        <p>Lá to hình tròn, hoa nhiều cánh và có hương thơm nhẹ.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Lotus_flower.jpg" width="300">`
    );
}

/* 3. Các loại */
function cacLoai() {
    chuyenNoiDung(
        `<h2>Các loại hoa sen</h2>
        <h3>Sen hồng</h3>
        <p>Loại phổ biến nhất, gắn liền với hình ảnh Đức Phật.</p>
        <h3>Sen trắng</h3>
        <p>Biểu tượng của sự thanh khiết.</p>
        <h3>Sen xanh</h3>
        <p>Tượng trưng cho trí tuệ.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Nelumbo_nucifera_white.jpg" width="300">`
    );
}

/* 4. Công dụng */
function congDung() {
    chuyenNoiDung(
        `<h2>Công dụng của hoa sen</h2>
        <ul>
            <li>Hạt sen dùng làm thực phẩm và thuốc.</li>
            <li>Tâm sen pha trà giúp an thần.</li>
            <li>Ngó sen dùng chế biến món ăn.</li>
            <li>Dùng trong trang trí và thờ cúng.</li>
        </ul>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Lotus_Seeds.jpg" width="300">`
    );
}

/* 5. Ý nghĩa trong Phật giáo */
function yNghia() {
    chuyenNoiDung(
        `<h2>Ý nghĩa của hoa sen trong Phật giáo</h2>
        <p>Hoa sen tượng trưng cho sự giác ngộ và thanh tịnh.</p>
        <p>Mọc trong bùn nhưng không bị nhiễm bẩn, giống như con người vượt qua khó khăn để đạt đến sự trong sạch.</p>
        <br>
        <iframe width="328" height="583" src="https://www.youtube.com/embed/NZEbpNVH0nk" title="Đức Phật Thuyết Giảng Bài Học Về Hoa Sen Rất Hay🪷🪷🪷#shorts #duongvexuphat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    );
}