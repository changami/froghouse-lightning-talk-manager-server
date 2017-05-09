(function () {
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', ()=>{
		const presentations = JSON.parse(xhr.responseText);
		const html = presentations.map(d=>`<li>${d.title} by ${d.speaker}</li>`);
		document.querySelector('#presentations').innerHTML = html;
	});
	xhr.open('GET', '/presentations');
	xhr.send();
})();
