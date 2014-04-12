window.onload = function() {
	showIEMessage();
}

function showIEMessage() {

	var messageDiv = document.getElementById('content_envelope');
	var title = document.createTextNode('Конференция «Рентгеновская оптика — 2014», г. Черноголовка');
	messageDiv.appendChild(title);
	
	var br = document.createElement('br');
	messageDiv.appendChild(br);

	var messageSpan = document.createElement('span');
	var message = document.createTextNode('К сожалению, вы используете устаревшую версию Internet Explorer. Попробуйте любой другой браузер или Internet Explorer версии 9 и выше.');
	messageSpan.appendChild(message);
	messageDiv.appendChild(messageSpan);

}