const mutationobserver=new MutationObserver(
    enteries =>{
        console.log(enteries);
    }
);
const parent=document.querySelector(".parentcontainer");

// -----1------ 
// mutationobserver.observe(parent,{childList:true});
// parent.children[0].remove();

// -----2------ 
// mutationobserver.observe(parent,
//     {
//         childList:true
//     }
// );
// parent.children[0].remove();
// setTimeout(() =>{
//     parent.appendChild(document.createElement("div"));
// },100);

// -----3------ 
// mutationobserver.observe(parent,
//     {
//         childList:true
//     }
// );
// parent.children[0].remove();
// mutationobserver.disconnect();
// setTimeout(() =>{
//     parent.appendChild(document.createElement("div"));
// },100);

// -----4------ 
// mutationobserver.observe(parent,
//     {
//         attributes:true,
//         attributeOldValue:true,
//         attributeFilter:["data-attr"]    }
// );
// parent.setAttribute('data-attr','ashish');

// -----5------ 
// mutationobserver.observe(parent.children[0].childNodes[0],
//     {
//         characterData:true,
//         characterDataOldValue:true
//     }
// );
// comment added 
// -----6------ 

mutationobserver.observe(parent,
    {
        characterData:true,
        characterDataOldValue:true,
        subtree:true,
        attributes:true
    }
);
parent.children[0].id="ash";
console.log(parent.children[0].getAttribute('id'));