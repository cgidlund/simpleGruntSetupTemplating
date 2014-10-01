var MYSCRIPT = MYSCRIPT || {};

MYSCRIPT = function (scope) {

	if (!window.jQuery)
		throw new Error('jQuery is required');

	jQuery(function () {
		if (MYSCRIPT && MYSCRIPT.init)
			MYSCRIPT.init();
		else
			throw new Error('Init failed');
	});
	return {

		init: function () {}
	};
}(window);
