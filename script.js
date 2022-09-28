window.onload = () => {
	let folder = document.querySelectorAll('.icon')

	folder.forEach(el => {

		el.addEventListener('click', () =>{
			el.parentElement.classList.toggle('active')
			el.classList.toggle('icon-opened')
		})
	})

}