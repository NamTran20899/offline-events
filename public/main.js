var details = document.querySelectorAll('.accordion')

details.forEach(function (d, index) {
    d.onclick = () => {
        details.forEach(function(c, i) {
            var content = c.nextElementSibling;

            var iconPlus = c.querySelector('.plus');
            var iconMinus = c.querySelector('.minus');

            if (index === i) {
                c.classList.toggle("active"); 

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    iconPlus.style.display = "block";
                    iconMinus.style.display = "none";
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    iconPlus.style.display = "none";
                    iconMinus.style.display = "block";
                }
            } else {
                var content2 = c.nextElementSibling;
                
                c.classList.remove("active");
                content2.style.maxHeight = null;
                iconPlus.style.display = "block";
                iconMinus.style.display = "none";
            }
        });
    };
});
