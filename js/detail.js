var uid=getCookie("uid")
console.log(uid);
var pid=location.search.split("=")[1];
console.log(pid);
$.ajax({
    type:"get",
    url:"http://jx.xuzhixiang.top/ap/api/detail.php",
    data:{id:pid,
    },
    dataType:"json",
    success:function(response){

let data=response.data;
console.log(data);
var html=`<div class="main_left">
<div class="imgbox">
    <a style="display: block;"> <img id="imgSrc"  src="${data.pimg}" alt="" ></a>
    <a> <img id="imgSrc" src="${data.pimg}" alt=""></a>
      <a> <img id="imgSrc" src="${data.pimg}" alt=""></a>
          <a> <img id="imgSrc" src="${data.pimg}" alt=""></a>

</div>

<ul id="img_thumb" class="main_left_thumb">

    <li class="selected">
        <img src="//oss.static.nubia.cn/active/5e673d9a1410992.png" alt="">
    </li>
    <li >
        <img src="//oss.static.nubia.cn/active/5e673d9a1a42532.png" alt="">
    </li>
    <li >
        <img src="//oss.static.nubia.cn/active/5e673d9a161b713.png" alt="">
    </li>
    <li >
        <img src="//oss.static.nubia.cn/active/5e673d9a1765354.png" alt="">
    </li>
</ul>

<div id="share" class="share-pc">

    <span><i class="iconfont icon-icon_device_fenxiang">&nbsp;分享</i></span>
    <span> <i class="iconfont icon-shoucang1 ">&nbsp;收藏</i></span>


</div>
</div>

<div class="main_right right">
<p class="main_right_p">
    <span>${data.pname} </span>
</p>
<div class="produceActivity">
    <div class="price">
        <div class="PriceContent">
            <span><i class="priceIcon">
                    <p>¥</p>
                </i>
                <p>${data.pprice}</p>
            </span>

        </div>
    </div>
</div>

<div class="promo-sell">
    <div class="rightLabel">

        <p>活动</p>

    </div>
    <div class="promo-info">

        <p>
            <i class="wrap-txt">积分

            </i><span>购买即赠积分，积分可抵现</span>



        </p>
        <p><i class="wrap-txt"> 包邮</i>

            <span> 青铜及以下满59，白银满39，黄金及以上包邮</span>

        </p>
    </div>
</div>

<div class="addressMain">
    <div class="rightLabel">
        <p>地址</p>
    </div>
    <div class="address">
        <p>
            <img src="https://oss.static.nubia.cn/upload/5ae00f8b59e2087.png" alt="">
            <span class="address_content">
                河南省郑州市中原区
            </span>
        </p>
        <span class="change">修改</span>
    </div>

</div>

<div class="peoductOptions">
    <div class="phone_net ">
        <div class="rightLabel2">
            <p>选择颜色</p>

        </div>
        <ul id="selectColor" class="clearfix_jj">
            <li class="cur">
                银灰色
            </li>
        </ul>
    </div>
    <div class="phone_net">
        <div class="rightLabel2">
            <p>选择版本</p>

        </div>
        <ul id="selectColor" class="clearfix_jj">
            <li class="cur">
                ${data.pdesc}
            </li>
        </ul>
    </div>

    <div class="count">
        <div class="rightLabel"> 数量</div>

        <div class="num">
            <p class="minus">-</p>
            <p class="totle">1</p>
            <p class="add">+</p>
        </div>
    </div>
</div>

<div class="btnGroup">
    <div class="buy-btn-main">
        <div class="addShopCar">
            加入购物车
        </div>
        <div class="button active_button">
            立即购买
        </div>
    </div>
</div>

</div>

`
$(".detail_main").append(html);
$(".addShopCar").click(function(){
    $.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
        uid:uid,
        pid:pid,
        pnum:1
    },function (data) {
        console.log(data)
        location.href="./foods-car.html";
      })
})

    }
})