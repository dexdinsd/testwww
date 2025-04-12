window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	if(window.scrollY > 50){
		header.classList.add('scrolled');
	}else{
		header.classList.remove('scrolled');
	}
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		const targetElement = document.querySelector(targetId);	
		if(targetElement){
			const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({
			  top: elementPosition - 64,
			  behavior: 'smooth'
			})
		}
		document.querySelector('.hamburger').classList.remove('open');
		document.querySelector('.header-nav').classList.remove('open');
	})	
})
document.querySelector('.hamburger').addEventListener('click', function() {
	this.classList.toggle('open');
	document.querySelector('.header-nav').classList.toggle('open');
})