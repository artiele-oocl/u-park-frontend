class FakeAuth {

    isAuthenticated() {
        const userInfo = sessionStorage.getItem('u-park-user-information');
        if (!userInfo) {
            return null;
        }
        return JSON.parse(userInfo);
    }

    logMeOut() {
        sessionStorage.clear();
    }
}

export default new FakeAuth()