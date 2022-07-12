const token = 'Smvsmh7l1ehiy3WJYAiog3OOw2FDDijs'

const email = 'jevid15699@steamoh.com'

const empty = {
    "success" : false,
    "error" : {
       "code" : 210,
       "type" : "no_email_address_spplied"
    }
 }

const notValid = {
    "success" : false,
    "error" : {
       "code" : 211,
       "type" : "format_not_valid"
    }
 }

 const notSupplied = {
    "success" : false,
    "error" : {
       "code" : 101,
       "type" : "missing_access_key",
       "info" : "You have not supplied an API Access Key. [Required format: access_key=YOUR_ACCESS_KEY]"
    }
 }

const witoutApiKey = {
    "message": "No API key found in request"
    };
export {token, email,empty, notValid, notSupplied, witoutApiKey} 