window.addEventListener('DOMContentLoaded', function () {

	var stylings = document.getElementsByClassName('styling');

	for (var i = 0; i < stylings.length; i++) {
		stylings[i].addEventListener('click', async function (e) {
			e.preventDefault();

			var link = this.parentElement.href;
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