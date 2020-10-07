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
