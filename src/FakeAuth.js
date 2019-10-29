class FakeAuth {

    isAuthenticated() {
        try {
            return JSON.parse(sessionStorage['u-park-user-information']);
        } catch {
            window.location.href = '/';
        }
    }

    logMeOut() {
        sessionStorage.clear();
    }
}

export default new FakeAuth()