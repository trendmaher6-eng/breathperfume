    /*
      Product Quick View
      OpenCart Version: 2.3 - 3.x
      Author: MagDevel (support@magdevel.com)
      Home: https://magdevel.com
    */

    $(document).ready(function() {
        if (window.productQuickView) {
            var defaults = {
                text_quick_view: 'Quick View',
                btn_in_cart: 'In Cart',
                text_loading: 'Loading...',
                show_button: 1,
                click_on_image: 0,
                click_on_link: 0,
                replace_button: 0,
            };

            var options = window.productQuickView;

            for (var i in defaults) {
                if (typeof options[i] === 'undefined') {
                    options[i] = defaults[i];
                }
            }

            var o = options;

            $('.product-quick-view-data').each(function() {
                var container = $(this).parent().find(".pro_buttons");
                var productId = $(this).attr("data-pid");

                var productprice;

                var priceNewElement = $(this).parent().find(".price .price-new");
                if (priceNewElement.length) {
                    productprice = priceNewElement.text();
                } else {
                    productprice = $(this).parent().find(".price").text();
                }

                var numericPrice = productprice.replace(/[^0-9.,]/g, '');

                var numericValue = parseFloat(numericPrice.replace(',', '.'));
                var productname = $(this).parent().find(".caption h4 a").text();




                if (o.show_button) {
                    var btnHtml = '<div class="btn-quick-view" onclick="pqvOpenPopup( \'' + productname + '\', \'' + numericValue + '\', \'' + productId + '\')">' +
                        '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0578 8.33854C9.97972 8.33854 8.29512 10.0231 8.29512 12.1012C8.29512 14.1793 9.97972 15.8639 12.0578 15.8639C14.1358 15.8639 15.8204 14.1793 15.8204 12.1012C15.8204 10.0231 14.1358 8.33854 12.0578 8.33854ZM9.80019 12.1012C9.80019 10.8544 10.8109 9.8436 12.0578 9.8436C13.3046 9.8436 14.3154 10.8544 14.3154 12.1012C14.3154 13.348 13.3046 14.3588 12.0578 14.3588C10.8109 14.3588 9.80019 13.348 9.80019 12.1012Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0578 3.32166C7.52841 3.32166 4.47757 6.03498 2.70688 8.33539L2.67495 8.37687C2.2745 8.89695 1.90568 9.37595 1.65546 9.94233C1.38752 10.5488 1.27148 11.2099 1.27148 12.1012C1.27148 12.9925 1.38752 13.6536 1.65546 14.2601C1.90568 14.8265 2.2745 15.3055 2.67495 15.8255L2.70688 15.867C4.47757 18.1674 7.52841 20.8807 12.0578 20.8807C16.5872 20.8807 19.638 18.1674 21.4087 15.867L21.4406 15.8256C21.8411 15.3055 22.2099 14.8265 22.4601 14.2601C22.728 13.6536 22.8441 12.9925 22.8441 12.1012C22.8441 11.2099 22.728 10.5488 22.4601 9.94233C22.2099 9.37594 21.8411 8.89694 21.4406 8.37684L21.4087 8.33539C19.638 6.03498 16.5872 3.32166 12.0578 3.32166ZM3.89955 9.25342C5.53447 7.12939 8.19514 4.82672 12.0578 4.82672C15.9204 4.82672 18.5811 7.12939 20.216 9.25342C20.6561 9.82513 20.9139 10.1667 21.0834 10.5505C21.2419 10.9092 21.339 11.3476 21.339 12.1012C21.339 12.8548 21.2419 13.2932 21.0834 13.6519C20.9139 14.0357 20.6561 14.3773 20.216 14.949C18.5811 17.073 15.9204 19.3757 12.0578 19.3757C8.19514 19.3757 5.53447 17.073 3.89955 14.949C3.45948 14.3773 3.20172 14.0357 3.03217 13.6519C2.87371 13.2932 2.77655 12.8548 2.77655 12.1012C2.77655 11.3476 2.87371 10.9092 3.03217 10.5505C3.20172 10.1667 3.45948 9.82513 3.89955 9.25342Z" fill="white"/></svg></div>';


                    if (container.length) {
                        container.append(btnHtml);

                        if (window.productQuickView.text_quick_view && $(window).width() > 991) {
                            container.find(".btn-quick-view").tooltip({
                                title: window.productQuickView.text_quick_view,
                                delay: {
                                    "show": 100,
                                    "hide": 0,
                                }
                            });
                        }
                    }
                }

                if (o.click_on_image) {
                    container.find("a").on("click", function(e) {
                        e.preventDefault();
                        pqvOpenPopup(productId);
                    });
                }

                if (o.click_on_link) {
                    $(this).parent().find(".caption a").on("click", function(e) {
                        e.preventDefault();
                        pqvOpenPopup(productId);
                    });
                }
            });
        }
    });

    function pqvShowLoader() {
        var position = $(window).width() / 2;
        $(".pqv-loader").remove();
        $("body").append('<div class="pqv-loader">' + window.productQuickView.text_loading + '</div>');
        $(".pqv-loader").css("left", position + "px");
    }

    function pqvHideLoader() {
        $(".pqv-loader").remove();
    }

    function pqvUpdateMiniCart() {
        $('#cart').load('index.php?route=common/cart/info #cart > *');
    }

    function pqvChangeImage(imageNumber) {
        var elements = document.getElementsByClassName('pqv-image');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        elements[imageNumber].style.display = 'block';
    }

    function pqvOpenPopup(productname, numericValue, product_id) {
        // console.log(product_id +numericValue + productname)



        var curr = $("#currcode").text();
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



        fbq('track', 'ViewContentQucik', {
            id: product_id,
            name: productname,
            value: numericValue,
            currency: curr

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
        snaptr('track', 'ViewContentQucik', {

            id: product_id,
            name: productname,
            value: numericValue,
            currency: curr
        });








        /***********************************************************************************************************************************************************************************************************************/




        if (typeof ttq !== 'undefined' && ttq.track) {

            ttq.track('ViewContentQucik', {

                id: product_id,
                name: productname,
                value: numericValue,
                currency: curr
            });
        }

        /***********************************************************************************************************************************************************************************************************************/
        var curr = $("#currcode").text();
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'ViewContentQucik',
            ecommerce: {
                currency: curr,
                id: product_id,
                name: productname,
                value: numericValue,
                currency: curr
            }
        });















        /***********************************************************************************************************************************************************************************************************************/





        pqvShowLoader();
        $.magnificPopup.open({
            tLoading: false,
            items: {
                src: 'index.php?route=extension/module/product_quick_view/popup&product_id=' + product_id,
                type: 'ajax'
            },
            showCloseBtn: false,
            removalDelay: 300,
            mainClass: 'pqv-mfp-zoom-in',
            callbacks: {
                beforeOpen: function() {
                    $('.tooltip').hide();
                },
                ajaxContentAdded: function() {
                    pqvHideLoader();
                    $('.pqv-zoom').zoom();
                    pqvOptionsInit();
                    pqvReviewsInit(product_id);
                }
            }
        });
    }

    function pqvClose() {
        $.magnificPopup.close();
    }

    function pqvOptionsInit() {
        $('.date').datetimepicker({
            pickTime: false
        });
        $('.datetime').datetimepicker({
            pickDate: true,
            pickTime: true
        });
        $('.time').datetimepicker({
            pickDate: false
        });
        $('button[id^=\'button-upload\']').on('click', function() {
            var node = this;
            $('#form-upload').remove();
            $('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');
            $('#form-upload input[name=\'file\']').trigger('click');
            if (typeof timer != 'undefined') {
                clearInterval(timer);
            }
            timer = setInterval(function() {
                if ($('#form-upload input[name=\'file\']').val() != '') {
                    clearInterval(timer);
                    $.ajax({
                        url: 'index.php?route=tool/upload',
                        type: 'post',
                        dataType: 'json',
                        data: new FormData($('#form-upload')[0]),
                        cache: false,
                        contentType: false,
                        processData: false,
                        beforeSend: function() {
                            $(node).button('loading');
                        },
                        complete: function() {
                            $(node).button('reset');
                        },
                        success: function(json) {
                            $('.text-danger').remove();
                            if (json.error) {
                                $(node).parent().find('input').after('<div class="text-danger">' + json.error + '</div>');
                            }
                            if (json.success) {
                                alert(json.success);
                                $(node).parent().find('input').val(json.code);
                            }
                        }
                    });
                }
            }, 500);
        });
    }

    function pqvReplaceButton() {
        if (window.productQuickView && window.productQuickView.replace_button) {
            $("#pqv-button-cart").text(window.productQuickView.btn_in_cart);
            $("#pqv-button-cart").addClass("pqv-btn-in-cart");
        }
    }

    function pqvAddToCart(product_id, close_if_success) {
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: $('#pqv_product input[type=\'text\'], #pqv_product input[type=\'hidden\'], #pqv_product input[type=\'radio\']:checked, #pqv_product input[type=\'checkbox\']:checked, #pqv_product select, #pqv_product textarea'),
            dataType: 'json',
            beforeSend: function() {
                $("#pqv-button-cart").button("loading");
            },
            complete: function() {
                $("#pqv-button-cart").button("reset");

            },
            success: function(json) {


                $('.pqv-alert, .pqv-body .text-danger').remove();
                $('.pqv-body .form-group').removeClass('has-error');
                if (json.error) {
                    if (json.error.option) {
                        for (var i in json.error.option) {
                            var element = $('#input-option' + i.replace('_', '-'));
                            if (element.parent().hasClass('input-group')) {
                                element.parent().after('<div class="text-danger">' + json.error.option[i] + '</div>');
                            } else {
                                element.after('<div class="text-danger">' + json.error.option[i] + '</div>');
                            }
                        }
                    }
                    if (json.error.recurring) {
                        $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json.error.recurring + '</div>');
                    }
                    $('.pqv-body .text-danger').parent().addClass('has-error');

                    var pqvErrorPosition = parseInt($('.pqv-body .has-error:first').position().top) + 10;
                    var pqvCurrentScrollTop = parseInt($('.pqv-body').scrollTop());

                    if (pqvCurrentScrollTop > pqvErrorPosition) {
                        $('.pqv-body').animate({
                            scrollTop: pqvErrorPosition
                        }, 'slow');
                    }
                }
                if (json.success) {








                    setTimeout(function() {
                        //       alert("www")




                        const $productThumb = $(".infoasa-" + product_id);

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





                        var curr = $("#currcode").text();



                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            event: 'addToCart',
                            ecommerce: {
                                currency: curr,
                                id: $productThumb.find("#proid").text(),
                                name: $productThumb.find("#proname").text(),
                                option_name: resultas,
                                categories: [{
                                    id: $productThumb.find("#catid").text(),
                                    name: $productThumb.find("#catname").text()
                                }],
                                category: $productThumb.find("#catsing").text(),
                                price: json['productpixelprice'],
                                quantity: $productThumb.find("#proquantity").text(),
                                options: optionnames,

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



                    }, 1000)

                    pqvUpdateMiniCart();

                    setTimeout(function() {
                        pqvReplaceButton();
                    }, 100);

                    // Add to cart button change (replace button)
                    if (window.abcData &&
                        window.abcData.replace_button_cp === '1' &&
                        typeof abcReplaceButton === 'function'
                    ) {
                        abcReplaceButton(product_id);
                    }

                    // Advanced Pop-up Cart (replace button)
                    if (window.apc && typeof window.apc.ReplaceButton === 'function') {
                        apc.ReplaceButton(product_id);
                    }

                    if (close_if_success) {

                        pqvClose();
                        setTimeout(function() {
                            // Add to cart button change (show notification)
                            if (window.abcData && typeof abcNotify === 'function') {
                                abcNotify(json.success, 'success');
                                return;
                            }

                            // Advanced Pop-up Cart (open pop-up cart)
                            if (window.apc && typeof window.apc.OpenPopupCart === 'function') {
                                apc.OpenPopupCart("autoclose");
                                return;
                            }

                            // Default Notification
                            //$('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json.success + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                            toastr.options = {
                                "closeButton": true,
                                "debug": false,
                                "newestOnTop": true,
                                "progressBar": true,
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

                            toastr.success(json['success2'], json['success']);

                            // $('html, body').animate({
                            //   scrollTop: 0
                            // }, 'slow');
                        }, 300);
                    } else {

                        // $('.pqv-body').animate({
                        //   scrollTop: 0
                        // }, 'slow');
                        // $('#pqv-content').parent().before('<div class="alert alert-success pqv-alert"><i class="fa fa-check-circle"></i> ' + json.success + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": true,
                            "progressBar": true,
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

                        toastr.success(json['success2'], json['success']);


                    }















































                }
            }
        });
    }

    function pqvAddToCartRelated(product_id, quantity) {
        $.ajax({
            url: 'index.php?route=checkout/cart/add',
            type: 'post',
            data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
            dataType: 'json',
            success: function(json) {
                if (json.redirect) {
                    location = json.redirect;
                }
                if (json.success) {
                    $('.pqv-alert').remove();
                    $('#pqv-content').parent().before('<div class="alert alert-success pqv-alert"><i class="fa fa-check-circle"></i> ' + json.success + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    pqvUpdateMiniCart();

                    // Add to cart button change (replace button)
                    if (window.abcData &&
                        window.abcData.replace_button_cp === '1' &&
                        typeof abcReplaceButton === 'function'
                    ) {
                        abcReplaceButton(product_id);
                    }

                    // Advanced Pop-up Cart (replace button)
                    if (window.apc && typeof window.apc.ReplaceButton === 'function') {
                        apc.ReplaceButton(product_id);
                    }
                }
            }
        });
    }

    function pqvWishlist(product_id) {
        $.ajax({
            url: 'index.php?route=account/wishlist/add',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            beforeSend: function() {
                $(".tooltip").hide();
            },
            success: function(json) {
                $('.pqv-alert').remove();
                if (json.redirect) {
                    location = json.redirect;
                }
                if (json.success) {
                    // $('#pqv-content').parent().before('<div class="alert alert-info pqv-alert"><i class="fa fa-exclamation-circle"></i> ' + json.success + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": true,
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

                        const $productThumb = $(".infoasa-" + product_id);


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
                if (json.info) {
                    //  $('#pqv-content').parent().before('<div class="alert alert-info pqv-alert"><i class="fa fa-info-circle"></i> ' + json.info + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": true,
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
                $('#wishlist-total span').html(json.total);
                $('#wishlist-total').attr('title', json.total);
            }
        });
    }

    function pqvCompare(product_id) {
        $.ajax({
            url: 'index.php?route=product/compare/add',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            beforeSend: function() {
                $('.tooltip').hide();
            },
            success: function(json) {
                $('.pqv-alert').remove();
                if (json.success) {
                    //  $('#pqv-content').parent().before('<div class="alert alert-success pqv-alert"><i class="fa fa-check-circle"></i> ' + json.success + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": true,
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


                    $('#compare-total').html(json.total);
                }
            }
        });
    }

    function pqvReviewsInit(product_id) {
        $('#pqv-review').delegate('.pagination a', 'click', function(e) {
            e.preventDefault();
            $('#pqv-review').fadeOut('slow');
            $('#pqv-review').load(this.href);
            $('#pqv-review').fadeIn('slow');
        });
        $('#pqv-review').load('index.php?route=product/product/review&product_id=' + product_id);
    }

    /*  Zoom 1.7.21 license: MIT http://www.jacklmoore.com/zoom */
    (function($) {
        var defaults = {
            url: false,
            callback: false,
            target: false,
            duration: 200,
            on: 'mouseover',
            touch: true,
            onZoomIn: false,
            onZoomOut: false,
            magnify: 1
        };

        $.zoom = function(target, source, img, magnify) {
            var targetHeight,
                targetWidth,
                sourceHeight,
                sourceWidth,
                xRatio,
                yRatio,
                offset,
                $target = $(target),
                position = $target.css('position'),
                $source = $(source);

            target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
            target.style.overflow = 'hidden';
            img.style.width = img.style.height = '';

            $(img)
                .addClass('zoomImg')
                .css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    width: img.width * magnify,
                    height: img.height * magnify,
                    border: 'none',
                    maxWidth: 'none',
                    maxHeight: 'none'
                })
                .appendTo(target);

            return {
                init: function() {
                    targetWidth = $target.outerWidth();
                    targetHeight = $target.outerHeight();

                    if (source === target) {
                        sourceWidth = targetWidth;
                        sourceHeight = targetHeight;
                    } else {
                        sourceWidth = $source.outerWidth();
                        sourceHeight = $source.outerHeight();
                    }

                    xRatio = (img.width - targetWidth) / sourceWidth;
                    yRatio = (img.height - targetHeight) / sourceHeight;
                    offset = $source.offset();
                },
                move: function(e) {
                    var left = (e.pageX - offset.left),
                        top = (e.pageY - offset.top);

                    top = Math.max(Math.min(top, sourceHeight), 0);
                    left = Math.max(Math.min(left, sourceWidth), 0);

                    img.style.left = (left * -xRatio) + 'px';
                    img.style.top = (top * -yRatio) + 'px';
                }
            };
        };

        $.fn.zoom = function(options) {
            return this.each(function() {
                var
                    settings = $.extend({}, defaults, options || {}),
                    target = settings.target && $(settings.target)[0] || this,
                    source = this,
                    $source = $(source),
                    img = document.createElement('img'),
                    $img = $(img),
                    mousemove = 'mousemove.zoom',
                    clicked = false,
                    touched = false;

                if (!settings.url) {
                    var srcElement = source.querySelector('img');
                    if (srcElement) {
                        settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
                    }
                    if (!settings.url) {
                        return;
                    }
                }

                $source.one('zoom.destroy', function(position, overflow) {
                    $source.off(".zoom");
                    target.style.position = position;
                    target.style.overflow = overflow;
                    img.onload = null;
                    $img.remove();
                }.bind(this, target.style.position, target.style.overflow));

                img.onload = function() {
                    var zoom = $.zoom(target, source, img, settings.magnify);

                    function start(e) {
                        zoom.init();
                        zoom.move(e);
                        $img.stop()
                            .fadeTo(settings.duration, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
                    }

                    function stop() {
                        $img.stop()
                            .fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
                    }

                    if (settings.on === 'mouseover') {
                        zoom.init();
                        $source
                            .on('mouseenter.zoom', start)
                            .on('mouseleave.zoom', stop)
                            .on(mousemove, zoom.move);
                    }

                    if (settings.touch) {
                        $source
                            .on('touchstart.zoom', function(e) {
                                e.preventDefault();
                                if (touched) {
                                    touched = false;
                                    stop();
                                } else {
                                    touched = true;
                                    start(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]);
                                }
                            })
                            .on('touchmove.zoom', function(e) {
                                e.preventDefault();
                                zoom.move(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]);
                            })
                            .on('touchend.zoom', function(e) {
                                e.preventDefault();
                                if (touched) {
                                    touched = false;
                                    stop();
                                }
                            });
                    }

                    if ($.isFunction(settings.callback)) {
                        settings.callback.call(img);
                    }
                };

                img.setAttribute('role', 'presentation');
                img.alt = '';
                img.src = settings.url;
            });
        };
        $.fn.zoom.defaults = defaults;
    }(window.jQuery));