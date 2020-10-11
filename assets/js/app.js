// Drag & Drop JS Start

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag_enter(ev) {
    var tgt = ev.currentTarget.firstElementChild;
}

function drop(ev) {
    ev.preventDefault();

    var src = document.getElementById(ev.dataTransfer.getData("text"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;

    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
}

// Drag & Drop js End

// Screenshot js Start

function getScreen() {
    var caption = $("#caption-input").val();
    caption === "" ? (caption = "capture") : caption;

    $("#caption-text").html(caption);
    // $("#panel").hide();
    // $("#picCollection").hide();

    // setTimeout(function () {
    //     $("#panel").show();
    // }, 2000);
    
    // setTimeout(function () {
    //     $("#picCollection").show();
    // }, 2000);

    // html2canvas($('#captureArea'), {
    html2canvas(document.querySelector("#captureArea"), {
        dpi: 200,
        onrendered: function (canvas) {
            $("#blank").attr("href", canvas.toDataURL("image/jpg"));
            $("#blank").attr("download", caption + ".jpg");
            $("#blank")[0].click();
            
            // var url = $("#blank").attr("href");
            // window.open(url, "_blank");
        },
    });

    // html2canvas(document.querySelector("#captureArea"), {
    //     dpi: 200,
    //     onrendered: function (canvas) {
    //         $("#blank").attr("href", canvas.toDataURL("image/png"));
    //         $("#blank").attr("download", caption + ".png");
    //         $("#blank")[0].click();
    //     },
    // }).then((canvas) => {
    //     document.body.appendChild(canvas);
    // });
}

// Screenshot js End
