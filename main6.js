window.onload=function(){
	
	
	let mainnav =document.createElement("div");
	let leftside =document.createElement("div");
	let lefparg=document.createElement("p");
	let rightside=document.createElement("div");
	let a1lin=document.createElement("a");
	let a2lin=document.createElement("a");
	let a3lin=document.createElement("a");
	let a4lin=document.createElement("a");
	
	
	let ulright=document.createElement("ul");
	let li1right=document.createElement("li");
	let li2right=document.createElement("li");
	let li3right=document.createElement("li");
	let li4right=document.createElement("li");
	
	
	let mainbody=document.createElement("div");
		
	for(let i=1;i<=15;i++){
	let sepratdiv=document.createElement("div");
	let sepratparanumber=document.createElement("p");
	let sepratparaname=document.createElement("p");
	
	let sepratparanumbertex=document.createTextNode(i);
	let sepratparanametex=document.createTextNode("Product Name");
	
	
	mainbody.appendChild(sepratdiv);
	sepratdiv.appendChild(sepratparanumber);
	sepratdiv.appendChild(sepratparaname);
	sepratparanumber.appendChild(sepratparanumbertex);
	sepratparaname.appendChild(sepratparanametex);	
	
	sepratdiv.setAttribute("class","products");
	sepratparanumber.setAttribute("class","pronumber");
	sepratparaname.setAttribute("class","proname");
	
	sepratdiv.style.cssText="background-Color:white; width:330px;padding:10px 0; margin:10px";
	sepratparanumber.style.cssText="width:fit-content;margin:5px auto;font-size:1.9rem;font-Weight:700";
	sepratparaname.style.cssText="width:fit-content;margin:5px auto;font-size:1.5rem;color:#aba6a6";
	
	
	
	
	}
	
	let fppterr=document.createElement("div");
	let footerpara=document.createElement("p");
	let footerpara2=document.createElement("p");
	
	
	
//text nodddd ********************************************	
	
	
	let lefttext=document.createTextNode("Elzero");
	let li1righttext=document.createTextNode("Home");
	let li2righttext=document.createTextNode("About");
	let li3righttext=document.createTextNode("Services");
	let li4righttext=document.createTextNode("contact");
	
	
	
	
	
	
	
	let footertext=document.createTextNode("Alaa El Naggar 74");
	let footertext2=document.createTextNode("CopyRight 2022");
	
	
//appendChild *****************************************************	
	
	mainnav.appendChild(leftside);
	leftside.appendChild(lefparg);
	lefparg.appendChild(lefttext);
	mainnav.appendChild(rightside);
	rightside.appendChild(ulright);
	ulright.appendChild(li1right);
	ulright.appendChild(li2right);
	ulright.appendChild(li3right);
	ulright.appendChild(li4right);
	
	a1lin.appendChild(li1righttext);
	a2lin.appendChild(li2righttext);
	a3lin.appendChild(li3righttext);
	a4lin.appendChild(li4righttext);
	
	li1right.appendChild(a1lin);
	li2right.appendChild(a2lin);
	li3right.appendChild(a3lin);
	li4right.appendChild(a4lin);
	
	
	
	
	
	fppterr.appendChild(footerpara);
	fppterr.appendChild(footerpara2);
	footerpara.appendChild(footertext);
	footerpara2.appendChild(footertext2);
	
// classs name	**************************************************

	mainnav.setAttribute("class","navv");
	leftside.setAttribute("class","leftsid");
	rightside.setAttribute("class","rightsid");
	
	
	mainbody.setAttribute("class","bodddy");
	
	
	fppterr.setAttribute("class","foot");
	

//css *****************************************************
	
	
	document.body.style.cssText="margin:0;";
	mainnav.style.cssText="display:flex ;flex-wrap:wrap;align-items:center;justify-content: space-between ; padding:0px 10px";
	lefparg.style.cssText="font-size:1.5rem; color:green;font-Weight:900;";
	ulright.style.cssText="display:flex ;font-size:1.2rem;list-style-type:none;margin: 0px; padding: 0px; ";
	li1right.style.cssText="margin-right:15px;";
	li2right.style.cssText="margin-right:15px;";
	li3right.style.cssText="margin-right:15px;";
	
	
	a1lin.setAttribute("href","#");
	a2lin.setAttribute("href","#");
	a3lin.setAttribute("href","#");
	a4lin.setAttribute("href","#");
	
	mainbody.style.cssText="background-Color:#ececec ; padding:10px;display:flex;flex-wrap:wrap;justify-content:center";
	
	a1lin.style.cssText="text-Decoration:none;color:black";
	a2lin.style.cssText="text-Decoration:none;color:black";
	a3lin.style.cssText="text-Decoration:none;color:black";
	a4lin.style.cssText="text-Decoration:none;color:black";


	fppterr.style.cssText="background-Color:#326a32;overflow:auto";
	footerpara.style.cssText="margin:20px auto;color:white; width:fit-content;font-size:2rem;font-weight:700";
	footerpara2.style.cssText="margin:20px auto;color:white;  width: fit-content;font-size:1.5rem;font-weight:700";
	
	console.log(document.getElementsByTagName("li"));
	
	
	
	
	
	
	document.body.appendChild(mainnav);
	document.body.appendChild(mainbody);
	document.body.appendChild(fppterr);
	console.log();
	
	
	
	

	
	
	
}