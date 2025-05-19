 document.addeventlistener("domcontent loaded" ,() =>{
 	 console.log("site Tijant Association chargé avec succés!");});

 const loader =
 document.getElementByid ('loader');
 window.addeventlistener('load',( )=>
 {
 	loader.classlist.add('hidden'); 
 });

 //Menu Burger Responsive
 const Burger =
 document.queryselector('.burger');
 const nav=
 document.queryselector('.nav-links');
 burger.addeventlistener('click',()
 	=>{
 		nav.classlist.toggle('active');
 		
});
