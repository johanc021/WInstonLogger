import SessionsRepository from '../daos/repositories/session.repository.js';

class SessionsController {
    async register(req, res, next) {
        await SessionsRepository.register(req, res, next);
    }

    async login(req, res) {
        await SessionsRepository.login(req, res);
    }

    async resetPassword(req, res) {
        await SessionsRepository.resetPassword(req, res);
    }

    async logout(req, res) {
        await SessionsRepository.logout(req, res);
    }

    async current(req, res) {
        await SessionsRepository.current(req, res);
    }
}

export default new SessionsController();
