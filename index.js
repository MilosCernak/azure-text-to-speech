const { SpeechSynthesisOutputFormat, SpeechConfig, AudioConfig, SpeechSynthesizer } = require("microsoft-cognitiveservices-speech-sdk");

function synthesizeSpeech() {    
    //replace "YourSubscriptionKey" and "YourServiceRegion" with your azure key and region
    //e.g. const speechConfig = SpeechConfig.fromSubscription("29f3f317abe376fd3b2a9b773112646d", "westeurope");
    const speechConfig = SpeechConfig.fromSubscription("YourSubscriptionKey", "YourServiceRegion");
    speechConfig.speechSynthesisOutputFormat = SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3;
    const audioConfig = AudioConfig.fromAudioFileOutput("output.mp3");

    const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
    synthesizer.speakTextAsync(
        "A simple test to write to a file.",
        result => {
            if (result) {
                console.log(JSON.stringify(result));
            }
            synthesizer.close();
        },
        error => {
            console.log(error);
            synthesizer.close();
        });
}

synthesizeSpeech();