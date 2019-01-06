Give me an ISO 3166-1 alpha-2 country code and I'll tell you if it's a member of the European Union.

## Example Code

    var isEuMember = require("is-eu-member").isEuMember,
    getEuMembers = require("is-eu-member").getEuMembers;
    console.log(getEuMembers());
    console.log(isEuMember("CH")); // false
    console.log(isEuMember("DE")); // true
