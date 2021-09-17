(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        createPlatform(700, 580, 0.5, 0.05); //migi
        createPlatform(485, 490, 0.3, 0.05); //coin1
        createPlatform(800, 400, 0.2, 0.001); //coin2
        createPlatform(170, 430, 0.3, 0.02); //hidari
        createPlatform(0, 370, 0.2, 0.01); //hidari
        createPlatform(0, 190, 0.2, 0.001); //coin3
        createPlatform(180, 298, 0.25, 0.01); //step
        createPlatform(270, 280, 0.2, 0.1); //coin4
        createPlatform(450, 300, 0.4, 0.001); //inv
        createPlatform(750, 220, 0.8, 0.02); //final
        createPlatform(850, 160, 0.2, 0.01); //coin5
    
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);