window.onload = function() {
    const pageTopBtn = document.getElementById('pageTopBtn');
    const showBtnPosition = 200; // 200px以下でボタンを表示する

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > showBtnPosition) {
            pageTopBtn.classList.add('show');
        } else {
            pageTopBtn.classList.remove('show');
        }
    });
};