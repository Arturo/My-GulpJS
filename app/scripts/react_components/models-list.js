var MyReactModelsList2 = React.createClass({
    propTypes: {
        models: React.PropTypes.array.isRequired
    },
    render: function() {
        var models = this.props.models,
            thead = React.DOM.thead({},
                React.DOM.tr({},
                    React.DOM.td(null, 'rCC'),
                    React.DOM.td(null, 'rBrand'),
                    React.DOM.td(null, 'rCategory')
                )
            ),
            tbody = React.DOM.tbody({},
                models.map(function(row){
                    return React.DOM.tr({ key: 'component-' + Math.random() },
                        React.DOM.td(null, row.commercial_code),
                        React.DOM.td(null, row.brand.name),
                        React.DOM.td(null, row.category.name)
                    );
                })
            );

        return React.DOM.table({ className: 'table table-condensed' } , [thead, tbody]);
    }
});