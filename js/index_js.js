const gnblis = document.querySelectorAll('#header .gnb>li');
const sublis = document.querySelectorAll('#header .sub');
const header = document.querySelector('#header');

gnblis.forEach((item, idx) => {
    item.addEventListener('mouseenter', (e) => {
        sublis.forEach((itemSub) => {
            itemSub.classList.remove('on');
        });
        sublis[idx].classList.add('on');
        item.classList.add('on');
    });

    gnblis.forEach((item, idx) => {
        item.addEventListener('mouseleave', (e) => {
            item.classList.remove('on');
        });
    });

    header.addEventListener('mouseleave', (e) => {
        item.classList.remove('on');
        sublis[idx].classList.remove('on');
    });
});
