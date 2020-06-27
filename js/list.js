$(function () {
    var uid = getCookie("uid");
    $.ajax({
        type: "get",
        url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
        data: {
            uid:uid
        },
        dataType: "json",
        success: function (response) {
            // console.log(response);
            let data = response.data;
            console.log(data);
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += `
    
    <li class="p_list">
                               <a  href="./detail.html?pid=${data[i].pid}">
                                   <img src="${data[i].pimg}"alt="">
                                       <div>
                                           <p class="image">${data[i].pname}</p>
                                           <p class="price">${data[i].pprice} </p>
                                       </div>
                                        
                                </a>
                       </li>
                 
    `
            }

            $('.list_1').append(html);
        }
    })


    // console.log(uid);
    //     $.get("http://jx.xuzhixiang.top/ap/api/productlist.php",function(response){
    //         // console.log(response);
    //         let data=response.data;
    //        console.log(data);
    //     var html="";
    //     for(var i=0;i<data.length;i++){
    //     html+=`
    //     <li class="p_list">
    //                 <a  href="index.html">
    //                     <img src="${data[i].pimg}" alt="">
    //                         <div>
    //                             <p class="image">${data[i].pname}</p>
    //                             <p class="price">${data[i].pprice} </p>
    //                         </div>

    //                  </a>
    //         </li>
    //     `
    //     }
    //     $('.list_5').append(html);
    //     })
    //             $.get("json/list-music.json",function(response){
    //                 var html="";
    //                 for(var i=0;i<response.length;i++){
    //                 html+=`
    //                 <li class="p_list">
    //                             <a  href="#">
    //                                 <img src="${response[i].img}" alt="">
    //                                     <div>
    //                                         <p class="image">${response[i].image}</p>
    //                                         <p class="price">${response[i].price} </p>
    //                                     </div>

    //                              </a>
    //                     </li>
    //                 `
    //                 }
    //                 $('.list_1').append(html);
    //                 })
})
// 选项卡
$(function () {
    var aBtns = $(".list_shang").find("li");
    var aDivs = $(".list_shang").find(".list")

    aBtns.click(function () {
        aBtns.attr("class", "");
        aDivs.css("display", "none");
        $(this).attr("class", "active");
        aDivs.eq($(this).index()).css("display", "block");
    })
})

