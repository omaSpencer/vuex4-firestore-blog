import { createStore } from 'vuex';
import { auth } from '../firebase/config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const store = createStore({
	state: {
		user: null,
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
			console.log('user state changed:', state.user);
		},
	},
	actions: {
		async signup(context, { email, password }) {
			console.log('signup action');
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (user) {
				context.commit('setUser', user);
			} else {
				throw new Error('Could not complete signup');
			}
		},
		async login(context, { email, password }) {
			console.log('login action');

			const { user } = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (user) {
				context.commit('setUser', user);
			} else {
				throw new Error('Could not complete login');
			}
		},
	},
});

export default store;
