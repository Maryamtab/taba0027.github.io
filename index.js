const $div_gallery = document.getElementById("gallery");
const $overlay = document.getElementById("overlay");
$imageClickedDiv = document.getElementById("imageClickedDiv");
const $image_names = [
    "Apple laptop", "Coffe and paper", "Highway in the night", "Monitor", "Cameraman", "Working at the computer", "Green mouse", "Typing", "Blueprint", "Monitor Background", "Camera LCD", "Camerawoman"
];


for (var i = 1; i < 13; i++) {

    const $gallery_item = document.createElement("div");
    const $a = document.createElement("a");
    $a.setAttribute("tabindex", 0);
    $gallery_item.classList.add("gallery_item");
    $a.append($gallery_item);
    $div_gallery.appendChild($a);
    //add images to the webpage
    let $image = document.createElement("img");
    $image.classList.add("image");
    $image.setAttribute("src", `images/num${i}.jpg`);
    $image.setAttribute("title", $image_names[i - 1]);
    $image.setAttribute("alt", $image_names[i - 1]);
    $gallery_item.appendChild($image);

    //add names on each image when hovering on it
    let $image_title = document.createElement("p");
    $image_title.classList.add("image_title");
    $image_title.innerHTML = $image_names[i - 1];
    $image_title.style.visibility = "hidden";
    $gallery_item.appendChild($image_title);

    $gallery_item.addEventListener('mouseenter', function (ev) {
        $gallery_item_nodes = $gallery_item.childNodes;
        $gallery_item_nodes[0].setAttribute('width', "340px");
        $gallery_item_nodes[0].setAttribute('height', "260px");
        $gallery_item_nodes[0].style.filter = "brightness(30%)";
        $gallery_item_nodes[1].style.visibility = "visible";
    });
    $gallery_item.addEventListener('mouseleave', function (ev) {
        $gallery_item_nodes = $gallery_item.childNodes;
        $gallery_item_nodes[0].setAttribute('width', "320px");
        $gallery_item_nodes[0].setAttribute('height', "240px");
        $gallery_item_nodes[0].style.filter = "brightness(100%)";
        $gallery_item_nodes[1].style.visibility = "hidden";
    });
    let $image_overlayed = document.createElement("img");
    $image.addEventListener("click", imageSelected);
    $image_title.addEventListener("click", imageSelected);
    $a.addEventListener('keydown', function (ev) {
        if (ev.key === "Enter" || ev.which === 13) {
            $overlay.style.display = "block";
            $image_overlayed.classList.add("image-overlayed");
            $image_overlayed.setAttribute("src", ev.target.firstChild.firstChild.getAttribute("src"));
            $imageClickedDiv.style.display = "block";
            $imageClickedDiv.appendChild($image_overlayed);
        }
    });


    function imageSelected(ev) {
        event = ev.target.closest(".gallery_item");
        console.log(event);
        $overlay.style.display = "block";
        $image_overlayed.classList.add("image-overlayed");
        $image_overlayed.setAttribute("src", event.firstChild.getAttribute("src"));
        $imageClickedDiv.style.display = "block";
        $imageClickedDiv.appendChild($image_overlayed);
    }

    function overlayOff() {
        let $image_overlayed = document.querySelector('.image-overlayed');
        $image_overlayed.remove();
        $overlay.style.display = "none";
    }

    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            overlayOff();
        }
    };
}
