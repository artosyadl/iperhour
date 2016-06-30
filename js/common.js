'use strict';

// sticky footer
//-----------------------------------------------------------------------------------
if (!Modernizr.flexbox) {
  (function () {
    var $pageWrapper          = $('#page-wrapper'),
        $pageBody             = $('#page-body'),
        noFlexboxStickyFooter = function () {
          $pageBody.height('auto');
          if ($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
            $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
          } else {
            $pageWrapper.height('auto');
          }
        };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if (ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function () {
    var $pageWrapper = $('#page-wrapper'),
        $pageBody    = $('#page-body'),
        ieFlexboxFix = function () {
          if ($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
            $pageWrapper.height($(window).height());
            $pageBody.removeClass('flex-none');
          } else {
            $pageWrapper.height('auto');
          }
        };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

// placeholder
//-----------------------------------------------------------------------------------
$(function () {
  $('input[placeholder], textarea[placeholder]').placeholder();
});

// fixed svg show
//-----------------------------------------------------------------------------
function fixedSvg() {
  var baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
  $('use').filter(function () {
    return ( $(this).attr("xlink:href").indexOf("#") > -1);
  }).each(function () {
    $(this).attr("xlink:href", baseUrl + $(this).attr("xlink:href").split('/').slice(-1)[0]);
  });
}

fixedSvg();

// checking if element for page
//-----------------------------------------------------------------------------------
function isOnPage(selector) {
  return ($(selector).length) ? $(selector) : false;
}



// lang
//-----------------------------------------------------------------------------------
$('.langs').on('click', '.title', function () {
    var parent = $(this).closest('.langs');
    if (!parent.hasClass('js-open')) {
        parent.addClass('js-open');
        $('.langs.js-open').not(parent).removeClass('js-open');
    } else {
        parent.removeClass('js-open');
    }
}).on('click', 'ul>li', function () {
    var parent = $(this).closest('.langs');
    parent.removeClass('js-open').find('.title').text($(this).text());
});
