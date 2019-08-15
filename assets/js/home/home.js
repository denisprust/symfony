const $ = require('jquery');
const Swal = require('sweetalert2');

Home = {
    init: function() {
        $(document).on('click', '#form-filter button[type=reset]', function (event) {
            event.preventDefault();
            $(this).closest('form').find('input,select').val('');
        });

        $(document).on('hidden.bs.modal', '#modal-contact', function () {
            $('#modal-vehicle').modal('show');
        });
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
    },
    openModalContact: function (elem) {
        let params = {
            user: $(elem).data('user')
        };
        $('#modal-contact').remove();
        Swal.fire({
            title: 'Carregando formulário de contato...'
        });
        Swal.showLoading();

        $.post('/vehicles/get-modal-contact', params, function (response) {
            $('#modal-vehicle').modal('hide');
            $('body').append(response);
            let modal = $('#modal-contact');
            modal.modal('show');
            Swal.close();
        })
    },
    enviarContato: function () {
        if(!$('#modal-contact #message').val()){
            Swal.fire('Atenção!', 'Informe uma mensagem', 'error');
            return;
        }
        $('#modal-contact, #modal-vehicle').modal('hide');
        Swal.fire('', 'Contato enviado com sucesso!', 'success');
    }
};

Home.init();