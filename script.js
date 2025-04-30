document.addeventlistener("domcontent loaded" ,() =>{
 	 console.log("site Tijant Association chargé avec succés!");});





	const loader=
	document.getElementBy id('loader');
	windows.addeventlistener('load,()=>                                                                                        
	{
	
	loader.classlist.add('hidden');
	});

	//menu burger responsive


	const burger=
	document.queryselector('.burger');

	const nav=
	document.queryselector('.nav-links');
	burger.addeventlistener('click',()=>{
		nav.classlist.toggle('active');
		});

