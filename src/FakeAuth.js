class FakeAuth {

    isAuthenticated() {
        try {
            let userInformation = JSON.parse(sessionStorage['u-park-user-information']);
            return userInformation;
        } catch {
            window.location.href = '/';
        }
    }

    logMeOut() {
        sessionStorage.clear();
    }
}

export default new FakeAuth()