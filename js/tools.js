$(document).ready(function() {

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('body').on('click', '.window-link', function(e) {
        windowOpen($(this).attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $('body').on('click', '.window-close, .window-close-btn', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('.page-link').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top - $('.header').outerHeight() - 20});
            e.preventDefault();
        }
    });

    $('.page-menu a, .page-menu-mobile a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top - $('.header').outerHeight() - 20});
            e.preventDefault();
        }
    });

    $('.widget-how-tabs-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            var curTabs = curLi.parents().filter('.widget-how-tabs');
            curTabs.find('.widget-how-tabs-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = curTabs.find('.widget-how-tabs-menu ul li').index(curLi);
            curTabs.find('.widget-how-tabs-content.active').removeClass('active');
            curTabs.find('.widget-how-tabs-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('.widget-updates-list').mCustomScrollbar({
        axis: 'y',
        callbacks: {
            onInit: function() {
                $('.widget-updates-list').removeClass('with-top');
                $('.widget-updates-list').addClass('with-bottom');
            },
            whileScrolling: function() {
                if (this.mcs.topPct == 100) {
                    $('.widget-updates-list').removeClass('with-bottom');
                } else {
                    $('.widget-updates-list').addClass('with-bottom');
                }

                if (this.mcs.topPct == 0) {
                    $('.widget-updates-list').removeClass('with-top');
                } else {
                    $('.widget-updates-list').addClass('with-top');

                }
            }
        }
    });

    $('.widget-reviews').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1191,
                    settings: {
                        arrows: false
                    }
            }
        ]
    });

    $('.widgets-others-list').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1191,
                    settings: 'unslick'
            }
        ]
    });

    $('.service-reviews').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1191,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                        variableWidth: true,
                        arrows: false
                    }
            }
        ]
    });

    $('.other-projects .main-projects-list').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#slick-arrow"></use></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                        variableWidth: true,
                        arrows: false
                    }
            }
        ]
    });

    $('.faq-item-title').click(function(e) {
        $(this).parent().toggleClass('open');
        e.preventDefault();
    });

    $('.widgets-tabs a').click(function(e) {
        var curLink = $(this);
        if (!curLink.hasClass('active')) {
            $('.widgets-tabs a.active').removeClass('active');
            curLink.addClass('active');
            var curType = curLink.attr('data-type');
            if (curType == '*') {
                $('.main-widgets-item, .widgets-item').removeClass('hidden');
            } else {
                $('.main-widgets-item, .widgets-item').addClass('hidden');
                $('.main-widgets-item[data-types~="' + curType + '"], .widgets-item[data-types~="' + curType + '"]').removeClass('hidden');
            }
        }
        e.preventDefault();
    });

    $('.main-projects-more a').click(function(e) {
        $('.main-projects-more a').addClass('loading');
        $.ajax({
            type: 'POST',
            url: $(this).attr('href'),
            dataType: 'html',
            cache: false
        }).done(function(html) {
            $('.main-projects-list').append($(html).find('.main-projects-list').html());
            if ($(html).find('.main-projects-more').length == 1) {
                $('.main-projects-more a').attr('href', $(html).find('.main-projects-more a').attr('href'));
            } else {
                $('.main-projects-more').remove();
            }
            $('.main-projects-more a').removeClass('loading');
        });
        e.preventDefault();
    });

    $('.burger-link').click(function(e) {
        if ($('html').hasClass('burger-open')) {
            $('html').removeClass('burger-open');
            $('.wrapper').css({'top': 'auto'});
            $(window).scrollTop($('.wrapper').data('curScroll'));
        } else {
            var curScroll = $(window).scrollTop();
            $('html').addClass('burger-open');
            $('.wrapper').css({'top': -curScroll});
            $('.wrapper').data('curScroll', curScroll);
        }
        e.preventDefault();
    });

});

$(window).on('load resize', function() {

    $('.widgets-list').each(function() {
        var curList = $(this);

        curList.find('.widgets-item-text').css({'min-height': '0px'});

        curList.find('.widgets-item-text').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.widgets-item').offset().top;

            curList.find('.widgets-item-text').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.widgets-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.widget-reviews').each(function() {
        var curList = $(this);

        curList.find('.widget-reviews-item-inner').css({'min-height': '0px'});

        curList.find('.widget-reviews-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.widget-reviews-item').offset().top;

            curList.find('.widget-reviews-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.widget-reviews-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.widgets-others-list').each(function() {
        var curList = $(this);

        curList.find('.widgets-item-text').css({'min-height': '0px'});

        curList.find('.widgets-item-text').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.widgets-others-item').offset().top;

            curList.find('.widgets-item-text').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.widgets-others-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.service-who-list').each(function() {
        var curList = $(this);

        curList.find('.service-who-item-inner').css({'min-height': '0px'});

        curList.find('.service-who-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.service-who-item').offset().top;

            curList.find('.service-who-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.service-who-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.service-reviews').each(function() {
        var curList = $(this);

        curList.find('.service-reviews-item-inner').css({'min-height': '0px'});

        curList.find('.service-reviews-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.parents().filter('.service-reviews-item').offset().top;

            curList.find('.service-reviews-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.parents().filter('.service-reviews-item').offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'min-height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'min-height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    if ($(window).width() > 1191) {
        $('.main-achives').each(function() {
            $('.main-achives').mCustomScrollbar('destroy');
        });

        $('.main-services-list').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });

        $('.career-prefs').each(function() {
            $('.career-prefs').mCustomScrollbar('destroy');
        });

        $('.widgets-tabs').each(function() {
            $('.widgets-tabs').mCustomScrollbar('destroy');
        });

        $('.widgets-clients-list').each(function() {
            $('.widgets-clients-list').mCustomScrollbar('destroy');
        });

        $('.service-who-list').each(function() {
            $('.service-who-list').mCustomScrollbar('destroy');
        });
    } else {
        $('.main-achives').each(function() {
            $('.main-achives').mCustomScrollbar({
                axis: 'x'
            });
        });

        $('.main-services-list').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    adaptiveHeight: true,
                    variableWidth: true
                });
            }
        });

        $('.career-prefs').each(function() {
            $('.career-prefs').mCustomScrollbar({
                axis: 'x'
            });
        });

        $('.widgets-tabs').each(function() {
            $('.widgets-tabs').mCustomScrollbar({
                axis: 'x'
            });
        });

        $('.widgets-clients-list').each(function() {
            $('.widgets-clients-list').mCustomScrollbar({
                axis: 'x'
            });
        });

        $('.service-who-list').each(function() {
            $('.service-who-list').mCustomScrollbar({
                axis: 'x'
            });
        });
    }

});

$(window).on('load resize scroll', function() {

    var windowScroll = $(this).scrollTop();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    if (windowScroll > 0) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    $('.page-menu').each(function() {
        if (windowScroll >= $('.page-menu').offset().top - 120) {
            $('.page-menu').addClass('fixed');
            if (windowScroll + $('.page-menu').find('.page-menu-inner').height() > $('.page').offset().top + $('.page').height() - 160) {
                $('.page-menu-inner').css({'margin-top': ($('.page').offset().top + $('.page').height() - 160) - (windowScroll + $('.page-menu-inner').height())});
            } else {
                $('.page-menu-inner').css({'margin-top': 0});
            }
        } else {
            $('.page-menu').removeClass('fixed');
            $('.page-menu-inner').css({'margin-top': 0});
        }
    });

    $('.page-menu li a').each(function() {
        var curLink = $(this);
        var curBlock = $(curLink.attr('href'));
        if (curBlock.length == 1) {
            if (windowScroll + windowHeight / 2 > curBlock.offset().top) {
                $('.page-menu li.active').removeClass('active');
                curLink.parent().addClass('active');
            }
        }
    });

    $('.service-how-side').each(function() {
        if (windowScroll >= $('.service-how-side').offset().top - 120) {
            $('.service-how-side').addClass('fixed');
            if (windowScroll + $('.service-how-side-inner').height() > $('.service-how').offset().top + $('.service-how').height() - 120) {
                $('.service-how-side-inner').css({'margin-top': ($('.service-how').offset().top + $('.service-how').height() - 120) - (windowScroll + $('.service-how-side-inner').height())});
            } else {
                $('.service-how-side-inner').css({'margin-top': 0});
            }
        } else {
            $('.service-how-side').removeClass('fixed');
            $('.page-menu-inner').css({'margin-top': 0});
        }
    });

});

function initForm(curForm) {
    curForm.find('.form-input input, .form-input textarea').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        }
    });

    curForm.find('.form-input input:focus, .form-input textarea:focus').each(function() {
        $(this).trigger('focus');
    });

    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

    var curFormOptions = {
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            if (curForm.hasClass('window-form')) {
                var formData = new FormData(form);

                windowOpen(curForm.attr('action'), formData);
            } else {
                form.submit();
            }
        }
    };

    curForm.validate(curFormOptions);
}

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length == 0) {
        var curPadding = $('.wrapper').width();
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
    } else {
        $('.window').append('<div class="window-loading"></div>')
        $('.window-container').addClass('window-container-preload');
    }

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        if ($('.window-container').length == 0) {
            $('.window').html('<div class="window-container window-container-preload">' + html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a></div>');
        } else {
            $('.window-container').html(html + '<a href="#" class="window-close"><svg><use xlink:href="' + pathTemplate + 'images/sprite.svg#window-close"></use></svg></a>');
            $('.window .window-loading').remove();
        }

        window.setTimeout(function() {
            $('.window-container-preload').removeClass('window-container-preload');
        }, 100);

        $('.window form').each(function() {
            initForm($(this));
        });

        $(window).trigger('resize');
    });
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
    }
}