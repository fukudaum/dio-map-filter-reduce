const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

const array = [1, 2, 3, 4, 5];

function mapArray(arr, thisArg) {
	return arr.map(function (item) {
		return item * this.price;
	}, thisArg);
}

console.log(mapArray(mapArray, orange));