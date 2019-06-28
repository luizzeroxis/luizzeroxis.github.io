var $ = (q) => document.querySelector(q);

class Misc {

	static readFileAsArrayBuffer(file) {
		return new Promise((resolve, reject) => {
			var fileReader = new FileReader();
			fileReader.onload = () => {
				resolve(fileReader.result);
			}
			fileReader.readAsArrayBuffer(file);
		});
	}

	static getHumanSize(value) {
		var symbol = 'B';
		var sizes = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

		sizes.some(size => {
			if (value >= Math.pow(2, 10)) {
				value = value / 1024;
				symbol = size;
			} else {
				return true;
			}
		})

		return parseFloat(value.toFixed(3)) + ' ' + symbol;
	}

	static getHumanTime(value) {
		return Math.floor(value) + ' seconds';
	}
	
}