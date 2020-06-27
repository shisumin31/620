var uid=getCookie("uid");
$.ajax({
    type:"get",
    url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
    data:{
        id:uid,
    },
    dataType:"json",
    success:function(response){
let data=response.data;
console.log(data);
for(var i=0;i<data.length;i++){
var html="";
html=` 
            <tr class="order-list" id="${data[i].uid}">
                                <td class="productImage"><img
                                        src="${data[i].pimg}"
                                        alt="">
                                </td>
                                <td valign="top" class="productname">
                                    <a href="/#" class="pdt-title">${data[i].pname} </a>
                                </td>
                                <td class="productPrice">￥ ${data[i].pprice}</td>
                                <td>
                                    <div class="btn-cnts">
                                        <span class="table-cut">-- </span>
                                        <input type="text" class="num cart-cnt" value="${data[i].pnum}">
                                        <span class="table-add">+</span>
                                    </div>
                                </td>
                                <td class="sum" style="line-height: 1.8;">￥ ${data[i].pprice*data[i].pnum} </td>
                                <td><a title="删除" class="cart-close close">×</a></td>
                            </tr>
                            `               
$(".cart-thead").append(html);
//数量加减
let oMinus=document.querySelectorAll(".table-cut");
let oPlus=document.querySelectorAll(".table-add");
let oPnum=document.querySelectorAll(".cart-cnt");
for(let i=0;i<oMinus.length;i++){
oMinus[i].onclick=function(){
    // console.log(222);
    if(oPnum[i].value<=1){
oPnum[i].value=1;
return;
    }
    oPnum[i].value--;

};
oPlus[i].onclick=function(){
    // console.log(333);
    oPnum[i].value++;
}
}


}
    }
})
