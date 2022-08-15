fetch('https://api.github.com/users/ajithshine')
.then(res=>{
    // console.log(res.json)
    return res.json()
})
.then(data=>{
    console.log(data)
    document.querySelector("#followers").innerText=data.followers
    document.querySelector("#following").innerText=data.following
    document.querySelector("#repos").innerText=data.public_repos
    document.querySelector("#gists").innerText=data.public_gists
})


window.onscroll = function() {myFunction()};

function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}
