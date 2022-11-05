var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="milli"){

		//this is meter to milli formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "meter" && option_to==="micro"){

		//this is meter to micro formula 
		result.value = Number(input.value) * 1000000;
	}else if(option_from === "meter" && option_to==="nano"){

		//this is meter to nano formula 
		result.value = Number(input.value) * 1000000000;
	}else if(option_from === "meter" && option_to==="mile"){

		//this is meter to mile formula 
		result.value = Number(input.value) / 1609.344;
	}else if(option_from === "meter" && option_to==="yard"){

		//this is meter to yard formula 
		result.value = Number(input.value) * 1.0936;
	}else if(option_from === "meter" && option_to==="foot"){

		//this is meter to foot formula 
		result.value = Number(input.value) * 3.28084;
	}else if(option_from === "meter" && option_to==="inch"){

		//this is meter to inch formula 
		result.value = Number(input.value) * 39.36;

    }else if(option_from === "meter" && option_to==="Centimeter"){

            //this is meter to Centimeter formula 
            result.value = Number(input.value) * 10;


	}else if(option_from === "meter" && option_to==="meter"){
		//this is meter to meter formula 1.0936
		result.value = input.value
	}



	if(option_from === "kilometer" && option_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="Centimeter"){
		//this is kilometer to Centimeter formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "kilometer" && option_to==="milli"){
		//this is kilometer to milli formula 
		result.value = Number(input.value) * 1000000;
	}else if(option_from === "kilometer" && option_to==="micro"){
		//this is kilometer to micro formula 
		result.value = Number(input.value) * 1000000000;
	}else if(option_from === "kilometer" && option_to==="nano"){
		//this is kilometer to nano formula 
		result.value = Number(input.value) * 1000000000000;
	}else if(option_from === "kilometer" && option_to==="mile"){
		//this is kilometer to mile formula 
		result.value = Number(input.value) * 0.62137119;
	}else if(option_from === "kilometer" && option_to==="yard"){
		//this is kilometer to yard formula 
		result.value = Number(input.value) * 1093.6132983;
	}else if(option_from === "kilometer" && option_to==="foot"){
		//this is kilometer to foot formula 
		result.value = Number(input.value) * 3280.84;
	}else if(option_from === "kilometer" && option_to==="inch"){
		//this is kilometer to inch formula 
		result.value = Number(input.value) * 39370.07874;
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "Centimeter" && option_to==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "Centimeter" && option_to==="milli"){
		//this is Centimeter to milli formula 
		result.value = Number(input.value) * 10;
	}else if(option_from === "Centimeter" && option_to==="micro"){
		//this is Centimeter to micro formula 
		result.value = Number(input.value) * 10000;
	}else if(option_from === "Centimeter" && option_to==="nano"){
		//this is Centimeter to nano formula 
		result.value = Number(input.value) * 10000000;
	}else if(option_from === "Centimeter" && option_to==="mile"){
		//this is Centimeter to mile formula 
		result.value = Number(input.value) * 0.0000062137119224;
	}else if(option_from === "Centimeter" && option_to==="yard"){
		//this is Centimeter to yard formula 
		result.value = Number(input.value) * 0.010936;
	}else if(option_from === "Centimeter" && option_to==="foot"){
		//this is Centimeter to foot formula 
		result.value = Number(input.value) * 0.032808;
	}else if(option_from === "Centimeter" && option_to==="inch"){
		//this is Centimeter to inch formula 
		result.value = Number(input.value) * 0.393701;
	}else if(option_from === "Centimeter" && option_to==="Centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}


	if(option_from === "milli" && option_to==="meter"){
		//this is milli to meter formula 
		result.value = Number(input.value) * 0.001;
    }else if(option_from === "milli" && option_to==="kilometer"){
		//this is milli to kilometer formula 
		result.value = Number(input.value) / 1000000;
    }else if(option_from === "milli" && option_to==="Centimeter"){
		//this is milli to Centimeter formula 
		result.value = Number(input.value) * 0.1;
    }else if(option_from === "milli" && option_to==="micro"){
		//this is milli to micro formula 
		result.value = Number(input.value) * 1000;
    }else if(option_from === "milli" && option_to==="nano"){
		//this is milli to nano formula 
		result.value = Number(input.value) * 1000000;
    }else if(option_from === "milli" && option_to==="mile"){
		//this is milli to nano formula 
		result.value = Number(input.value) * 0.000000621;
    }else if(option_from === "milli" && option_to==="yard"){
		//this is milli to yard formula 
		result.value = Number(input.value) * 0.001094;
    }else if(option_from === "milli" && option_to==="foot"){
		//this is milli to foot formula 
		result.value = Number(input.value) * 0.003281;
    }else if(option_from === "milli" && option_to==="inch"){
		//this is milli to inch formula 
		result.value = Number(input.value) * 0.039;
    }else if(option_from === "milli" && option_to==="inch"){
		//this is milli to milli formula 
		result.value = input.value;
    }

    
    if(option_from === "micro" && option_to==="meter"){
		//this is micro to meter formula 
		result.value = Number(input.value) * 0.0000010;
    }else if(option_from === "micro" && option_to==="kilometer"){
		//this is micro to kilometer formula 
		result.value = Number(input.value) * 0.000000001;
    }else if(option_from === "micro" && option_to==="Centimeter"){
		//this is micro to Centimeter formula 
		result.value = Number(input.value) * 0.0001;
    }else if(option_from === "micro" && option_to==="nano"){
		//this is micro to nano formula 
		result.value = Number(input.value) * 1000;
    }else if(option_from === "micro" && option_to==="mile"){
		//this is micro to mile formula 
		result.value = Number(input.value) / 1609344000;
    }else if(option_from === "micro" && option_to==="yard"){
		//this is micro to yard formula 
		result.value = Number(input.value) / 914,400;
    }else if(option_from === "micro" && option_to==="foot"){
		//this is micro to foot formula 
		result.value = Number(input.value) / 304800;
    }else if(option_from === "micro" && option_to==="inch"){
		//this is micro to inch formula 
		result.value = Number(input.value) / 254000;
    }else if(option_from === "micro" && option_to==="micro"){
		//this is micro to micro formula 
		result.value = input.value;
    }

    if(option_from === "nano" && option_to==="meter"){
		//this is nano to meter formula 
		result.value = Number(input.value) * 0.000000001;
    }else if(option_from === "nano" && option_to==="kilometer"){
		//this is nano to kilometer formula 
		result.value = Number(input.value) / 1000000000000;
    }else if(option_from === "nano" && option_to==="Centimeter"){
		//this is nano to Centimeter formula 
		result.value = Number(input.value) / 10000000;
    }else if(option_from === "nano" && option_to==="milli"){
		//this is nano to milli formula 
		result.value = Number(input.value) * 0.000001;
    }else if(option_from === "nano" && option_to==="micro"){
		//this is nano to micro formula 
		result.value = Number(input.value) / 1000;
    }else if(option_from === "nano" && option_to==="mile"){
		//this is nano to mile formula 
		result.value = Number(input.value) / 1609344000000;
    }else if(option_from === "nano" && option_to==="yard"){
		//this is nano to yard formula 
		result.value = Number(input.value) / 914400000;
    }else if(option_from === "nano" && option_to==="foot"){
		//this is nano to foot formula 
		result.value = Number(input.value) / 304800000;
    }else if(option_from === "nano" && option_to==="inch"){
		//this is nano to inch formula 
		result.value = Number(input.value) / 25400000;
    }else if(option_from === "nano" && option_to==="nano"){
		//this is nano to nano formula 
		result.value = input.value;
	}

	if(option_from === "mile" && option_to==="meter"){
		//this is Mile to meter formula 
		result.value = Number(input.value) * 1609.344;
    }else if(option_from === "mile" && option_to==="kilometer"){
		//this is mile to kilometer formula 
		result.value = Number(input.value) * 1.609344;
    }else if(option_from === "mile" && option_to==="Centimeter"){
		//this is mile to Centimeter formula 
		result.value = Number(input.value) * 160934.4;
    }else if(option_from === "mile" && option_to==="milli"){
		//this is mile to milli formula 
		result.value = Number(input.value) * 1609344;
    }else if(option_from === "mile" && option_to==="micro"){
		//this is mile to micro formula 
		result.value = Number(input.value) * 1609344000;
    }else if(option_from === "mile" && option_to==="nano"){
		//this is mile to nano formula 
		result.value = Number(input.value) * 1609344000000;
    }else if(option_from === "mile" && option_to==="yard"){
		//this is mile to yard formula 
		result.value = Number(input.value) * 1760;
    }else if(option_from === "mile" && option_to==="foot"){
		//this is mile to foot formula 
		result.value = Number(input.value) * 5280;
    }else if(option_from === "mile" && option_to==="foot"){
		//this is mile to foot formula 
		result.value = Number(input.value) * 63360;
    }else if(option_from === "mile" && option_to==="foot"){
		//this is mile to mile formula 
		result.value = input.value;
	}

	if(option_from === "yard" && option_to==="meter"){
		//this is yard to meter formula 
		result.value = Number(input.value) * 0.9144;
    }else if(option_from === "yard" && option_to==="kilometer"){
		//this is yard to kilometer formula 
		result.value = Number(input.value) * 0.000914;
    }else if(option_from === "yard" && option_to==="Centimeter"){
		//this is yard to Centimeter formula 
		result.value = Number(input.value) * 91.44;
    }else if(option_from === "yard" && option_to==="milli"){
		//this is yard to milli formula 
		result.value = Number(input.value) * 914.4;
    }else if(option_from === "yard" && option_to==="micro"){
		//this is yard to micro formula 
		result.value = Number(input.value) * 914400;
    }else if(option_from === "yard" && option_to==="micro"){
		//this is yard to micro formula 
		result.value = Number(input.value) * 914400000;
    }else if(option_from === "yard" && option_to==="mile"){
		//this is yard to mile formula 
		result.value = Number(input.value) * 0.0005681818;
    }else if(option_from === "yard" && option_to==="foot"){
		//this is yard to foot formula 
		result.value = Number(input.value) * 3;
    }else if(option_from === "yard" && option_to==="inch"){
		//this is yard to inch formula 
		result.value = Number(input.value) * 36;
    }else if(option_from === "yard" && option_to==="yard"){
		//this is yard to yard formula 
		result.value = input.value
	}

	if(option_from === "foot" && option_to==="meter"){
		//this is foot to meter formula 
		result.value = Number(input.value) * 0.3048;
    }else if(option_from === "foot" && option_to==="kilometer"){
		//this is foot to kilometer formula 
		result.value = Number(input.value) * 0.000305;
    }else if(option_from === "foot" && option_to==="Centimeter"){
		//this is foot to Centimeter formula 
		result.value = Number(input.value) * 30.48;
    }else if(option_from === "foot" && option_to==="milli"){
		//this is foot to milli formula 
		result.value = Number(input.value) * 304.8;
    }else if(option_from === "foot" && option_to==="micro"){
		//this is foot to micro formula 
		result.value = Number(input.value) * 304800;
    }else if(option_from === "foot" && option_to==="nano"){
		//this is foot to nano formula 
		result.value = Number(input.value) * 304800000;
    }else if(option_from === "foot" && option_to==="mile"){
		//this is foot to mile formula 
		result.value = Number(input.value) * 0.000189393939;
    }else if(option_from === "foot" && option_to==="yard"){
		//this is foot to yard formula 
		result.value = Number(input.value) *  0.33333;
    }else if(option_from === "foot" && option_to==="inch"){
		//this is foot to inch formula 
		result.value = Number(input.value) *  12;
    }else if(option_from === "foot" && option_to==="foot"){
		//this is foot to foot formula 
		result.value = input.value;
	}

	if(option_from === "inch" && option_to==="meter"){
		//this is inch to meter formula 
		result.value = Number(input.value) * 0.0254;
    }else if(option_from === "inch" && option_to==="kilometer"){
		//this is inch to kilometer formula 
		result.value = Number(input.value) * 0.0000254;
    }else if(option_from === "inch" && option_to==="Centimeter"){
		//this is inch to Centimeter formula 
		result.value = Number(input.value) * 2.54;
    }else if(option_from === "inch" && option_to==="milli"){
		//this is inch to milli formula 
		result.value = Number(input.value) * 25.4;
    }else if(option_from === "inch" && option_to==="micro"){
		//this is inch to micro formula 
		result.value = Number(input.value) * 25400;
    }else if(option_from === "inch" && option_to==="nano"){
		//this is inch to nano formula 
		result.value = Number(input.value) * 25400000;
    }else if(option_from === "inch" && option_to==="mile"){
		//this is inch to mile formula 
		result.value = Number(input.value) * 0.0000157828283;
    }else if(option_from === "inch" && option_to==="yard"){
		//this is inch to yard formula 
		result.value = Number(input.value) * 0.27778;
    }else if(option_from === "inch" && option_to==="foot"){
		//this is inch to foot formula 
		result.value = Number(input.value) * 0.083333;
    }else if(option_from === "inch" && option_to==="inch"){
		//this is inch to inch formula 
		result.value = input.value;
	}
	}