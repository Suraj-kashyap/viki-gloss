// Responsive Menu
// var main = function () {
//     $('.toogle-menu').click(function () {
//       $('.main-nav').animate({ left: '0px' }, 200);
//       $('body').animate({ left: '285px' }, 250);
//       $('body').addClass('overflow-hidden');
//     });
//     $('.icon-close').click(function () {
//       $('.main-nav').animate({ left: '-285px' }, 200);
//       $('body').animate({ left: '0px' }, 200);
//       $('body').removeClass('overflow-hidden');
//     });
//   };
  
//   $(document).ready(main);

  // Header Scroll

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
   if (sc > 0) {
       $(".header-clone").addClass("small")
   } else {
       $(".header-clone").removeClass("small")
   }
});

// Responsive Menu

(function(){
    
  'use strict';
  
  
  var menuIcon = document.querySelector('.toogle-menu');
  var menu = document.querySelector('.main-nav');
  var body = document.body;
  var bodyClass = 'menu-active';
  var show = false;
  var timeout = 300; // transition or animation duration
  
  
  menuIcon.addEventListener('click', function() {
      show = !show;
      if (show) return showMenu();
      return closeMenu();
  }, false);
  
  
  function showMenu() {
      menu.style.display = 'flex';

      setTimeout(function() {
          body.classList.add(bodyClass);
      }, 0);
  }
  
  function closeMenu() {
      body.classList.remove(bodyClass);

      setTimeout(function() {
          menu.style.display = 'none';
      }, timeout);
  }
  
  
}());

//FAQ Toggle

$(function() {
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.collapse-toggle');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.collapse-content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.faq_accordion'), false);
});