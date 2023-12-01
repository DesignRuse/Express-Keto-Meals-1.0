window.addEventListener('DOMContentLoaded', function () {

	var copyUrls = document.getElementsByClassName('copy-url');

	for (var i = 0; i < copyUrls.length; i++) {
		copyUrls[i].addEventListener('click', async function (e) {
			e.preventDefault();

			var link = this.getAttribute('link');
			console.log(link);
			try {
				await navigator.clipboard.writeText(link);
				alert("Copied the text: " + link);
			} catch (err) {
				console.error(err);
			}
		});
	}
});