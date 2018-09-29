import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public ApiUrl = '';
}

export const firebaseConfig = {
	fire: {
		apiKey: 'AIzaSyB9uQGCOG5dJHkqBa1EKZzureAtiFHc87o',
		authDomain: 'ayurvedicshopclue.firebaseapp.com',
		databaseURL: 'https://ayurvedicshopclue.firebaseio.com',
		projectId: 'ayurvedicshopclue',
		storageBucket: 'ayurvedicshopclue.appspot.com',
		messagingSenderId: '573949992004'
	}
};


