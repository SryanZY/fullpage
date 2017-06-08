# fullpage
使用fullpage和move.js插件实现全屏滚动  
  
# 使用的技术  
* fullpage全屏滚动插件  
* move.js-模拟css3动画插件  http://visionmedia.github.io/move.js/  
* H5本地存储  
*** 

# 对于fullpage的使用  

  如果想要使用原生fullpage的样式，需要引入jquery.fullPage.css;  
因为fullpage基于jquery，所以要引入jquery.js以及jquery.fullPage.js。

## HTML部分的引入  
设置最外层的div或者section标签的id为fullpage，每一页的class名设置为section，  
对于slide滑动，如果需要设置class为slide。  

## js中的使用  

```
  $(function () {  
  
    $('#fullpage').fullpage()  最基本的用法，调用默认样式
    
  })  
  
```   

*API*:   

```    
  verticalCentered: false, //所有元素不居中
  anchors: ['page1', 'page2', 'page3', 'page4'],   //为每个页面设置锚链接
  navigation: true,  //导航条
  navigationPosition: 'right',  //导航条的位置
  navigationTooltips: ['它，终于来了', '真正与你贴近的个人设备', '非同一般的精准计时', '在三个特点鲜明的系列中找到你的风格'],  //导航条内容
```  

常用的回调函数有afterLoad，接受参数为anchor和index, **index从1开始** ;onLeave,接受参数有index,nextIndex,direction    

更多fullpage的API请移步 https://github.com/alvarotrigo/fullPage.js   

# 对于move.js的使用  

```  
基本方式move(选择器)。可以通过scale、translate、rotate等方式设置元素的缩放、位移和旋转角度。    

set方法可以传入要设置的css以及参数，如move('div').set('margin-left', '100px');    

在同步执行的函数直接接end方法即可，若需要延迟执行，则需要为end方法传递函数，
如end(function () {})。    

如果要实现来回切换均有动画效果，则需要在onLeave函数中将改变的参数变回原来的状态
具体可以查看index.js部分代码

```  
  
# 对于H5离线缓存的使用

```  
  在advertisement.html的html标签中添加manifest=index.manifest属性，同时在同一目录下创建
  index.manifest文件。  
  在index.manifest文件的格式如下:
  CACHE MANIFEST
  #version 1.0
  CACHE:  
    要缓存的文件，可以是线上也可以是本地资源
  NETWORK:
    * 不使用本地缓存的文件，默认为*,即除了CACHE中的文件其余的均使用网络
  FALLBACK:
    当index.html出问题时要显示的文件，通常会在同一目录下创建404.html
  
  CACHE必须，NETWORK以及FALLBACK可选。  
  本地存储的原理：在第一次打开网页时会将CACHE中的文件缓存到本地，之后再打开网页时如果有更新会先更新缓存中的  
  文件(#version会随之更改)，如果没有则默认读取缓存。在打开网页后切断网络然后清除缓存来查看本地存储是否起作用  
  
```

