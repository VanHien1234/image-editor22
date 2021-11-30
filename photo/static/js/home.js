var img = new Image();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
img.id = "imageEdit";
var fileName = "";



$(document).ready(function () {
    $("#upload-btn").on("change", function () {

        $("#vintage-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.vintage().render();
            });
        });
        $("#lomo-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.lomo().render();
            });
        });
        $("#grungy-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.grungy().render();
            });
        });
        $("#orangePeel-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.orangePeel().render();
            });
        });
        $("#oldBoot-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.oldBoot().render();
            });
        });
        $("#hemingway-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.hemingway().render();
            });
        });
        $("#glowingSun-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.glowingSun().render();
            });
        });
        $("#hazyDays-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.hazyDays().render();
            });
        });
        $("#pinhole-btn").on("click", function (e) {
            Caman("#canvas", img, function () {
                this.pinhole().render();
            });
        });


        var file = document.querySelector("#upload-btn").files[0];
        var reader = new FileReader();

        if (file) {
            fileName = file.name;
            reader.readAsDataURL(file);
        }

        reader.addEventListener(
            "load",
            function () {
                img = new Image();
                img.src = reader.result;
                img.onload = function () {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    /* ctx.font = "17px Russo One";
                    ctx.fillStyle = '#DD0000';
                    ctx.fillText("#Edit at IMAGE EDITOR#",10,20); */
                    $("#canvas").removeAttr("data-caman-id");
                };
            },
            false
        );
    });

    $("#download-btn").on("click", function (e) {
        ctx.font = "17px Russo One";
        ctx.fillStyle = '#DD0000';
        ctx.fillText("#Edit at IMAGE EDITOR#", 10, 20);
        $("#canvas").removeAttr("data-caman-id");
        var fileExtension = fileName.slice(-4);
        if (fileExtension == ".jpg" || fileExtension == ".png") {
            var actualName = fileName.substring(0, fileName.length - 4);
        }
        download(canvas, actualName + "-edited.jpg");
    });

    $("#reset-btn").on("click", function (e) {
        $('input[type=range]').val(0);
        Caman('#canvas', img, function () {
            this.revert(false);
            this.render();
        });
    });

    $('input[type=range]').change(applyFilters);
});

function download(canvas, filename) {
    var e;
    var lnk = document.createElement("a");

    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/jpeg", 0.8);

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent(
            "click",
            true,
            true,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );
        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}

function applyFilters() {
    var b = parseInt($('#brightness').val());
    var c = parseInt($('#contrast').val());
    var s = parseInt($('#saturation').val());
    var v = parseInt($('#vibrance').val());
    var e = parseInt($('#exposure').val());
    var g = parseInt($('#hue').val());
    var f = parseInt($('#noise').val());
    var h = parseInt($('#clip').val());
    var l = parseInt($('#stackBlur').val());
    /* var j = parseInt($('#sharpen').val());
    var k = parseInt($('#gamma').val()); */

    Caman('#canvas', img, function () {
        this.revert(false);
        this.brightness(b).contrast(c).saturation(s).vibrance(v).exposure(e).hue(g).noise(f).clip(h).stackBlur(l)./* sharpen(j).gamma(k).  */render();

    });
}

/* POPUP */

$(".Click-here").on('click', function () {
    $(".custom-model-main").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass('model-open');
});
