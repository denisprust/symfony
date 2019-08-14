const $ = require('jquery');
const Swal = require('sweetalert2');

Home = {
    init: function() {
        $(document).on('click', '#form-filter button[type=reset]', function (event) {
            event.preventDefault();
            $(this).closest('form').find('input,select').val('');
        })
    },
    hideAside: function(elem) {
        let aside = $('#aside-filters');
        let btn_filter = $('#btn-filter');

        aside.fadeOut();
        btn_filter.fadeIn();
    },
    showAside: function(elem) {
        let aside = $('#aside-filters');
        let btn_filter = $('#btn-filter');

        btn_filter.fadeOut();
        aside.fadeIn();
    },
    openModalVehicle: function(elem) {
        let params = {vehicle_id: $(elem).data('id')};
        $('#modal-vehicle').remove();
        Swal.fire({
            title: 'Carregando veículo...'
        });
        Swal.showLoading();

        $.post('/vehicles/get-modal', params, function (response) {
            $('body').append(response);
            $('#modal-vehicle').modal('show');
            Swal.close();
        })
    }
};

Home.init();