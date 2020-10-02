var api_url = '';
// var api_url = 'http://127.0.0.1:5000/';

function deleteCookies(cname, cvalue, exdays) {
	setCookie(cname, cvalue, exdays);
}

function setCookie(cname, cvalue, exdays) {
	var dt = new Date();
	dt.setTime(dt.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = 'expires=' + dt.toUTCString();
	document.cookie = cname + '=' + cvalue + '; ' + expires;
}
function getCookie(cname) {
	var name = cname + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return '';
}
function checkCookie(cname) {
	cvalue = getCookie(cname);
	if (cvalue != '') {
		return true;
	} else {
		return false;
	}
}


		);
	});
}

function makeAsyncPostRequest(path, queryObject) {
	return new Promise(function (resolve, reject) {
		axios.post(api_url + path, queryObject).then(
			(response) => {
				var returnObj = response.data;
				console.log('Async Post Request');
				resolve(returnObj);
			},
			(error) => {
				reject(error);
			}
		);
	});
}

function black_box_test() {
	window.alert('Black-box testing is a method of software testing that examines the functionality of an application without peering into its internal structures or workings. This method of test can be applied virtually to every level of software testing: unit, integration, system and acceptance.');
}

function if_validateEmail(email) {
	window.alert('validating email');
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}



function makeGetRequest(path) {
	axios.get(api_url + path).then(
		(response) => {
			var returnObj = response.data;
			return returnObj;
		},
		(error) => {
			return error;
		}
	);
}

function makePostRequest(path, queryObject) {
	axios.post(api_url + path, queryObject).then(
		(response) => {
			var returnObj = response.data;
			return returnObj;
		},
		(error) => {
			return error;
		}
	);
}
