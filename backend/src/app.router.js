const authRouter = require('./auth/auth.router');
const usersRouter = require('./users/user.router');
const adRouter = require('./bank/bank.router');
const mortgageCalc = require('./mortgageCalcs/mortgageCalc.router');
const appController = require('./app.controller');

module.exports = (app) => {

    app.use('/auth', authRouter);
    app.use('/users', usersRouter);
    app.use('/ad ', adRouter);
    app.use('/mortgage', mortgageCalc);

    app.get('/', appController.getHomePage);
    app.get('*', appController.notFound);
    app.post('*', appController.notFound);
    app.put('*', appController.notFound);
    app.patch('*', appController.notFound);
    app.delete('*', appController.notFound);

};
