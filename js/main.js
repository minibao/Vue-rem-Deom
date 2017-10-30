/**
 * vue component.
 */
//headertemp
var templateheader = {
    props: ['headerdata'],
    template: '<div class="header-box">' +
        '<div class="header">' +
        '<div class="coordinate fl tc"><span>合肥</span></div>' +
        '<div class="search-in fl tc">' +
        '<input placeholder="搜索一下你就知道" type="text">' +
        '</div>' +
        '<div class="message-top fl tc"><img src="images/message.png" alt=""></div>' +
        '</div>' +
        '</div>'
}

/**
 * vue init.
 */
var app = new Vue({
    el: '#app',
    data: {
        test: [
            { name: 'a' },
            { name: 'b' },
            { name: 'c' },
            { name: 'd' },
            { name: 'e' },
            { name: 'f' },
            { name: 'f' }
        ],
        sliderdata: {},
        flexPart: {}
    },
    components: {
        'headertemp': templateheader
    },
    methods: {
        /**
         * Page init.
         */
        init: function init() {
            app.getData();




        },
        /**
         * swiper init.
         */
        initSlide: function(argument) {
            swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                centeredSlides: true,
                slidesPerView: 'auto',
                autoplay: 2000,
                loop: true,
                autoplayDisableOnInteraction: false,
            });
        },
        /**
         * ajax main data.
         */
        getData: function() {
            $.ajax({
                type: 'GET',
                url: "http://www.lexbst.com/server.php/api/v1/supplier/main?agent_id=1&main=1&scale=0",
                success: function(data) {
                    try {
                        data = JSON.parse(data);
                        if (data.msg == "成功") {
                            var slider = data.data.ad;
                            //处理headerslider部分数据
                            app.sliderdata = data.data.ad;
                            console.log(app.sliderdata);
                            app.fillingSlider(slider);
                            //处理flex-part(category)部分数据
                            app.flexPart = data.data.category;

                        }

                    } catch (err) {

                    }
                }
            })
        },
        /**
         * filling slider data.
         */
        fillingSlider: function(data) {
            $(document).ready(function() {
                app.initSlide();
            })
        }


    }
})



//enter fun
app.init();