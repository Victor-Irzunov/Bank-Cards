let dataCards = [
    {
        num: `4123 3456 7890 1234`,
        img: `./svg/visa.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `visa`,
    },
    {
        num: `5234 1234 1234 1234`,
        img: `./svg/mc.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `master`,
    },
    {
        num: `4876 5432 1098 7654`,
        img: `./svg/visa.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `visa`,
    },
    {
        num: `5123 3456 7890 1234`,
        img: `./svg/mc.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernaturofficiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `master`,
    },
    {
        num: `4678 5678 5678 5678`,
        img: `./svg/visa.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `visa`,
    },
    {
        num: `5876 5432 1098 7654`,
        img: `./svg/mc.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernaturofficiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `master`,
    },


    {
        num: `4678 5678 5678 5678`,
        img: `./svg/visa.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `visa`,
    },
    {
        num: `5876 5432 1098 7654`,
        img: `./svg/mc.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernaturofficiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `master`,
    },{
        num: `4678 5678 5678 5678`,
        img: `./svg/visa.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `visa`,
    },
    {
        num: `5876 5432 1098 7654`,
        img: `./svg/mc.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernaturofficiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `master`,
    },{
        num: `4678 5678 5678 5678`,
        img: `./svg/visa.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `visa`,
    },
    {
        num: `5876 5432 1098 7654`,
        img: `./svg/mc.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernaturofficiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `master`,
    },{
        num: `4678 5678 5678 5678`,
        img: `./svg/visa.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernatur officiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `visa`,
    },
    {
        num: `5876 5432 1098 7654`,
        img: `./svg/mc.svg`,
        comment: `Lorem ipsum dolor sit amet conse. Lopsum dolor sit amet consectetur adipisicing elitDeleniti possimus officiis libero sint aspernatur possimus officiis libero sint aspernaturofficiis libero sint aspernatur possimus officiis libero sint aspernatur.`,
        class: `master`,
    },
]

let elemBox = document.querySelector('.block__list')
const validErr = document.querySelector('.valid__err')
const number = document.querySelector('.number2')
const input = document.querySelector('input[type="text"]')
const commit = document.querySelector('.commit')
const text = document.querySelector('.text__text')
const card = document.querySelector('.card2')
const elementAll = document.querySelectorAll('.scroll')
const blockAddCard = document.querySelector('.block__add')

//delete Card
const deleteCard = num => {
    const filterDataCards = dataCards.filter(el =>el.num !== num)
    sessionStorage.setItem('cards', JSON.stringify(filterDataCards))
    location.reload();
}

if (sessionStorage.getItem('cards')) {
    const dataCardsSession = sessionStorage.getItem('cards')
    dataCards = JSON.parse(dataCardsSession)
}


const list = dataCards.map(el => {
    return `
	<li>
		<div class="list__box">
			<div>
				<span class="span">
					${el.num}
				</span>
				<img class="logo" src=${el.img}>
			</div>
			<div>
				<i class="fa fa-credit-card" aria-hidden="true"></i>
				<i 
				class="fa fa-trash" 
				aria-hidden="true"
				onclick="deleteCard('${el.num}')"
				></i>
			</div>
			<div class="scroll">
				<span>
					${el.comment}
				</span>
			</div>
		</div>

		<div class="list__card">
			<i class="fa fa-times" aria-hidden="true"></i>
			<div class="card">
				<div class="face front ${el.class}">
						<h3 class="debit">Card</h3>
						<h3 class="bank">Bank Name</h3>
						<img src="./images/chip.png" class="chip">
						<i class="fas fa-wifi" aria-hidden="true"></i>
						<h3 class="number">${el.num}<br></h3>
						<h5 class="valid"><span>Valid<br>Thru</span><span>12/23</span></h5>
						<h5 class="card__holder">Name</h5>
						<img class="logo__card" src=${el.img}>
				</div>
				<div class="face back ${el.class}">
					<div class="black__bar"></div>
					<div class="ccvText">
						<h5>Autorized Signature-not valid unless signed</h5>
						<div class="white__bar"></div>
						<div class="ccv">123</div> 
					</div>
					<p class="text__commit">${el.comment}</p>
				</div>
			</div>
		</div>
	</li>
	`
})
const html = `<ul>${list.join('')}</ul>`
elemBox.innerHTML = html


//card
document.querySelectorAll('li').forEach(el => {
    el.addEventListener('click', event => {
        // console.log('el.childNodes:', el.childNodes[1])
        switch (event.target.className) {
            case 'fa fa-credit-card':
                el.childNodes[3].classList.toggle('active')
                break
            case 'fa fa-times':
                el.childNodes[3].classList.toggle('active')
                break
            case 'fa fa-pencil':
                el.classList
                break
            case 'fa fa-trash':
                el.classList
                break
        }
    })
})

//scroll
let isDown = false,
    startX,
    scrollLeft;
elementAll.forEach(element => {
    element.addEventListener('mousedown', e => {
        isDown = true;
        element.classList.add('active');
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
    });
    element.addEventListener('mouseleave', () => {
        isDown = false;
        element.classList.remove('active');
    });
    element.addEventListener('mouseup', () => {
        isDown = false;
        element.classList.remove('active');
    });
    element.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 3;
        element.scrollLeft = scrollLeft - walk;
    });
})


//modal add card
const openModalAddCard = () =>  blockAddCard.classList.add('active')
const closeModalAddCard = () =>  blockAddCard.classList.remove('active')

commit.addEventListener('focus', () => {
    card.classList.add('active')
    text.classList.add('active')
})
commit.addEventListener('blur', () => {
    card.classList.remove('active')
    text.classList.remove('active')
})
commit.addEventListener('keyup', e => text.innerHTML = e.target.value)
input.addEventListener('focus', () => number.classList.add('active'))
input.addEventListener('blur', () => number.classList.remove('active'))

input.addEventListener("keyup", e => {
    number.innerHTML = e.target.value
    const h3 = document.querySelector('.bank__name')
    if (e.target.value[0] === '4') h3.innerHTML = 'Visa'
    else if (e.target.value[0] === "5") h3.innerHTML = 'Master Card'
    else if (e.target.value[0] === "3") h3.innerHTML = 'Amex'
    else if (e.target.value[0] === "6") h3.innerHTML = 'Disc'
    else h3.innerHTML = 'Genric'

    if (e.keyCode !== 8 && e.keyCode != 46) {
        let newValue = e.target.value.replace(/\D/g, "")
        newValue = newValue.replace(/(.{4})/g, "$1 ")
        e.target.value = newValue
    }
})


const addCard = () => {
    const arrNum = []
    if (input.value) arrNum.push(input.value)
    else return

    if (arrNum[0].length < 19) {
        validErr.innerHTML = 'error'
        return
    }
    const numCardStr = arrNum
    const addCardObj = {
        num: numCardStr,
        img: (numCardStr[0] === '4' ? './svg/visa.svg' : '') || (numCardStr[0] === '5' ? './svg/mc.svg' : ''),
        comment: text.value,
        class: (numCardStr[0] === '4' ? 'visa' : '') || (numCardStr[0] === '5' ? 'master' : '')
    }
    dataCards.push(addCardObj)
    sessionStorage.setItem('cards', JSON.stringify(dataCards));
    input.value = ''
    location.reload();
    closeModalAddCard()
}

let phoneMask = IMask(input, {
    mask: '0000 0000 0000 0000',
    lazy: false,
    placeholderChar: '#',
});