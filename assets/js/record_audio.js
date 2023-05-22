var microphoneButton = document.getElementsByClassName("start_record")[0];
var stopRecordingButton = document.getElementsByClassName("stop_record")[0];
var elapsedTimeTag = document.getElementsByClassName("timer_record")[0];
var audioTextTag = document.getElementsByClassName("audio_text")[0];
var audioElement = document.getElementsByClassName("audio-element")[0];
var audioElementSource = document.getElementsByClassName("audio-element")[0]
    .getElementsByTagName("source")[0];

microphoneButton.onclick = startAudioRecording;
stopRecordingButton.onclick = stopAudioRecording;
audioElement.onended = hideTextIndicatorOfAudioPlaying;
function handleDisplayingRecordingControlButtons() {
    microphoneButton.style.display = "none";
    stopRecordingButton.style.display="inline";
    audioTextTag.innerHTML="Recording start";
    handleElapsedRecordingTime();
}

function handleHidingRecordingControlButtons() {
    microphoneButton.style.display = "inline";
    stopRecordingButton.style.display="none";
    audioTextTag.innerHTML="Recording complted";
    clearInterval(elapsedTimeTimer);
}

function displayBrowserNotSupportedOverlay() {
    //overlay.classList.remove("hide");
}

function hideBrowserNotSupportedOverlay() {
    //overlay.classList.add("hide");
}

function createSourceForAudioElement() {
    let sourceElement = document.createElement("source");
    audioElement.appendChild(sourceElement);
    audioElementSource = sourceElement;
}

function displayTextIndicatorOfAudioPlaying() {
    //textIndicatorOfAudiPlaying.classList.remove("hide");
}

function hideTextIndicatorOfAudioPlaying() {
    //textIndicatorOfAudiPlaying.classList.add("hide");
}

var audioRecordStartTime;
var maximumRecordingTimeInHours = 1;
var elapsedTimeTimer;
function startAudioRecording() {
    console.log("Recording Audio...");
    let recorderAudioIsPlaying = !audioElement.paused; // the paused property tells whether the media element is paused or not
    console.log("paused?", !recorderAudioIsPlaying);
    if (recorderAudioIsPlaying) {
        audioElement.pause();
    }
    audioRecorder.start()
        .then(() => {
            audioRecordStartTime = new Date();
            handleDisplayingRecordingControlButtons();
        })
        .catch(error => {
            if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
                console.log("To record audio, use browsers like Chrome and Firefox.");
            }
            switch (error.name) {
                case 'AbortError':
                    console.log("An AbortError has occured.");
                    break;
                case 'NotAllowedError':
                    console.log("A NotAllowedError has occured. User might have denied permission.");
                    break;
                case 'NotFoundError':
                    console.log("A NotFoundError has occured.");
                    break;
                case 'NotReadableError':
                    console.log("A NotReadableError has occured.");
                    break;
                case 'SecurityError':
                    console.log("A SecurityError has occured.");
                    break;
                case 'TypeError':
                    console.log("A TypeError has occured.");
                    break;
                case 'InvalidStateError':
                    console.log("An InvalidStateError has occured.");
                    break;
                case 'UnknownError':
                    console.log("An UnknownError has occured.");
                    break;
                default:
                    console.log("An error occured with the error name " + error.name);
            };
        });
}

function stopAudioRecording() {
    console.log("Stopping Audio Recording...");
    audioRecorder.stop()
        .then(audioAsblob => {
            playAudio(audioAsblob);
            handleHidingRecordingControlButtons();
        })
        .catch(error => {
            switch (error.name) {
                case 'InvalidStateError':
                    console.log("An InvalidStateError has occured.");
                    break;
                default:
                    console.log("An error occured with the error name " + error.name);
            };
        });
}

function cancelAudioRecording() {
    console.log("Canceling audio...");
    audioRecorder.cancel();
    handleHidingRecordingControlButtons();
}

function playAudio(recorderAudioAsBlob) {
    let reader = new FileReader();
    reader.onload = (e) => {
        let base64URL = e.target.result;
        if (!audioElementSource)
            createSourceForAudioElement();
        audioElementSource.src = base64URL;
        audioElementSource.type = BlobType
        let BlobType = recorderAudioAsBlob.type.includes(";") ?
            recorderAudioAsBlob.type.substr(0, recorderAudioAsBlob.type.indexOf(';')) : recorderAudioAsBlob.type;
        console.log("Playing audio...");
    };
    reader.readAsDataURL(recorderAudioAsBlob);
}
function handleElapsedRecordingTime() {
    displayElapsedTimeDuringAudioRecording("00:00");
    elapsedTimeTimer = setInterval(() => {
        let elapsedTime = computeElapsedTime(audioRecordStartTime);
        displayElapsedTimeDuringAudioRecording(elapsedTime);
    }, 1000); //every second
}

function displayElapsedTimeDuringAudioRecording(elapsedTime) {
    elapsedTimeTag.innerHTML = elapsedTime;
    if (elapsedTimeReachedMaximumNumberOfHours(elapsedTime)) {
        stopAudioRecording();
    }
}

function elapsedTimeReachedMaximumNumberOfHours(elapsedTime) {
    let elapsedTimeSplitted = elapsedTime.split(":");
    let maximumRecordingTimeInHoursAsString = maximumRecordingTimeInHours < 10 ? "0" + maximumRecordingTimeInHours : maximumRecordingTimeInHours.toString();
    if (elapsedTimeSplitted.length === 3 && elapsedTimeSplitted[0] === maximumRecordingTimeInHoursAsString)
        return true;
    else
        return false;
}

function computeElapsedTime(startTime) {
    let endTime = new Date();
    let timeDiff = endTime - startTime;
    timeDiff = timeDiff / 1000;
    let seconds = Math.floor(timeDiff % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeDiff = Math.floor(timeDiff / 60);
    let minutes = timeDiff % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeDiff = Math.floor(timeDiff / 60);
    let hours = timeDiff % 24;
    timeDiff = Math.floor(timeDiff / 24);
    let days = timeDiff;
    let totalHours = hours + (days * 24);
    totalHours = totalHours < 10 ? "0" + totalHours : totalHours;
    if (totalHours === "00") {
        return minutes + ":" + seconds;
    } else {
        return totalHours + ":" + minutes + ":" + seconds;
    }
}