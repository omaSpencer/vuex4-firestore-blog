import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAnCxmA1SwjBO5G76-YtUQuD-Xuqx81Zhs',
	authDomain: 'vuex-blog-with-firebase-auth.firebaseapp.com',
	projectId: 'vuex-blog-with-firebase-auth',
	storageBucket: 'vuex-blog-with-firebase-auth.appspot.com',
	messagingSenderId: '775241232859',
	appId: '1:775241232859:web:db48754677d6179c8737fe',
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
