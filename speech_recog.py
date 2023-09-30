import speech_recognition as sr
import moviepy.editor as mp

# Convert video to audio
clip = mp.VideoFileClip(r"video.mp4")
clip.audio.write_audiofile(r"converted.wav")

# Initialize the recognizer and audio file
r = sr.Recognizer()
audio = sr.AudioFile("converted.wav")

# Use try-except block for error handling
try:
    # Use context manager for audio file
    with audio as source:
        # Adjust for ambient noise before recording
        r.adjust_for_ambient_noise(source)
        # Record audio from the file
        audio_file = r.record(source)
        # Recognize the speech using Google Web Speech API
        result = r.recognize_google(
            audio_file, language='en-IN', show_all=True)
        # Print the recognized text
        print(result)

        # Export the result to a text file
        with open('recognized.txt', mode='w') as file:
            file.write("Recognized Speech:")
            file.write("\n")
            file.write(str(result))
            print("Exporting process completed!")

except sr.RequestError as e:
    print(
        "Could not request results from Google Speech Recognition service; {0}".format(e))
except sr.UnknownValueError:
    print("Google Speech Recognition could not understand audio")
