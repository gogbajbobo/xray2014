$(document).ready(function() {

	// console.log('document ready');

	loadXMLs();

});

function loadXMLs() {

	// console.log('loadXMLs');

	$('title').text('Конференция «Рентгеновская оптика — 2014», г. Черноголовка, Общая информация');

	$('div.canvas').children().each(function() {

		var current_menu_id = localStorage.getItem('current_menu_item') ? localStorage.getItem('current_menu_item') : 'main';
		var attr_id = $(this).attr('id');
		var path = 'xml/' + attr_id + '.xml';

		if (attr_id != 'content_envelope') {

			jQuery.get(path, function(data, textStatus, xhr) {

				$('div#' + attr_id).append(data);
				if (attr_id == 'menu') {

					$('ul li').each(function() {
						setActiveMenuItem($(this));
					});
					setCurrentMenuItem($('li#'+current_menu_id));

				}

			}, 'text');

		// } else {

		// 	jQuery.get('xml/main.xml', function(data, textStatus, xhr) {
		// 		$('div#content_envelope').append(data);
		// 	}, 'text');

		}

	});

}

function setCurrentMenuItem(menu_item) {

	var selectedMenuItem = $('li.current_menu_item');
	selectedMenuItem.removeClass('current_menu_item');
	setActiveMenuItem(selectedMenuItem);

	menu_item.unbind('click');
	menu_item.addClass('current_menu_item');
	menu_item.css('cursor', 'default');
	localStorage.setItem('current_menu_item', menu_item.attr('id'));

	var path = 'xml/' + menu_item.attr('id') + '.xml';
	jQuery.get(path, function(data, textStatus, xhr) {
		console.log(data);
		$('div#content_envelope').empty();
		$('div#content_envelope').append(data);
	}, 'text');




}

function setActiveMenuItem(menu_item) {

	// console.log(menu_item);
	menu_item.css('cursor', 'pointer');
	menu_item.click(function(event) {
		setCurrentMenuItem(menu_item);
	});

}


