function add_html() {
    var nav = "<nav class='navbar navbar-light bg-light'>\
                <a class='nav-link' href='./index.html'>Home</a>\
                <a class='nav-link' href='./placeholder.html'>Resume</a>\
                <a class='nav-link' href='./education.html'>Education</a>\
                <a class='nav-link' href='./placeholder.html'>Projects</a>\
                <a class='nav-link' href='./msc-project.html'>MSc Project Blog</a>\
                <a class='nav-link' href='./placeholder.html'>Contact</a>\
            </nav>"

    info ="<div class='alert alert-info'>\
            <strong>Info!</strong> This site has only recently started being developed. Most pages will be created soon, check back to see more later.\
        </div>"
    var target = document.getElementById('target-nav');
    target.insertAdjacentHTML("afterbegin", nav+info);

}


window.onload = add_html();