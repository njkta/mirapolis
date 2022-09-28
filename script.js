window.onload = () => {
	let folder = document.querySelectorAll('.icon')
	let folderOpen = false

	folder.forEach(el => {

		el.addEventListener('click', () =>{
			let folderElement = el.parentElement
			folderElement.classList.toggle('active')
			if (folderElement.getAttribute('class').includes('active')){
				el.children[0].setAttribute('src', 'img/opened-folder.svg')
			} else {
				el.children[0].setAttribute('src', 'img/folder.svg')
			}
			el.classList.toggle('icon-opened')
		})
	})

}