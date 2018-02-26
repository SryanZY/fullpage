/*
 * @Author: SryanZY 
 * @Date: 2018-02-26 13:59:02 
 * @Last Modified by:   SryanZY 
 * @Last Modified time: 2018-02-26 13:59:02 
 */

$(function () {
    $('#fullpage').fullpage({

        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['它，终于来了', '真正融入你的生活', '非同一般的精准计时', '在三个特点鲜明的系列中找到你的风格'],

        afterLoad(anchor, index) {
            switch(index) {
                case 1:
                    move('.section1 h1').scale(1.5).delay(100).end();
                    move('.section1 p').set('margin-top', '5%').delay(800).end();
                    break;
                case 2:
                    move('.section2 h1').scale(0.7).delay(100).end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','20%').end();
                    move('.section3 p').set('margin-left','20%').end();
                    break;
                case 4:
                    move('.section4 img.primary').rotate(360).end(function(){
                        move('.section4 img.sport').rotate(360).end(function(){
                            move('.section4 img.edition').rotate(360).end(function(){
                                move('.section4 h4.primary').scale(1.2).end(function(){
                                    move('.section4 h4.sport').scale(1.2).end(function(){
                                        move('.section4 h4.edition').scale(1.2).end();
                                    });
                                });
                            });
                        });
                    });
                    break;
                default:
                    break;
            }
        },
        //将效果还原，这样可触发多次
        onLeave(index, nextIndex, direction) {
            switch(index) {
                case 1:
                    move('.section1 h1').scale(1).end();
                    move('.section1 p').set('margin-top','800px').end();
                    break;
                case 2:
                    move('.section2 h1').scale(1).end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','-1500px').end();
                    move('.section3 p').set('margin-left','1500px').end();
                    break;
                case 4:
                    move('.section4 img.primary').rotate(-360).end();
                    move('.section4 img.sport').rotate(-360).end();
                    move('.section4 img.edition').rotate(-360).end();
                    move('.section4 h4.primary').scale(1).end();
                    move('.section4 h4.sport').scale(1).end();
                    move('.section4 h4.edition').scale(1).end();
                    break;
                default:
                    break;
            }
        }
    })
})