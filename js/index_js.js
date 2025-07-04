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

const arr = [
    {
        name: '적대 정치청산과 개헌을 말하다 <br/>: 한국 민주주의 구출하기',
        sub: '강원택, 서정건, 장영수, 성낙인, 염재호, 최장집 지음',
        url: 'https://www.nanet.go.kr/datasearch/weeknewbook/selectWeekNewBookDetail.do?pageIndex=2&searchSeq=13766&fr=on&searchWeeks=&searchKeyCode=all&searchKeyWord=',
    },
    {
        name: '트럼프 2.0과 에너지대전환',
        sub: '유승훈, 이재호 지음',
        url: 'https://www.nanet.go.kr/datasearch/weeknewbook/selectWeekNewBookDetail.do?pageIndex=2&searchSeq=13767&fr=on&searchWeeks=&searchKeyCode=all&searchKeyWord=',
    },
    {
        name: '소크라테스는 왜 죽었을까?',
        sub: '김웅 지음',
        url: 'https://www.nanet.go.kr/datasearch/weeknewbook/selectWeekNewBookDetail.do?pageIndex=2&searchSeq=13768&fr=on&searchWeeks=&searchKeyCode=all&searchKeyWord=',
    },
];

const img = document.querySelectorAll('.con3 .book p');
const title = document.querySelector('.con3 .bookinfo strong');
const sub = document.querySelector('.con3 .bookinfo p');
const btn = document.querySelector('.con3 .bookinfo button');

let cnt = 0,
    imgurl = '',
    size = img.length;

img.forEach((item, idx) => {
    item.addEventListener('click', () => {
        cnt = idx;
        title.innerHTML = arr[cnt].name;
        sub.textContent = arr[cnt].sub;
        btn.onclick = () => {
            window.open(arr[cnt].url);
        };

        img.forEach((imgs) => imgs.classList.remove('on'));
        item.classList.add('on');
    });
});
