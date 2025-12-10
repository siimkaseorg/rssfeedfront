import router from "@/router";

export default {

    navigateToHomeView() {
        router.push({name: 'homeRoute'})
    },

    navigateToErrorView() {
        router.push({name: 'errorRoute'})
    },

}