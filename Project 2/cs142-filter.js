'use strict'

Array.prototype.cs142filter = function(element, func) {
	var result = [];
	var array = Object(this);
	var length = array.length;
	for (var i = 0; i < length; i++) {
		var val = array[i];
		if (func.call(undefined, element, val)) {
			result.push(val);
		}
	}
	return result;
}