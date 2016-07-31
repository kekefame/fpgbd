$(function () {
    $("#fullpage").fullpage({
        navigation:true,
        navigationPosition: 'right',
        navigationTooltips: ['百度登录舆情', '领先:数据收集与处理', '全面:舆情分析与架构', '专业:专业数据可视化'],
        fixedElements:".header",
        anchors:['firstPage','secondPage','thirdPage','fourthPage','lastPage'],
        afterLoad:function (achors,index){
            if(index==1){
                $(".ship").css("left","150px");
            }
            if (index==2)
            {
                // $(".tit2").transition({left:0,opcity:1},700);
                // $(".obj-brain2").transition({right:0,opcity:1});
            }
        },
        onLeave:function (index){
            if(index==1){
                $(".ship").css("left","100px");
            }
        }

        

    });
    $(".next-a").click(function()
        {
            $.fn.fullpage.moveSectionDown();
        })

    // $(".nav-small-left").on("click",function(){
    //     $(".nav-small-right").removeClass("active");
    //     $(this).toggleClass("active");
    //     $(".list-right").removeClass("active");
    //     $(".list-left").toggleClass("active");
    //     $(this).css({transition:"height 3s"});
    // })
    // $(".nav-small-right").on("click",function(){
    //     $(".nav-small-left").removeClass("active");
    //     $(this).toggleClass("active");
    //     $(".list-left").removeClass("active");
    //     $(".list-right").toggleClass("active");
    // })
});

/*导航*/
$(function(){
    var sjkfd=$(".sjkfd");
    var app=$(".iphone-app");
    sjkfd.hover(function(){
        app.css("display","block");
    },function(){
        app.css("display","none");
    })
})
