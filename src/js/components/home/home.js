((app) => {
    'use strict'
    app.component('home', {
        templateUrl: 'js/components/home/home.html',
        controller: function() {
          $(document).ready(function() {
  			$('#fullpage').fullpage({
  				sectionsColor: ['#f0eee9', '#f0eee9', '#f0eee9', '#f0eee9', '#61935a'],
  				navigation: true,
  				navigationPosition: 'right',
         			autoScrolling: true,
  			});
  		});
        }
    })
})(angular.module('app.home'))
