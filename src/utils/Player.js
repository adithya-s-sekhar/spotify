

const Player = (album = null, albumIndex = 0) => {
    if (album === null) { return 0 }

    let currArt = document.querySelector('.np-item-art-img');
    let currTitle = document.querySelector('.np-item-title');
    let currArtist = document.querySelector('.np-item-artist');
    let currDur = document.querySelector('.np-curr-dur');
    let totalDur = document.querySelector('.np-total-dur');

    let trackIndex = albumIndex-1;
    let isPlaying = false;
    let updateTimer;

    let currTrack = document.createElement('audio');
    let trackList = album.songs;

    loadTrack(trackIndex);
    
    function loadTrack(trackIndex){
        clearInterval(updateTimer);
        resetValues();

        currTrack.src = trackList[trackIndex].songFile;
        currTrack.load();
        
        currArt.src = album.art;
        currTitle.textContent = trackList[trackIndex].songTitle;
        currArtist.textContent = trackList[trackIndex].songArtist;

        // updateTimer  = setInterval(seekUpdate, 1000);

        // currTrack.addEventListener("ended", nextTrack);

        playTrack();
    }

    function resetValues(){
        currDur.textContent = "00:00";
        totalDur.textContent = "00:00";
    }

    function playTrack() {
        currTrack.play();
        console.log("test");
        console.log(currTrack);
        isPlaying = true;
    }

    function pauseTrack() {
        currTrack.pause();
        isPlaying = false;
    }

    function togglePlay(){
        if (isPlaying === true) {
            pauseTrack();
        } else {
            playTrack();
        }
    }
}
 
export default Player;