'use strict'

function Cs142TemplateProcessor(template) {
	this.template = template;
	this.fillIn = function (fillObject) {
		var result = "";
		var i = 0;
		while (i < template.length) {
			var open = template.indexOf("{{", i);
			var close = template.indexOf("}}", i);
			result += template.substring(i, open);
			var old = template.substring(open + 2, close);
			var found = false;
			for (var prop in fillObject) {
				if (old === prop) {
					found = true;
					result += fillObject[prop];
				}
			}			
			if (!found) result += "";
			i = close + 2;
		}
		return result;
	}
} 