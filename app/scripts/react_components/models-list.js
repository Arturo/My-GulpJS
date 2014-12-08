var ModelsList = React.createClass({
    displayName: 'ModelsList',
    render: function() {

        var thead = React.DOM.thead({},
                React.DOM.tr({},
                    React.DOM.td(null, 'rCC'),
                    React.DOM.td(null, 'rBrand'),
                    React.DOM.td(null, 'rCategory')
                )
            );
        var tbody = React.DOM.tbody({},
                this.props.data.map(function(row){
                    return React.DOM.tr({},
                        React.DOM.td(null, row.commercial_code),
                        React.DOM.td(null, row.brand.name),
                        React.DOM.td(null, row.category.name)
                    );
                })
            );

        return React.DOM.table({ className: 'table table-condensed' } , [thead, tbody]);
    }
});