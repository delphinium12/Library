const gnblis = document.querySelectorAll('#header .gnb>li');
const sublis = document.querySelectorAll('#header .sub');

gnblis.forEach((item, idx) => {
    item.addEventListener('mouseenter', (e) => {
        sublis.forEach((itemSub) => {
            itemSub.classList.remove('on');
        });
        sublis[idx].classList.add('on');
    });
    item.addEventListener('mouseleave', (e) => {
        item.classList.remove('on');
        sublis[idx].classList.remove('on');
    });
});
