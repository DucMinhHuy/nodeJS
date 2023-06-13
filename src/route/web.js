import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();
const initWebRouter = (app) => {

    router.get('/', homeController.getHomepage)
    router.get('/about', homeController.getAbout)
    router.get('/detail/user/:id', homeController.getDetail)
    router.post('/create', homeController.create)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/editUser/:id', homeController.updateUser)
    router.post('/update', homeController.update)
    return app.use('/', router)
}
export default initWebRouter;