var app = [
        'app/scripts/**/*.js'
    ],
    unit = ['test/unit/**/*_spec.js'],
    e2e = ['test/e2e/**/*_spec.js'],
    lib = [
        'node_modules/chai/chai.js',
        //Override jasmine expect
        'test/lib/chai-expect.js',
        'test/lib/chai-should.js'
    ],
    vendor = [
        "app/bower_components/jquery/dist/jquery.js",
        "app/bower_components/angular/angular.js",
        "app/bower_components/angular-mocks/angular-mocks.js",
        "app/bower_components/angular-resource/angular-resource.js",
        'app/bower_components/bootstrap/dist/js/bootstrap.js',
        'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'app/bower_components/angular-cookies/angular-cookies.js',
        "app/bower_components/angular-ui-router/release/angular-ui-router.js",
        "app/bower_components/angular-animate/angular-animate.js"
    ];
module.exports = {
    app: app,
    unit: unit,
    vendor: vendor,
    karma: vendor.concat(lib).concat(app).concat(unit)
};