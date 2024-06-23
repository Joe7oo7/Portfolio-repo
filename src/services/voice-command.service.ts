import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
declare const annyang: any;
declare const window: any;
@Injectable({
  providedIn: 'root',
})
export class VoiceCommandService {
  private retryCount = 0;
  private maxRetries = 3;
  private userInteracted = false;

  constructor(private router: Router, private ngZone: NgZone) {
    this.initializeVoice();
  }
  initializeVoice() {
    if (annyang) {
      const commands = {
        'open home': () => this.navigate('home'),
        home: () => this.navigate('home'),
        'open about': () => this.navigate('about'),
        about: () => this.navigate('about'),
        'open contact': () => this.navigate('contact'),
        contact: () => this.navigate('contact'),
        'open skills': () => this.navigate('skills'),
        skills: () => this.navigate('skills'),
        'open education': () => this.navigate('education'),
        education: () => this.navigate('education'),
        'scroll up': () => this.scroll('up'),
        'go up': () => this.scroll('up'),
        'scroll down': () => this.scroll('down'),
        'go down': () => this.scroll('down'),
      };
      annyang.addCommands(commands);

      annyang.addCallback('end', () => this.startListening());

      this.startListening();
    } else {
      console.warn('Speech recognition Not supported in this browser!');
    }
  }
  navigate(path: string) {
    this.speak(`navigate to ${path}`);
    this.ngZone.run(() => {
      this.router.navigate([path]);
    });
  }
  scroll(direction: string) {
    this.speak(`Scrolling ${direction}`);
    this.ngZone.run(() => {
      if (direction === 'up') {
        window.scrollBy(0, -window.innerHeight);
      } else if (direction === 'down') {
        window.scrollBy(0, window.innerHeight);
      }
    });
  }

  startListening() {
    if (annyang) {
      annyang.start({ continuous: true });
    }
  }
  stopListening() {
    if (annyang) {
      try {
        annyang.abort();
      } catch (error) {
        this.handleError(error);
      }
    }
  }
  speak(message: string) {
    const synth = window.speechSynthesis;
    if (synth && this.userInteracted) {
      try {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event.error);
          this.handleSpeakError(event);
          this.speak(
            'An error occurred while trying to speak. Please try again.'
          );
        };

        synth.speak(utterance);
      } catch (error) {
        this.handleError(error);
      }
    
    } else {
      console.warn('Speech synthesis not supported in this browser!');
    }
  }
  handleSpeakError(event: any) {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      console.warn(
        `Retrying to speak. Attempt ${this.retryCount} of ${this.maxRetries}`
      );
      if (this.userInteracted) {
        this.speak(
          'An error occurred while trying to speak. Please try again.'
        );
      }
    } else {
      console.error('Maximum retry attempts reached for speech synthesis.');
      this.retryCount = 0; // Reset the retry count after reaching max retries
    }
  }

  handleError(error: any) {
    console.error('Annyang error:', error);
    this.speak('An error occurred. Please try again.');
    this.initializeVoice();
  }
}
