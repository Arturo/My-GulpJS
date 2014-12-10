angular.module('App')
.factory('MyReactModelsList', [function () {
    return React.createClass({
        propTypes: {
            collection: React.PropTypes.array.isRequired
        },
        render: function() {
            var models = this.props.collection;
            var thead = React.DOM.thead({},
                    React.DOM.tr({},
                        React.DOM.td(null, 'rCC'),
                        React.DOM.td(null, 'rBrand'),
                        React.DOM.td(null, 'rCategory')
                    )
                );
            var tbody = React.DOM.tbody({},
                    models.map(function(row){
                        return React.DOM.tr({ key: 'factory-' + Math.random() },
                            React.DOM.td(null, row.commercial_code),
                            React.DOM.td(null, row.brand.name),
                            React.DOM.td(null, row.category.name)
                        );
                    })
                );

            return React.DOM.table({ className: 'table table-condensed' } , [thead, tbody]);
        }
    });
}])
.value('MyReactModelsList2', MyReactModelsList2);