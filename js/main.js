/*jslint browser: true, devel: true */
(function () {
	'use strict';

	var ele = document.querySelectorAll('article, aside');

	ele = Array.prototype.slice.call(ele, 0);
	ele.forEach(function (e) {
		e.style.height = window.getComputedStyle(e.parentNode, null).height;
	});
}());
