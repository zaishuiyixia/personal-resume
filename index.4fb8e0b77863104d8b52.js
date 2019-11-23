(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_start_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _css_start_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_start_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fullpage_js_dist_fullpage_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var fullpage_js_dist_fullpage_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);








jquery__WEBPACK_IMPORTED_MODULE_6___default()(function(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
         window.location.href = 'phone.html';
    } else {
        //  window.location = 'PC设备地址';
    }

    var banner = '';
    var myFullpage = new fullpage_js_dist_fullpage_min_js__WEBPACK_IMPORTED_MODULE_5___default.a('#fullpage', {
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        // dragAndMove: true,
        controlArrows: false,
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        resize: true, //字体大小是否随窗口缩放而缩放 默认值为false
        // continuousHorizontal: true,
        navigationTooltips: ['首页', '关于我', '技术栈',  '工作经历', '项目经历', '联系我'],
        afterLoad:function(anchorLink, index){
            //滚动到某一屏后的回调函数  
            var id = index.item.id;
            
            if(id == 'section1'){
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section1 .wrap>p').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section1 .wrap>p:first-child').addClass('animated fadeInRight')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section1 .wrap>p:last-child').addClass('animated fadeInLeftBig')
            }  else {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section1 .wrap>p').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section1 .wrap>p').removeClass('animated fadeInRight')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section1 .wrap>p:last-child').removeClass('animated fadeInLeftBig')
            }

            if(id == 'section3'){
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>h1').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>p').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>h1').addClass('animated fadeInDown')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>p').addClass('animated fadeInDown')
            }  else {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>h1').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>p').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>h1').removeClass('animated fadeInDown')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section3 .first-page>p').removeClass('animated fadeInDown')
            }

            if(id == 'section4'){
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 h2').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 h2').addClass('animated fadeInDown')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 p').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 p').addClass('animated fadeInUp') 
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box2 img').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box2 img').addClass('animated fadeInRight')
            }  else {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 h2').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 h2').removeClass('animated fadeInDown')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 p').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box1 p').removeClass('animated fadeInUp')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box2 img').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section4 .box2 img').removeClass('animated fadeInRight')
            }

            if(id == 'section5'){
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .wrap>p').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .wrap>p').addClass('animated lightSpeedIn')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .img-box').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .img-box').addClass('animated fadeInDown')
            }  else {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .wrap>p').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .wrap>p').removeClass('animated lightSpeedIn')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .img-box').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section5 .img-box').removeClass('animated fadeInDown')
            }

            if(id == 'section6'){
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .platform').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .platform').addClass('animated fadeInDownBig')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .form-fill').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .form-fill').addClass('animated fadeInLeftBig')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 textarea').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 textarea').addClass('animated fadeInRight')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .sub-btn').removeClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .sub-btn').addClass('animated fadeInUp')
            }  else {
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .platform').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .platform').removeClass('animated fadeInDownBig')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .form-fill').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .form-fill').removeClass('animated fadeInLeftBig')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 textarea').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 textarea').removeClass('animated fadeInRight')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .sub-btn').addClass('hide')
                jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section6 .sub-btn').removeClass('animated fadeInUp')
            }
        } ,
        showActiveTooltip: true,
        slidesNavigation: true, //是否显示左右轮播的小圆点
        navigationPosition: 'right'
    });

    //首屏轮播初始化自动轮播时间
    banner = setInterval(function(){ 
        fullpage_api.moveSlideRight(); 
    }, 5000);

    //鼠标悬停在第一屏的左右按钮上和轮播内容上时，停止轮播
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section0 .container').on('mouseenter', function() {
        clearInterval(banner)
    })
    //鼠标离开第一屏的左右按钮上或轮播内容上时时，开始自动轮播
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section0 .container').on('mouseleave', function() {
        banner = setInterval(function(){ 
            fullpage_api.moveSlideRight(); 
        }, 5000); 
    })

    jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section0 .slide-pre').on('click', function() {
        fullpage_api.moveSlideLeft();
    })

        jquery__WEBPACK_IMPORTED_MODULE_6___default()('#section0 .slide-next').on('click', function() {
        fullpage_api.moveSlideRight();
    })

    jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixtel").on("mouseenter",function(){
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixtel div").removeClass('hide')
    })

    jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixtel").on("mouseleave",function(){
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixtel div").addClass('hide')
    })

    jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixweixin").on("mouseenter",function(){
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixweixin div").removeClass('hide')
    })

    jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixweixin").on("mouseleave",function(){
        jquery__WEBPACK_IMPORTED_MODULE_6___default()(".fixweixin div").addClass('hide')
    })
    
})

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[2,1,2]]]);
//# sourceMappingURL=index.4fb8e0b77863104d8b52.js.map