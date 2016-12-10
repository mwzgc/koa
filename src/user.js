
function getUser(time = 1000) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("Hello World!");
		}, time);
	})
}

exports.getUser = getUser;
//module.exports = Dog;

<<<<<<< HEAD
//hello World
=======
// test test test
>>>>>>> 6587c99c7d7d1158c6fe16f2a560cbdb0a15618e
