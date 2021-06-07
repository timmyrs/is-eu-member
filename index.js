exports.getEuMembers = function()
{
	return ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE"];
};
exports.isEuMember = function(code)
{
	return exports.getEuMembers().indexOf(code.toUpperCase()) != -1;
};
