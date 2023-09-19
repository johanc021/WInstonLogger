import passport from "passport";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../../utils.js";
import { SaveSessionCurrentDTO } from "../dto/sessionCurrent.dto.js";

class SessionsService {
    async register(req, res, next) {
        passport.authenticate('register', (err, user, info) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (!user) {
                return res.status(400).json({ error: info.message });
            }
            return res.json({ status: "success", message: "User Register" });
        })(req, res, next);
    }

    async login(req, res) {
        passport.authenticate('login', { passReqToCallback: true, session: false, failureRedirect: '/failLogin', failureMessage: true, })(req, res, async () => {
            const serialUser = {
                name: `${req.user.first_name} ${req.user.last_name}`,
                email: req.user.email,
                age: req.user.age,
                role: req.user.role
            }

            const token = jwt.sign(serialUser, SECRET_KEY, { expiresIn: "1h" })

            res.cookie('cookie', token, { maxAge: 360000000 }).send({ status: 'success', message: 'Inicio de sesión exitoso', payload: "OK" });
        });
    }

    async resetPassword(req, res) {
        passport.authenticate('resetPassword', { failureRedirect: '/failResetPassword' })(req, res, () => {
            res.send({ status: "success", message: "Contraseña restaurada" });
        });
    }

    async current(req, res) {
        try {
            passport.authenticate('current', { session: false })(req, res, () => {
                const sessionPayload = new SaveSessionCurrentDTO(req.user)
                res.json({ payload: sessionPayload });
            });
        } catch (error) {
            console.error('Error al obtener token:', error);
            res.status(404).json({ status: 'error', error: 'Recurso no encontrado' });
        }
    }

    async logout(req, res) {
        try {
            res.clearCookie('cookie');
            return res.status(200).json({ status: 'success', message: 'Sesión cerrada correctamente' });
        } catch (err) {
            console.error('Error al cerrar la sesión:', err);
            res.status(500).json({ status: 'error', error: 'Error al cerrar la sesión' });
        }
    }
}

export default new SessionsService();
