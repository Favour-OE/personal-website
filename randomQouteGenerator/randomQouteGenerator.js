function getNewRandomQoute() {
	fetch("http://api.quotable.io/random")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network Response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
            const qouteText = data.content;
            const qouteAuthor = data.author;
            document.getElementById('random-qoute-text').innerHTML = qouteText
            document.getElementById("random-qoute-author").innerHTML = qouteAuthor;
		})
		.catch((error) => {
			console.error(
				"There was a problem with the fetch operation: ",
				error
			);
		});
}
