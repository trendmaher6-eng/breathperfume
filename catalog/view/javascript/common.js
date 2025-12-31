function getURLVar(key) {
    var value = [];

    var query = String(document.location).split('?');

    if (query[1]) {
        var part = query[1].split('&');

        for (i = 0; i < part.length; i++) {
            var data = part[i].split('=');

            if (data[0] && data[1]) {
                value[data[0]] = data[1];
            }
        }

        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    }
}

function myFunction(e) {
    $('#cart').removeClass('open');
}

$(document).ready(function() {
    $('p.price').each(function() {
        var $priceContainer = $(this);

        // أولاً: تعديل السعر داخل span مثل price-new و price-old
        $priceContainer.find('span').each(function() {
            var html = $(this).html().trim();
            var match = html.match(/^([\d\.,]+)\s*(.*)$/);
            if (match) {
                var numberPart = match[1];
                var currencyPart = match[2];
                $(this).html(numberPart + ' <span class="currency-symbol">' + currencyPart + '</span>');
            }
        });

        // ثانيًا: تعديل النصوص المباشرة (بدون span)
        $priceContainer.contents().filter(function() {
            return this.nodeType === 3 && $.trim(this.nodeValue) !== ''; // nodeType 3 = نص
        }).each(function() {
            var text = $.trim(this.nodeValue);
            var match = text.match(/^([\d\.,]+)\s*(.*)$/);
            if (match) {
                var numberPart = match[1];
                var currencyPart = match[2];
                // استبدال النص بعنصر HTML
                $(this).replaceWith(numberPart + ' <span class="currency-symbol">' + currencyPart + '</span>');
            }
        });
    });
});

function tgp() {
    var x = document.getElementById("inputpassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function tgpconfirm() {
    var x = document.getElementById("input-confirm");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function tgpreg() {
    var x = document.getElementById("input2password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
// function togglepassword(e) {
//   var x = $("#input-password2");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

$(document).ready(function() {



    // $(".toggle-password").click(function() {

    //   $(this).toggleClass("fa-eye fa-eye-slash");
    //   var input = $($(this).attr("toggle"));
    //   if (input.attr("type") == "password") {
    //     input.attr("type", "text");
    //   } else {
    //     input.attr("type", "password");
    //   }
    // });


    $(".cart-group-btn #generateIframe11 , .buttons-wrapper2 #generateIframe11 , .cart-group-btn #generateIframe22 , .buttons-wrapper2 #generateIframe22").click(function() {

        setTimeout(function() {
            if (
                ($(".options-container.active > div").length && !$(".options-container.active > div").hasClass("has-error")) ||
                ($(".main-options > div.form-group").length && !$(".main-options > div.form-group").hasClass("has-error")) ||
                ($(".options-combinations-error").text().trim().length > 0)
            ) {


                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'addToCart',
                    ecommerce: {

                        product_id: $("#proid").text(),
                        product_name: $("#proname").text(),
                        category: $("#catsing").text(),
                        value: $("#pixelprice").text(),
                        currency: $("#curencncya").text(),
                    }
                });
                /***********************************************************************************************************************************************************************************************************************/
                ! function(f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function() {
                        n.callMethod ?
                            n.callMethod.apply(n, arguments) :
                            n.queue.push(arguments);
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s);
                }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

                fbq('init', $("#facrbookpixcode").text()); // Replace with your Facebook Pixel ID
                fbq('set', 'autoConfig', false, $("#facrbookpixcode").text())


                fbq('track', 'AddToCart', {

                    product_id: $("#proid").text(),
                    product_name: $("#proname").text(),
                    category: $("#catsing").text(),
                    value: $("#pixelprice").text(),
                    currency: $("#curencncya").text(),

                });




                /***********************************************************************************************************************************************************************************************************************/


                (function(e, t, n) {
                    if (e.snaptr) return;
                    var a = e.snaptr = function() {
                        a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                    };
                    a.queue = [];
                    var s = 'script';
                    r = t.createElement(s);
                    r.async = !0;
                    r.src = n;
                    var u = t.getElementsByTagName(s)[0];
                    u.parentNode.insertBefore(r, u);
                })(window, document,
                    'https://sc-static.net/scevent.min.js');

                snaptr('init', $("#tiktokpixcode").text(), {
                    'user_email': $("#tiktokpixmil").text()
                });
                snaptr('track', 'ADD_CART', {

                    product_id: $("#proid").text(),
                    product_name: $("#proname").text(),
                    category: $("#catsing").text(),
                    value: $("#pixelprice").text(),
                    currency: $("#curencncya").text(),

                });








                /***********************************************************************************************************************************************************************************************************************/




                if (typeof ttq !== 'undefined' && ttq.track) {

                    ttq.track('ADD_CART', {

                        product_id: $("#proid").text(),
                        product_name: $("#proname").text(),
                        category: $("#catsing").text(),
                        value: $("#pixelprice").text(),
                        currency: $("#curencncya").text(),

                    });

                }
            }

        }, 1000)
    })




















    $("a.burger").click(function() {
        $("body").addClass("ovh");

        var distanceFromTop = $(window).scrollTop();

        $('#mp-menu').css('top', distanceFromTop);

        setTimeout(function() {
            $('.mp-pushed .mp-menu').scrollTop(0);
        }, 50);
    });

    $(".site-outer , .mp-back1 , .site").click(function() {
        $("body").removeClass("ovh")
    })
    $("#mp-menu").pushMenu({
        type: "overlap",
        levelSpacing: 0,
        backClass: "mp-back",
        trigger: ".burger",
        pusher: ".site-outer",
        scrollTop: !1
    });


    var fluid = function() {
        var $theWindowSize = $(this).width();
        if ($theWindowSize < 975) {

            $('.mobile-search-wrapper').prepend($('#search'));
            $('.mobile-cart-wrapper').prepend($('#cart'));
            $('.language-currency-mobile').prepend($('#language-currency'));
        } else {

            $('.desktop-search-wrapper').prepend($('#search'));
            $('.desktop-cart-wrapper').prepend($('#cart'));
            $('.language-currency-desktop').prepend($('#language-currency'));
        }
    };

    // Fire on DOM ready
    fluid();

    // Fire upon resize
    $(window).load(fluid);
});



$(document).ready(function() {
    var fluid2 = function() {
        var $theWindowSize = $(this).width();
        if ($theWindowSize > 975) {
            $(function() {
                $('.cat-wrap').hover(function() {
                        $(this).addClass('open');
                    },
                    function() {
                        $(this).removeClass('open');
                    });
            });

            // $(function(){
            //     $('.dropdown').hover(function() {
            //         $(this).addClass('open');
            //     },
            //     function() {
            //         $(this).removeClass('open');
            //     });
            // });
        }
    };

    // Fire on DOM ready
    fluid2();

    // Fire upon resize
    $(window).resize(fluid2);
});




$(document).ready(function() {

    setTimeout(function() {
        $('.product-thumb h4').matchHeight();
        $('.product-thumb .price').matchHeight();
        $('.featured1 .product-thumb .caption .desc').matchHeight();

    }, 100);




    var element = jQuery('#cart .red').clone();
    element.appendTo('.cart2');

    $(".nav-btn").click(function() {
        $("#collapse-menu").addClass('active');
    });

    $("#collapse-menu .close-nav").click(function() {
        $(this).parents('#collapse-menu').removeClass('active')
    });
    // $( "body" ).click(function() {
    // 	if (event.target.id != "nav-btn") {
    // 		// $("#drop").hide();
    // 		$('#collapse-menu').removeClass('active');
    // 	}
    // });

    $(document).mouseup(function(e) {
        var container = $("#collapse-menu.active");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
        }
    });

    $('#collapse-menu .list-group-item a').on('click', function() {
        $('#collapse-menu .list-group-item a').removeClass('active');
        $(this).addClass('active');
    });

    // $('.dropdown').hover(function(){ 
    //   $('.dropdown-toggle', this).trigger('click'); 
    // });
    // $('.cat-wrap').hover(function(){ 
    //   $('#dropdownMenuButton', this).trigger('click'); 
    // });
    $('.close-nav').click(function(e) {
        e.preventDefault();
    });

    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });


    $(function() {
        $('.cat-wrap').hover(function() {
                $('.overlay').addClass('active');
            },
            function() {
                $('.overlay').removeClass('active');
            });
    });







    // Highlight any found errors
    $('.text-danger').each(function() {
        var element = $(this).parent().parent();

        if (element.hasClass('form-group')) {
            element.addClass('has-error');
        }
    });

    // Currency
    $('#form-currency .currency-select').on('click', function(e) {
        e.preventDefault();

        $('#form-currency input[name=\'code\']').val($(this).attr('name'));

        $('#form-currency').submit();
    });

    // Language
    $('#form-language .language-select').on('click', function(e) {
        e.preventDefault();

        $('#form-language input[name=\'code\']').val($(this).attr('name'));

        $('#form-language').submit();
    });

    /* Search */
    $('#search input[name=\'search\']').parent().find('button').on('click', function() {
        var url = $('base').attr('href') + 'index.php?route=product/search';

        var value = $('header #search input[name=\'search\']').val();

        if (value) {
            url += '&search=' + encodeURIComponent(value);
        }

        location = url;
    });

    $('#search input[name=\'search\']').on('keydown', function(e) {
        if (e.keyCode == 13) {
            $('header #search input[name=\'search\']').parent().find('button').trigger('click');
        }
    });

    // Menu
    $('#menu .dropdown-menu').each(function() {
        var menu = $('#menu').offset();
        var dropdown = $(this).parent().offset();

        var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 10) + 'px');
        }
    });

    // Product List
    $('#list-view').click(function() {
        $('#content .product-grid > .clearfix').remove();

        $('#content .row > .product-grid').attr('class', 'product-layout product-list col-xs-12');
        $('#grid-view').removeClass('active');
        $('#list-view').addClass('active');

        localStorage.setItem('display', 'list');
    });

    // Product Grid
    $('#grid-view').click(function() {
        // What a shame bootstrap does not take into account dynamically loaded columns
        var cols = $('#column-right, #column-left').length;

        if (cols == 2) {
            $('#content .product-list').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
        } else if (cols == 1) {
            $('#content .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
        } else {
            $('#content .product-list').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
        }

        $('#list-view').removeClass('active');
        $('#grid-view').addClass('active');

        localStorage.setItem('display', 'grid');
    });

    if (localStorage.getItem('display') == 'list') {
        $('#list-view').trigger('click');
        $('#list-view').addClass('active');
    } else {
        $('#grid-view').trigger('click');
        $('#grid-view').addClass('active');
    }

    // Checkout
    $(document).on('keydown', '#collapse-checkout-option input[name=\'email\'], #collapse-checkout-option input[name=\'password\']', function(e) {
        if (e.keyCode == 13) {
            $('#collapse-checkout-option #button-login').trigger('click');
        }
    });

    // tooltips on hover
    $('[data-toggle=\'tooltip\']').tooltip({
        container: 'body'
    });

    // Makes tooltips work on ajax generated content
    $(document).ajaxStop(function() {
        $('[data-toggle=\'tooltip\']').tooltip({
            container: 'body'
        });
    });
});





$('#button-review').click(function() {
    var name_rating = $("#form-review #input-name").val();
    var msg_rating = $("#form-review #input-review").val();
    var selectedRating = $('input[name="rating"]:checked').val();
    var product_Name = $(".page-title").text();





    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'Review',
        ecommerce: {
            product: product_Name,
            name: name_rating,
            message: msg_rating,
            rate: selectedRating
        }


    });






    /***********************************************************************************************************************************************************************************************************************/
    ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) :
                n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    //	alert('run1')
    fbq('init', $("#facrbookpixcode").text()); // Replace with your Facebook Pixel ID
    fbq('set', 'autoConfig', false, $("#facrbookpixcode").text())



    fbq('track', 'Review', {
        product: product_Name,
        name: name_rating,
        message: msg_rating,
        rate: selectedRating


    });



    /***********************************************************************************************************************************************************************************************************************/


    (function(e, t, n) {
        if (e.snaptr) return;
        var a = e.snaptr = function() {
            a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
        };
        a.queue = [];
        var s = 'script';
        r = t.createElement(s);
        r.async = !0;
        r.src = n;
        var u = t.getElementsByTagName(s)[0];
        u.parentNode.insertBefore(r, u);
    })(window, document,
        'https://sc-static.net/scevent.min.js');

    snaptr('init', $("#tiktokpixcode").text(), {
        'user_email': $("#tiktokpixmil").text()
    });
    snaptr('track', 'Review', {

        product: product_Name,
        name: name_rating,
        message: msg_rating,
        rate: selectedRating

    });








    /***********************************************************************************************************************************************************************************************************************/





    if (typeof ttq !== 'undefined' && ttq.track) {
        ttq.track('Review', {

            product: product_Name,
            name: name_rating,
            message: msg_rating,
            rate: selectedRating

        });



    }













})


















var cartinside = {
    'add': function(product_id, quantity, button) {
        var button_id = $(button).attr('id'); // Get the ID of the clicked button
        console.log("Button ID:", button_id);
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: $('.main-options input[type=\'text\'], .main-options input[type=\'hidden\'], .main-options input[type=\'radio\']:checked, .main-options input[type=\'checkbox\']:checked, .main-options select, .main-options textarea'),
            dataType: 'json',
            beforeSend: function() {
                $('#button-cart').button('loading');
            },
            complete: function() {
                $('#button-cart').button('reset');
            },
            success: function(json) {
                $('.alert-dismissible, .text-danger').remove();
                $('.form-group').removeClass('has-error');

                if (json['error']) {
                    if (json['error']['option']) {
                        for (i in json['error']['option']) {
                            var element = $('#input-option' + i.replace('_', '-'));

                            if (element.parent().hasClass('input-group')) {
                                element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            } else {
                                element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                            }
                        }
                    }

                    if (json['error']['recurring']) {
                        $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
                    }

                    // Highlight any found errors
                    $('.text-danger').parent().addClass('has-error');

                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: $(".has-error").offset().top - 50
                        }, 'slow');

                        $(".has-error").each(function() {
                            let el = $(this);
                            el.css({
                                "position": "relative"
                            });
                            for (let i = 0; i < 6; i++) {
                                el.animate({
                                        left: "-10px"
                                    }, 150)
                                    .animate({
                                        left: "10px"
                                    }, 150);
                            }
                            el.animate({
                                left: "0px"
                            }, 150);
                        });
                    }, 100);
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: $(".options-combinations-error").offset().top - 200
                        }, 'slow');

                        $(".has-error").each(function() {
                            let el = $(this);
                            el.css({
                                "position": "relative"
                            });
                            for (let i = 0; i < 6; i++) {
                                el.animate({
                                        left: "-10px"
                                    }, 150)
                                    .animate({
                                        left: "10px"
                                    }, 150);
                            }
                            el.animate({
                                left: "0px"
                            }, 150);
                        });
                    }, 100);
                }

                if (json['success']) {
                    // $('.breadcrumb').after('<div class="alert alert-success alert-dismissible">' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    setTimeout(function() {
                        //      toastr.options = {
                        //      "closeButton": true,
                        //      "debug": false,
                        //      "newestOnTop": true,
                        //      "progressBar": true,
                        //      "positionClass": "toast-top-right",
                        //      "preventDuplicates": false,
                        //      "onclick": null,
                        //      "showDuration": "300",
                        //      "hideDuration": "1000",
                        //      "timeOut": "8000",
                        //      "extendedTimeOut": "1000",
                        //      "showEasing": "swing",
                        //      "hideEasing": "linear",
                        //      "showMethod": "fadeIn",
                        //      "hideMethod": "fadeOut"
                        //  };

                        // toastr.success(json['success2'], json['success']);

                        // $('#button-cart').click(function() {
                        //     setTimeout(function(){
                        //         $('#cart').addClass("open");
                        //     },500)
                        // });



                        $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span id="cart-total"> ' + json['total'] + '</span>');



                        var element = jQuery('#cart .red').clone();
                        $(".cart2 .red").remove();
                        element.appendTo('.cart2');
                        //$('html, body').animate({ scrollTop: 0 }, 'slow');
                        setTimeout(function() {
                                let productsData = [];
                                const $productThumb = $(".infoasa");

                                let labels = [];


                                $('#product .control-label').each(function() {
                                    let attrFor = $(this).attr('for');
                                    if (attrFor && attrFor !== 'input-quantity') {
                                        let text = $(this).text().trim();
                                        labels.push(text);
                                    }

                                });


                                let resultas = '(' + labels.join(', ') + ')';




                                var optionsText = $(".cart-products tbody tr:last-of-type .optioncarting").map(function() {
                                    return $(this).text().trim();
                                }).get().join(", ");

                                var optionnames = "(" + optionsText + ")";
                                var priceText = $(".cart-products tbody tr:last-of-type .pricecarting").text().trim();
                                var priceNumber = priceText.replace(/[^\d.,]/g, '');











                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({
                                    event: 'addToCart',
                                    ecommerce: {
                                        id: $productThumb.find("#proid").text(),
                                        name: $productThumb.find("#proname").text(),
                                        option_name: resultas,
                                        categories: [{
                                            id: $productThumb.find("#catid").text(),
                                            name: $productThumb.find("#catname").text()
                                        }],
                                        category: $productThumb.find("#catsing").text(),
                                        price: json['productpixelprice'],
                                        //     quantity: $productThumb.find("#proquantity").text(),
                                        options: optionnames,
                                    }
                                });


                            }, 1000)

                            /***********************************************************************************************************************************************************************************************************************/
                            ! function(f, b, e, v, n, t, s) {
                                if (f.fbq) return;
                                n = f.fbq = function() {
                                    n.callMethod ?
                                        n.callMethod.apply(n, arguments) :
                                        n.queue.push(arguments);
                                };
                                if (!f._fbq) f._fbq = n;
                                n.push = n;
                                n.loaded = !0;
                                n.version = '2.0';
                                n.queue = [];
                                t = b.createElement(e);
                                t.async = !0;
                                t.src = v;
                                s = b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t, s);
                            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                        //	alert('run1')
                        fbq('init', $("#facrbookpixcode").text()); // Replace with your Facebook Pixel ID
                        fbq('set', 'autoConfig', false, $("#facrbookpixcode").text())


                        setTimeout(function() {
                            var optionsText = $(".cart-products tbody tr:last-of-type .optioncarting").map(function() {
                                return $(this).text().trim();
                            }).get().join(", ");

                            var optionnames = "(" + optionsText + ")";
                            var priceText = $(".cart-products tbody tr:last-of-type .pricecarting").text().trim();
                            var priceNumber = priceText.replace(/[^\d.,]/g, '');




                            fbq('track', 'AddToCart', {

                                product_id: json['productidweso'],
                                product_name: json['productnameweso'],
                                options: optionnames,
                                value: json['productpixelprice'],
                                currency: json['productcurrenvuweso'],


                            });
                        }, 500);









                        // var originalFbq = fbq;
                        // fbq = function() {
                        // 	if (arguments[0] === 'track' && arguments[1] === 'AddToCart') {
                        //
                        //
                        //
                        // 		fbq('track', 'AddToCart', { content_ids: [], content_type: 'product' , event_id: json['productidweso'] });
                        //
                        //
                        //
                        //
                        // 	}
                        // 	originalFbq.apply(this, arguments);
                        // }


                        /***********************************************************************************************************************************************************************************************************************/


                        (function(e, t, n) {
                            if (e.snaptr) return;
                            var a = e.snaptr = function() {
                                a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                            };
                            a.queue = [];
                            var s = 'script';
                            r = t.createElement(s);
                            r.async = !0;
                            r.src = n;
                            var u = t.getElementsByTagName(s)[0];
                            u.parentNode.insertBefore(r, u);
                        })(window, document,
                            'https://sc-static.net/scevent.min.js');

                        snaptr('init', $("#tiktokpixcode").text(), {
                            'user_email': $("#tiktokpixmil").text()
                        });




                        setTimeout(function() {
                            var optionsText = $(".cart-products tbody tr:last-of-type .optioncarting").map(function() {
                                return $(this).text().trim();
                            }).get().join(", ");

                            var optionnames = "(" + optionsText + ")";
                            var priceText = $(".cart-products tbody tr:last-of-type .pricecarting").text().trim();
                            var priceNumber = priceText.replace(/[^\d.,]/g, '');


                            snaptr('track', 'ADD_CART', {

                                product_id: json['productidweso'],
                                product_name: json['productnameweso'],
                                options: optionnames,
                                value: json['productpixelprice'],
                                currency: json['productcurrenvuweso'],

                            });


                        }, 500);














                        /***********************************************************************************************************************************************************************************************************************/

                        setTimeout(function() {
                            var optionsText = $(".cart-products tbody tr:last-of-type  .optioncarting").map(function() {
                                return $(this).text().trim();
                            }).get().join(", ");

                            var optionnames = "(" + optionsText + ")";
                            var priceText = $(".cart-products tbody tr:last-of-type .pricecarting").text().trim();
                            var priceNumber = priceText.replace(/[^\d.,]/g, '');


                            ;

                            if (typeof ttq !== 'undefined' && ttq.track) {

                                ttq.track('ADD_CART', {

                                    product_id: json['productidweso'],
                                    product_name: json['productnameweso'],
                                    options: optionnames,
                                    value: json['productpixelprice'],
                                    currency: json['productcurrenvuweso'],
                                });
                            }

                        }, 500);






                        if (button_id == 'button-checkout') {
                            window.location = 'index.php?route=checkout/checkout'
                        } else {
                            $('#cart').addClass("open");
                        }






                    }, 100)

                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    },
}















// Cart add remove functions
var cart = {
    'add': function(product_id, quantity) {
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                $('.alert-dismissible, .text-danger').remove();

                if (json['redirect']) {
                    location = json['redirect'];
                }

                if (json['success']) {
                    //$('#content').parent().before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    // toastr.options = {
                    //     "closeButton": true,
                    //     "debug": false,
                    //     "newestOnTop": true,
                    //     "progressBar": true,
                    //     "positionClass": "toast-top-right",
                    //     "preventDuplicates": false,
                    //     "onclick": null,
                    //     "showDuration": "300",
                    //     "hideDuration": "1000",
                    //     "timeOut": "8000",
                    //     "extendedTimeOut": "1000",
                    //     "showEasing": "swing",
                    //     "hideEasing": "linear",
                    //     "showMethod": "fadeIn",
                    //     "hideMethod": "fadeOut"
                    // };

                    // toastr.success( json['success2'], json['success'] );

                    // Need to set timeout otherwise it wont update the total
                    setTimeout(function() {
                        $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span id="cart-total"> ' + json['total'] + '</span>');

                        var element = jQuery('#cart .red').clone();
                        element.appendTo('.cart2');

                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            event: 'addToCart',
                            ecommerce: {

                                product_id: product_id,
                                product_name: json['productnameweso'],
                                value: json['productpixelprice'],
                                currency: json['productcurrenvuweso'],
                            }
                        });
                        /***********************************************************************************************************************************************************************************************************************/
                        ! function(f, b, e, v, n, t, s) {
                            if (f.fbq) return;
                            n = f.fbq = function() {
                                n.callMethod ?
                                    n.callMethod.apply(n, arguments) :
                                    n.queue.push(arguments);
                            };
                            if (!f._fbq) f._fbq = n;
                            n.push = n;
                            n.loaded = !0;
                            n.version = '2.0';
                            n.queue = [];
                            t = b.createElement(e);
                            t.async = !0;
                            t.src = v;
                            s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s);
                        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                        //	alert('run1')
                        fbq('init', $("#facrbookpixcode").text()); // Replace with your Facebook Pixel ID
                        fbq('set', 'autoConfig', false, $("#facrbookpixcode").text())


                        fbq('track', 'AddToCart', {

                            product_id: product_id,
                            product_name: json['productnameweso'],
                            value: json['productpixelprice'],
                            currency: json['productcurrenvuweso'],

                        });


                        // var originalFbq = fbq;
                        // fbq = function() {
                        // 	if (arguments[0] === 'track' && arguments[1] === 'AddToCart') {
                        //
                        //
                        //
                        // 		fbq('track', 'AddToCart', { content_ids: [], content_type: 'product' , event_id: product_id });
                        //
                        //
                        //
                        //
                        // 	}
                        // 	originalFbq.apply(this, arguments);
                        // }


                        /***********************************************************************************************************************************************************************************************************************/


                        (function(e, t, n) {
                            if (e.snaptr) return;
                            var a = e.snaptr = function() {
                                a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                            };
                            a.queue = [];
                            var s = 'script';
                            r = t.createElement(s);
                            r.async = !0;
                            r.src = n;
                            var u = t.getElementsByTagName(s)[0];
                            u.parentNode.insertBefore(r, u);
                        })(window, document,
                            'https://sc-static.net/scevent.min.js');

                        snaptr('init', $("#tiktokpixcode").text(), {
                            'user_email': $("#tiktokpixmil").text()
                        });
                        snaptr('track', 'ADD_CART', {

                            product_id: product_id,
                            product_name: json['productnameweso'],
                            value: json['productpixelprice'],
                            currency: json['productcurrenvuweso'],

                        });








                        /***********************************************************************************************************************************************************************************************************************/




                        if (typeof ttq !== 'undefined' && ttq.track) {

                            ttq.track('ADD_CART', {

                                product_id: product_id,
                                product_name: json['productnameweso'],
                                value: json['productpixelprice'],
                                currency: json['productcurrenvuweso'],

                            });



                        }



                        $('#cart').addClass("open");



                    }, 100);

                    //$('html, body').animate({ scrollTop: 0 }, 'slow');

                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    },
    'update': function(key, quantity) {
        $.ajax({
            url: 'index.php?route=checkout/cart/edit',
            type: 'post',
            data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                // Need to set timeout otherwise it wont update the total
                setTimeout(function() {
                    $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span id="cart-total"> ' + json['total'] + '</span>');

                    var element = jQuery('.red').clone();
                    element.appendTo('.cart2');
                }, 100);

                if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
                    location = 'index.php?route=checkout/cart';
                } else {
                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    },
    'remove': function(key) {
        $.ajax({
            url: 'index.php?route=checkout/cart/remove',
            type: 'post',
            data: 'key=' + key,
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                // Need to set timeout otherwise it wont update the total
                setTimeout(function() {
                    $('#cart > button').html('<i class="fa fa-shopping-cart"></i><span id="cart-total"> ' + json['total'] + '</span>');

                    var element = jQuery('.red').clone();
                    element.appendTo('.cart2');
                }, 100);

                if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
                    location = 'index.php?route=checkout/cart';
                } else {
                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }
}

var voucher = {
    'add': function() {

    },
    'remove': function(key) {
        $.ajax({
            url: 'index.php?route=checkout/cart/remove',
            type: 'post',
            data: 'key=' + key,
            dataType: 'json',
            beforeSend: function() {
                $('#cart > button').button('loading');
            },
            complete: function() {
                $('#cart > button').button('reset');
            },
            success: function(json) {
                // Need to set timeout otherwise it wont update the total
                setTimeout(function() {
                    $('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
                }, 100);

                if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
                    location = 'index.php?route=checkout/cart';
                } else {
                    $('#cart > ul').load('index.php?route=common/cart/info ul li');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    }
}

var wishlist = {
    'add': function(product_id) {
        $.ajax({
            url: 'index.php?route=account/wishlist/add',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            success: function(json) {
                $('.alert-dismissible').remove();

                if (json['redirect']) {
                    location = json['redirect'];
                }

                if (json['success']) {
                    //$('#content').parent().before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": true,
                        "toastClass": 'toast toast-wish toast-wish-success',
                        "positionClass": "toast-top-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "8000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };

                    toastr.success(json['success']);

                    setTimeout(function() {

                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            event: 'addToWishlist',
                            ecommerce: {
                                product_id: product_id,
                                product_name: json['productnamewesoa']
                            }
                        });

                        /***********************************************************************************************************************************************************************************************************************/
                        ! function(f, b, e, v, n, t, s) {
                            if (f.fbq) return;
                            n = f.fbq = function() {
                                n.callMethod ?
                                    n.callMethod.apply(n, arguments) :
                                    n.queue.push(arguments);
                            };
                            if (!f._fbq) f._fbq = n;
                            n.push = n;
                            n.loaded = !0;
                            n.version = '2.0';
                            n.queue = [];
                            t = b.createElement(e);
                            t.async = !0;
                            t.src = v;
                            s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s);
                        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                        //	alert('run1')
                        fbq('init', $("#facrbookpixcode").text()); // Replace with your Facebook Pixel ID
                        fbq('set', 'autoConfig', false, $("#facrbookpixcode").text())


                        fbq('track', 'AddToWishlist', {

                            product_id: product_id,
                            product_name: json['productnamewesoa']

                        });


                        // var originalFbq = fbq;
                        // fbq = function() {
                        // 	if (arguments[0] === 'track' && arguments[1] === 'AddToCart') {
                        //
                        //
                        //
                        // 		fbq('track', 'AddToCart', { content_ids: [], content_type: 'product' , event_id: product_id });
                        //
                        //
                        //
                        //
                        // 	}
                        // 	originalFbq.apply(this, arguments);
                        // }


                        /***********************************************************************************************************************************************************************************************************************/


                        (function(e, t, n) {
                            if (e.snaptr) return;
                            var a = e.snaptr = function() {
                                a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
                            };
                            a.queue = [];
                            var s = 'script';
                            r = t.createElement(s);
                            r.async = !0;
                            r.src = n;
                            var u = t.getElementsByTagName(s)[0];
                            u.parentNode.insertBefore(r, u);
                        })(window, document,
                            'https://sc-static.net/scevent.min.js');

                        snaptr('init', $("#tiktokpixcode").text(), {
                            'user_email': $("#tiktokpixmil").text()
                        });
                        snaptr('track', 'ADD_TO_WISHLIST', {

                            product_id: product_id,
                            product_name: json['productnamewesoa']

                        });


                        /***********************************************************************************************************************************************************************************************************************/


                        if (typeof ttq !== 'undefined' && ttq.track) {
                            ttq.track('ADD_TO_WISHLIST', {

                                product_id: product_id,
                                product_name: json['productnamewesoa']
                            });
                        }
                    }, 500)



                }

                if (json['info']) {
                    //$('#content').parent().before('<div class="alert alert-info"><i class="fa fa-info-circle"></i> ' + json['info'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": true,
                        "toastClass": 'toast toast-wish',
                        "positionClass": "toast-top-right",
                        "preventDuplicates": true,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "8000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };

                    toastr.info(json['info']);
                }

                $('#wishlist-total span:first-child').html(json['total']);
                // $('#wishlist-total').attr('title', json['total']);


                // $('html, body').animate({ scrollTop: 0 }, 'slow');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    },
    'remove': function() {

    }
}

$(document).ready(function() {
    if ($('#wishlist-total span .red-wish').text().trim() == '0') {
        $('#wishlist-total span .red-wish').hide();
    } else {
        $('#wishlist-total span .red-wish').show();
    }

    if ($('#compare-total span .red-com').text().trim() == '0') {
        $('#compare-total span .red-com').hide();
    } else {
        $('#compare-total span .red-com').show();
    }
});


var compare = {
    'add': function(product_id) {
        $.ajax({
            url: 'index.php?route=product/compare/add',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            success: function(json) {
                $('.alert-dismissible').remove();

                if (json['success']) {
                    //$('#content').parent().before('<div class="alert alert-success alert-dismissible"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": true,
                        "toastClass": 'toast toast-wish',
                        "positionClass": "toast-top-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "8000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };

                    toastr.success(json['success']);

                    $('#compare-total span:first-child').html(json['total']);



                    // $('html, body').animate({ scrollTop: 0 }, 'slow');
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
    },
    'remove': function() {

    }
}

/* Agree to Terms */
$(document).delegate('.agree', 'click', function(e) {
    e.preventDefault();

    $('#modal-agree').remove();

    var element = this;

    $.ajax({
        url: $(element).attr('href'),
        type: 'get',
        dataType: 'html',
        success: function(data) {
            html = '<div id="modal-agree" class="modal">';
            html += '  <div class="modal-dialog">';
            html += '    <div class="modal-content">';
            html += '      <div class="modal-header">';
            html += '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
            html += '        <h4 class="modal-title">' + $(element).text() + '</h4>';
            html += '      </div>';
            html += '      <div class="modal-body">' + data + '</div>';
            html += '    </div>';
            html += '  </div>';
            html += '</div>';

            $('body').append(html);

            $('#modal-agree').modal('show');
        }
    });
});

// Autocomplete */
(function($) {
    $.fn.autocomplete = function(option) {
        return this.each(function() {
            this.timer = null;
            this.items = new Array();

            $.extend(this, option);

            $(this).attr('autocomplete', 'off');

            // Focus
            $(this).on('focus', function() {
                this.request();
            });

            // Blur
            $(this).on('blur', function() {
                setTimeout(function(object) {
                    object.hide();
                }, 200, this);
            });

            // Keydown
            $(this).on('keydown', function(event) {
                switch (event.keyCode) {
                    case 27: // escape
                        this.hide();
                        break;
                    default:
                        this.request();
                        break;
                }
            });

            // Click
            this.click = function(event) {
                event.preventDefault();

                value = $(event.target).parent().attr('data-value');

                if (value && this.items[value]) {
                    this.select(this.items[value]);
                }
            }

            // Show
            this.show = function() {
                var pos = $(this).position();

                $(this).siblings('ul.dropdown-menu').css({
                    top: pos.top + $(this).outerHeight(),
                    left: pos.left
                });

                $(this).siblings('ul.dropdown-menu').show();
            }

            // Hide
            this.hide = function() {
                $(this).siblings('ul.dropdown-menu').hide();
            }

            // Request
            this.request = function() {
                clearTimeout(this.timer);

                this.timer = setTimeout(function(object) {
                    object.source($(object).val(), $.proxy(object.response, object));
                }, 200, this);
            }

            // Response
            this.response = function(json) {
                html = '';

                if (json.length) {
                    for (i = 0; i < json.length; i++) {
                        this.items[json[i]['value']] = json[i];
                    }

                    for (i = 0; i < json.length; i++) {
                        if (!json[i]['category']) {
                            html += '<li data-value="' + json[i]['value'] + '"><a href="#">' + json[i]['label'] + '</a></li>';
                        }
                    }

                    // Get all the ones with a categories
                    var category = new Array();

                    for (i = 0; i < json.length; i++) {
                        if (json[i]['category']) {
                            if (!category[json[i]['category']]) {
                                category[json[i]['category']] = new Array();
                                category[json[i]['category']]['name'] = json[i]['category'];
                                category[json[i]['category']]['item'] = new Array();
                            }

                            category[json[i]['category']]['item'].push(json[i]);
                        }
                    }

                    for (i in category) {
                        html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

                        for (j = 0; j < category[i]['item'].length; j++) {
                            html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
                        }
                    }
                }

                if (html) {
                    this.show();
                } else {
                    this.hide();
                }

                $(this).siblings('ul.dropdown-menu').html(html);
            }

            $(this).after('<ul class="dropdown-menu"></ul>');
            $(this).siblings('ul.dropdown-menu').delegate('a', 'click', $.proxy(this.click, this));

        });
    }
})(window.jQuery);