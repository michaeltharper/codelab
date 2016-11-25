$('document').ready(function() {
    
    function mouseout($this) {
        $this.removeClass('hover');
        try {
            getChildren($this).removeClass('children');
        } catch (err) {
            console.error('error in user code');
        }
    
    }
    
    function mouseover($this) {
        $this.addClass('hover');
        try {
            getChildren($this).addClass('children');
        } catch(err) {
            console.error('error in user code');
        }
    }

    $('div').hover(
        function() {
            //remove the styling from its parent
            var $this = $(this);
            if ($this.parent().is('div')) {
                mouseout($this.parent());
            }
            mouseover($this);
        },
        
        function() {
            var $this = $(this);
            mouseout($this);
            if ($this.parent().is('div')) {
                mouseover($this.parent());
            }
        }
    );
});