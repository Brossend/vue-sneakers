import {defineStore} from "pinia";
import {useLocalStorage} from "@vueuse/core";
import {ref} from "vue";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import router from "../../router/index.js";

export const useAuthStore = defineStore('auth', () => {
    const isAuth = useLocalStorage('auth', ref(false));
    const isRemember = useLocalStorage('remember', ref(false));
    const accessToken = useLocalStorage('accessToken', ref(''));
    const refreshToken = useLocalStorage('refreshToken', ref(''));

    const auth = getAuth();

    const signIn = async (email, password, remember) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                accessToken.value = userCredential.user?.accessToken;
                refreshToken.value = userCredential.user?.refreshToken;
                isAuth.value = true;
                isRemember.value = remember;

                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.error(errorCode);
                console.error(errorMessage);
            });
    };

    const signUp = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                accessToken.value = userCredential.user?.accessToken;
                isAuth.value = true;
                isRemember.value = true;

                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.error(errorCode);
                console.error(errorMessage);
            });
    };

    const logOut = () => {
        isAuth.value = false;
    };

    return {
        isAuth,
        accessToken,
        isRemember,
        signIn,
        signUp,
        logOut
    }
});