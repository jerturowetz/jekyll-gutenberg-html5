function menuToggle(x) {

    var y = document.getElementsByClassName( 'dropdown-menu' );
    var dropdownMenu = y[0];

    x.classList.toggle( 'dropdown-open' );
    dropdownMenu.classList.toggle( 'dropdown-open' );

}


var vhFixOptions = [
    {
        selector: '.section--hero',
        vh: 94,

    }
];

var vhFix = new VHChromeFix( vhFixOptions );
