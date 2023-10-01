function streamVideo(){
    let video = document.querySelector('video')
    let option = {video:true}
    //navigator.mediaDevices.getUserMedia(option) //to open camera
    navigator.mediaDevices.getDisplayMedia(option) // to share screen
    .then(stream=>video.srcObject=stream)
    .catch(err=>console.log(err))
}
console.log("Hello");