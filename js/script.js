let video = document.getElementById("video_open")

window.addEventListener('scroll', function() {
    let value1 = 1 + window.scrollY/-600;
    video.style.opacity = value1;
})

let progress = document.getElementById('scrollPath')
let totalHeigth = document.body.scrollHeight - window.innerHeight

window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeigth) * 100;
    progress.style.height = progressHeight + "%"
}

