
function getUser(time = 1000) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("Hello World!");
		}, time);
	})
}

exports.getUser = getUser;
//module.exports = Dog;

//hello World
