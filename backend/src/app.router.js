const authRouter = require('./auth/auth.router');
const usersRouter = require('./users/user.router');
const bankRouter = require('./bank/bank.router');
const mortgageCalc = require('./mortgageCalcs/mortgageCalc.router');
const appController = require('./app.controller');

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use('/users', usersRouter);
    app.use('/bank', bankRouter);
    app.use('/mortgage', mortgageCalc);

    app.get('/', appController.getHomePage);
    app.get('*', appController.notFound);
    app.post('*', appController.notFound);
    app.put('*', appController.notFound);
    app.patch('*', appController.notFound);
    app.delete('*', appController.notFound);

};
