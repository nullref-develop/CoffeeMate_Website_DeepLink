// Проброс всех параметров к ссылкам магазинов
const storeIds = ['appstore', 'googleplay', 'appgallery', 'samsung', 'rustore']
const params = window.location.search

storeIds.forEach(id => {
	const link = document.getElementById(id)
	if (link && params) {
		const url = new URL(link.href || "#", window.location.origin)
		url.search = params
		link.href = url.toString()
	}
})