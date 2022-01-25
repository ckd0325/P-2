const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    passReqToCallback: true
}, function(id, password, done) {
    User.findOne({ user_id: id }, function(err, user) {
        console.log(`${id}   ${password}`)
            //DB 연결 실패 등의 에러
        if (err) { return done(err); }
        //username 자체가 DB에 없을 때
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        //username은 맞지만 비밀번호가 틀릴 때
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        //인증 성공
        return done(null, user);
    });
}));

passport.serializeUser(function(user, done) {
    console.log('serializeUser() 호출됨.');
    console.log(user);

    done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('deserializeUser() 호출됨.');
    console.log(user);

    done(null, user);
})

module.exports = passport