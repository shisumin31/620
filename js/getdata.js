var uid=getCookie("uid");
var data=[{
    "pimg":"./images/con1.jpg",
    "pname":"红魔",
    "pprice":"399",
    "pdesc":"1000毫安",
    "uid":uid
},{
    "pimg":"./images/con2.jpg",
    "pname":"红魔",
    "pprice":"399",
    "pdesc":"2000毫安",
    "uid":uid
},{
    "pimg":"./images/con3.png",
    "pname":"红魔",
    "pprice":"399",
    "pdesc":"1000毫安",
    "uid":uid
},{
    "pimg":"./images/con4.jpg",
    "pname":"红魔",
    "pprice":"399",
    "pdesc":"5000毫安",
    "uid":uid
},{
    "pimg":"./images/con2.jpg",
    "pname":"红魔",
    "pprice":"399",
    "pdesc":"3000毫安",
    "uid":uid
},{
    "pimg":"./images/con2.jpg",
    "pname":"红魔",
    "pprice":"399",
    "pdesc":"10000毫安",
    "uid":uid
},{
    "pimg":"./images/con2.jpg",
    "pname":"红魔",
    "pprice":"3999",
    "pdesc":"10000毫安",
    "uid":uid
}

]
for(var i=0;i<data.length;i++){
$.ajax({
    type:"post",
    url:"http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",
    data:data[i],
    dataType:"json",
    success:function(response){
// console.log("222");
    }
})
}