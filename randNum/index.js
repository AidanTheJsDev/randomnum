function defaults(settings) {
        var settings = settings || {}
        var minimum = settings.minimum
        var maximum = settings.maximum
        var integer = settings.integer || true
        if(minimum == null && maximum == null) {
            minimum = 0
            maximum = 1
        } 

        if(maximum < minimum) throw new typeError('Your maximum must be bigger than your minimum')
        return {
            minimum: minimum,
            maximum: maximum,
            integer: integer
        }
    }
    
    function randNum(settings) {
        settings = defaults(settings)
        if(settings.maximum === settings.minimum) return settings.minimum
        var r = Math.random() * (settings.maximum - settings.minimum + Number(!!settings.integer)) + settings.minimum
        return settings.integer ? Math.floor(r) : r
    }
    
    module.exports.defaults = defaults
    module.exports = randNum