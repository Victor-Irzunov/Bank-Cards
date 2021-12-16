const dataCards = [
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
]

let elemBox = document.querySelector('.block__list')
const list = dataCards.map(el => {
	return `
	<li>
		<div class="list__box">
			<div>
				<span>
					${el.num}
				</span>
				<img class="logo" src=${el.img}>
			</div>
			<div>
				<i class="fa fa-pencil" aria-hidden="true"></i>
				<i class="fa fa-credit-card" aria-hidden="true"></i>
				<i class="fa fa-trash" aria-hidden="true"></i>
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
						<h5 class="cardHolder">Name</h5>
						<img class="logo__card" src=${el.img}>
				</div>
				<div class="face back">
					<div class="blackbar"></div>
					<div class="ccvText">
						<h5>Autorized Signature-not valid unless signed</h5>
						<div class="whitebar"></div>
						<div class="ccv">123</div> 
					</div>
					<p class="text">${el.comment}</p>
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
		switch (event.target.className) {
			case 'fa fa-credit-card': el.childNodes[3].classList.toggle('active')
				break
			case 'fa fa-times': el.childNodes[3].classList.toggle('active')
				break
			case 'fa fa-pencil': el.classList
				break
			case 'fa fa-pencil': el.classList
				break
		}
	})
})


//scroll
const elementAll = document.querySelectorAll('.scroll');
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
const blockAddCard = document.querySelector('.block__add')
const openModalAddCard = () => {
	blockAddCard.classList.add('active')
}
const closeModalAddCard = () => {
	blockAddCard.classList.remove('active')
}