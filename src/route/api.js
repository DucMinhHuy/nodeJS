import express from "express";
import ApiController from "../controller/ApiController";
let router = express.Router();
const initApiRouter = (app) => {
    router.get('/user', ApiController.getAllUers);
    router.post('/create', ApiController.creata);
    router.put('/update/:id', ApiController.update);
    router.delete('/delete/:id', ApiController.remove);
    return app.use('/api/v1', router)

}
export default initApiRouter;
