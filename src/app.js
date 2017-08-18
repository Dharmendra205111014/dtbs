require('jquery');
require('datatables.net');
require('datatables.net-bs');
require('datatables.net-select');
require('datatables.net-buttons');
require('datatables.net-buttons-bs');
require('datatables.net-buttons/js/buttons.colVis.js');

var table = $('#example').DataTable({
    buttons: [
        {
            text: 'Test Button',
            action: (e, dt) => {
                //
            },
            enabled: true,
            className: 'btn btn-default'
        },
        'colvis'
    ]
});

table.buttons().container()
    .appendTo( '#example_wrapper .col-sm-6:eq(0)' );
