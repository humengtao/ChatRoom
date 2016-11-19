var validator = require('validator');

var LoginValidator={
	validate:(username,password)=>{
      return (
      	// username 长度6-15
      	validator.isLength(username,{min:6,max:15})
      	
      	// password 长度6-15
      	&&validator.isLength(password,{min:6,max:15})

      	// username是否为Ascii值
      	&&validator.isAscii(username)

      	// password是否为Ascii值
      	&&validator.isAscii(password)
      	)
	}
}

module.exports=LoginValidator;