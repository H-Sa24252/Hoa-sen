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
        <p>Hoa sen là loài hoa nổi tiếng trong văn hóa Việt Nam, được coi là biểu tượng của tinh thần thanh cao, trong sáng và kiên cường. Dù mọc lên từ bùn lầy, hoa sen vẫn giữ được vẻ đẹp tươi sáng và thơm tho, gợi lên hình ảnh của tâm hồn thuần khiết vượt khó khăn.
Trong Phật giáo, hoa sen còn mang ý nghĩa sâu sắc về sự giác ngộ, trí tuệ và giải thoát, thể hiện qua tư thế Đức Phật ngồi trên tòa sen trong nhiều tác phẩm nghệ thuật.</p>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Lotus_flower_%28978659%29.jpg/1280px-Lotus_flower_%28978659%29.jpg" 
     alt="Hoa sen" 
     width="400">`
    );
}

/* 2. Mô tả */
function moTa() {
    chuyenNoiDung(
        `<h2>Mô tả về hoa sen</h2>
        <p>Hoa sen (tên khoa học Nelumbo nucifera) là một loài thực vật thủy sinh thường sống ở ao hồ và đầm lầy.
           Đặc điểm chính:
           Hoa nhiều cánh, hương thơm nhẹ kéo dài.
           Lá to, tròn, có khả năng đẩy nước khỏi bề mặt nhờ cấu trúc đặc biệt.
           Màu sắc: sen hồng, sen trắng, sen vàng…
           Sen không chỉ là loài cây đẹp mà còn gắn bó mật thiết với đời sống con người Việt Nam từ xưa đến nay.</p>
        <img src="https://cdnnews.mogi.vn/news/wp-content/uploads/2023/02/12215512/y-nghia-cua-hoa-sen-1.jpg" width="300">`
    );
}

/* 3. Các loại */
function cacLoai() {
    document.getElementById("content").innerHTML = `
        <h2>Các loại Hoa Sen</h2>
        <div class="lotus-box">
            <h3>🌸 Sen hồng</h3>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230901/pngtree-lotus-flower-is-a-pink-flower-that-is-surrounded-image_13145417.jpg" width="300">
            <p>Sen hồng là loại phổ biến nhất tại Việt Nam, tượng trưng cho sự cao quý và tinh thần từ bi trong Phật giáo.</p>
        </div>
        <div class="lotus-box">
            <h3>🤍 Sen trắng</h3>
            <img src="https://salena.com.vn/wp-content/uploads/2022/05/hoa-sen-trang-10.jpg" width="300">
            <p>Sen trắng biểu tượng cho sự thuần khiết, thanh thoát và tâm hồn trong sáng.</p>
        </div>
        <div class="lotus-box">
            <h3>💛 Sen vàng</h3>
            <img src="https://bizweb.dktcdn.net/100/449/470/files/y-nghia-cua-hoa-sen-vang.jpg?v=1722870566679" width="300">
            <p>Sen vàng gắn với trí tuệ, ánh sáng và sự giác ngộ.</p>
        </div>
        <div class="lotus-box">
            <h3>💙 Sen xanh</h3>
            <img src="https://gom10.vn/uploads/news/8569b4cd0127d7774cc5533e08082b23.jpg" width="300">
            <p>Sen xanh đại diện cho ý chí mạnh mẽ, trí tuệ và khát vọng vươn lên.</p>
        </div>
    `;
}

/* 4. Công dụng */
function congDung() {
    chuyenNoiDung(
        `<h2>Công dụng của hoa sen</h2>
        <ul>
            <li>Ngoài giá trị thẩm mỹ và văn hóa, hoa sen còn được sử dụng rộng rãi trong đời sống:
        Hạt sen: Làm thực phẩm (chè, hạt khô) và các bài thuốc an thần, giải nhiệt.
        Ngó sen: Làm gỏi, món xào trong ẩm thực.
        Lá sen: Dùng gói đồ ăn, làm trà.
        Tâm sen: Dùng pha trà giúp thư giãn, tinh thần an yên.
        Hoa sen trong trang trí: Xuất hiện trong tranh ảnh, kiến trúc, đồ gốm.</li>
        </ul>
        <img src="https://suckhoedoisong.qltns.mediacdn.vn/Images/thanhloan/2016/07/02/9-tac-dung-it-biet-cua-hoa-sen-3.jpg" width="300">`
    );
}

/* 5. Ý nghĩa trong Phật giáo */
function yNghia() {
    chuyenNoiDung(
        `<h2>Ý nghĩa của hoa sen trong Phật giáo</h2>
        <p>Trong Phật giáo, hoa sen là biểu tượng của sự thanh tịnh, giác ngộ và giải thoát.
        Sen mọc từ bùn lầy nhưng không nhiễm bùn thể hiện hình ảnh con người vượt qua khổ đau, đấu tranh với nhục dục để đạt đến an lạc.
        Đức Phật ngồi trên tòa sen là biểu tượng của tri thức vẹn toàn, giác ngộ tối thượng.
        Hoa sen còn xuất hiện trong nhiều kinh điển, tranh tượng và lễ nghi Phật giáo, tượng trưng cho tâm hồn trong sáng và trí tuệ sáng rõ.
        Với người tu hành, sen không chỉ là hoa đẹp mà còn là phương pháp tu luyện tâm linh, hướng đến giải thoát vô lượng.</p>
        <p>Dưới đây là bài học rất hay về hoa sen mà Đức Phật đã dạy:</p>
        <br>
        <iframe width="400" height="400" src="https://www.youtube.com/embed/NZEbpNVH0nk" title="Đức Phật Thuyết Giảng Bài Học Về Hoa Sen Rất Hay🪷🪷🪷#shorts #duongvexuphat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    );
}
document.addEventListener("DOMContentLoaded", function() {
    const firstMenu = document.querySelector(".menu-item");
    setActive(firstMenu);
    trangChu();
});
