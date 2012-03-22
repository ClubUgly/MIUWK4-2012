    //John Williams
    //March 15, 2012
    //MIU Deliverable 3
    //The Flower Shop

	function autoFillData(){
		var json = {
			"contact1": {
				"fname": ["Name:", "Jay Williams"],
				"email": ["Email:", "jay@fullsail.edu"],
				"url": ["Url:", "www.clubugly.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Daisies"],
				"borndate": ["Date of birth:", "2011-12-09"],
				"quantity": ["Quantity:", "12"],
				"comments": ["Additional Info:", "Make them cold!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact2": {
				"fname": ["Name:", "Alvin Williams"],
				"email": ["Email:", "alvin@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Timeless Tulips"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact3": {
				"fname": ["Name:", "Calvin Williams"],
				"email": ["Email:", "calvin@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact4": {
				"fname": ["Name:", "Tonya Williams"],
				"email": ["Email:", "tonya@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact5": {
				"fname": ["Name:", "Jack Williams"],
				"email": ["Email:", "jack@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "tulips"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact6": {
				"fname": ["Name:", "Carr Williams"],
				"email": ["Email:", "carr@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "lilies"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact7": {
				"fname": ["Name:", "Beth Williams"],
				"email": ["Email:", "beth@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Daisies"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a mug!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact8": {
				"fname": ["Name:", "Yolanda Williams"],
				"email": ["Email:", "yolanda@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "roses"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a pitcher!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact9": {
				"fname": ["Name:", "Lizzy Williams"],
				"email": ["Email:", "lizzy@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Lilies"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a card!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact10": {
				"fname": ["Name:", "John Williams"],
				"email": ["Email:", "john@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Daisies"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a basket!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact11": {
				"fname": ["Name:", "Karter Williams"],
				"email": ["Email:", "karter@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a special note!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact11": {
				"fname": ["Name:", "Morgan Williams"],
				"email": ["Email:", "alvin@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Female"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a reciept!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact12": {
				"fname": ["Name:", "Rogue Williams"],
				"email": ["Email:", "rogue@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Female"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2006-12-05"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a ribbon!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact13": {
				"fname": ["Name:", "Taelor Williams"],
				"email": ["Email:", "taelor@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Lilies"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a coupon!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact14": {
				"fname": ["Name:", "Loretta Williams"],
				"email": ["Email:", "loretta@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "1951-10-12"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a bonus!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact15": {
				"fname": ["Name:", "TJ Williams"],
				"email": ["Email:", "tj@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a free dvd!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact16": {
				"fname": ["Name:", "AJ Williams"],
				"email": ["Email:", "aj@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a cup!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact17": {
				"fname": ["Name:", "JAW Williams"],
				"email": ["Email:", "jaw@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a map!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact18": {
				"fname": ["Name:", "Eva Williams"],
				"email": ["Email:", "eva@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a prize!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact19": {
				"fname": ["Name:", "Allie Williams"],
				"email": ["Email:", "allie@gmail.com"],
				"url": ["Url:", "www.google.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Orchids"],
				"borndate": ["Date of birth:", "2000-07-06"],
				"quantity": ["Quantity:", "6"],
				"comments": ["Additional Info:", "Include a ticket!"],
				"terms": ["TOS:", "Yes"]
			},
			"contact20": {
				"fname": ["Name:", "Mike Williams"],
				"email": ["Email:", "mike@hotmail.com"],
				"url": ["Url:", "www.facebook.com"],
				"sex": ["Sex:", "Male"],
				"group": ["Flower Type:", "Roses"],
				"borndate": ["Date of birth:", "1976-06-06"],
				"quantity": ["Quantity:", "4"],
				"comments": ["Additional Info:", "How soon will I get them?"],
				"terms": ["TOS:", "Yes"]
			}						
		};
		
		//Store the JSON OBJECT in local storage
		for(var n in json){
			var id 			= Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}		