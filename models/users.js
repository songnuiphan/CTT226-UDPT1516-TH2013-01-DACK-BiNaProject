// grab the things we need
var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    username: { type: String, default: '' },
    email: { type: String, default: '' },
    type: { type: Number, default: '' },
    name: { type: String, default: '' },
    position: { type: String, default: '' },
    sex: { type: Number, default: '' },
    address: { type: String, default: '' },
    phone: { type: String, default: '' },
    passport: { type: String, default: '' },
    nationality: { type: String, default: '' },
    provider: { type: String, default: '' },
    hashed_password: { type: String, default: '' },
    salt: { type: String, default: '' },
    authToken: { type: String, default: '' },
    facebook: {},
    google: {},
    created_at: Date,
    updated_at: Date
});

/**
 * Virtuals
 */
userSchema.virtual('userId').get(function() {
    return this._id;
});

userSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

/**
 * Methods
 */

userSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */

    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */

    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */

    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    },

    /**
     * Validation is not required if using OAuth
     */

    skipValidation: function() {
        return ~oAuthTypes.indexOf(this.provider);
    }
};

/**
 * Statics
 */

userSchema.statics = {

    /**
     * Load
     *
     * @param {Object} options
     * @param {Function} cb
     * @api private
     */

    load: function(options, cb) {
        options.select = options.select || 'name username';
        return this.findOne(options.criteria)
            .select(options.select)
            .exec(cb);
    }
};

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
