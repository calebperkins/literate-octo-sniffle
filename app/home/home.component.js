angular
    .module('stitch.home')
    .component('home', {
        templateUrl: 'home/home.component.html',
        bindings: {
            name: '@'
        }
    });
