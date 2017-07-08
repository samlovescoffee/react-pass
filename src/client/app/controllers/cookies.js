const cookie = {
	write: function setCookie(cname, cvalue, exdays) {
		let d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	},

	read: function getCookie(name) {
		let re = new RegExp(name + "=([^;]+)");
		let value = re.exec(document.cookie);
		return (value !== null) ? unescape(value[1]) : null;
	}
};

module.exports = cookie;
