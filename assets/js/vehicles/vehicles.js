const $ = require('jquery');
const Swal = require('sweetalert2');

Vehicles = {
    init: function () {
    },
    deleteVehicle: function (elem) {
        Swal.fire({
            title: 'Atenção!',
            text: 'Tem certeza de que deseja excluir este veículo?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim'
        }).then((result) => {
            if (result.value) {
                let params = {
                    vehicle_id: $(elem).data('id')
                };

                $.ajax({
                    url: '/vehicle/delete',
                    method: 'delete',
                    data: params,
                    beforeSend: function() {
                        Swal.fire({
                            title: 'Excluíndo veículo...'
                        });
                        Swal.showLoading();
                    },
                    success: function (response) {
                        if(response.success) {
                            Swal.fire('',response.message,'success').finally(function () {
                                Swal.fire({
                                    title: 'Carregando veículos...'
                                });
                                Swal.showLoading();
                                window.location.reload();
                            });
                        } else {
                            Swal.fire('Oops!',response.message,'error');
                        }
                    },
                    error: function (response) {
                        Swal.fire('Oops!','Ocorreu um erro ao excluir o carro','error');
                    }
                })
            }
        });


    },
    openModalVehicle: function () {
        $.ajax({
            url: '/vehicle/modal',
            method: 'post',
            beforeSend: function() {
                $('div#modal-vehicle-content').html('');
                Swal.fire({
                    title: 'Carregando Veículo...'
                });
                Swal.showLoading();
            },
            success: function (response) {
                $('div#modal-vehicle-content').html(response);
                let modal = $('#modal-vehicle');
                Vehicles.initMasks();
                modal.modal('show');
                Swal.close();
            },
            error: function (response) {
                Swal.fire('Oops!','Ocorreu um erro ao salvar o veículo','error');
            }
        });
    },
    clearInputsModal: function (modal) {
        modal.find('input,select').val('');
        var inputs = modal.find('input[required], select[required]');
        $(inputs).css('border', '1px solid #ced4da');
    },
    saveVehicle: function (elem) {
        var modal  = $(elem).closest('#modal-vehicle');
        let inputs = modal.find('input[required], select[required]');
        var count = 0;

        inputs.each(function (index, elem) {
            if(!$(elem).val()) {
                $(elem).css('border', '1px solid red');
                if(count === 0)
                    $(elem).focus();
                ++count;
            } else {
                $(elem).css('border', '1px solid #ced4da');
            }
        });

        if(count > 0) {
            Swal.fire(
                'Oops!',
                'Por favor, informe todos os campos obrigatórios.',
                'error'
            );
            return;
        }
        var params = $('form#form-vehicle').serialize();

        $.ajax({
            url: '/vehicle/post',
            method: 'post',
            data: params,
            beforeSend: function() {
                Swal.fire({
                    title: 'Salvando veículo...'
                });
                Swal.showLoading();
            },
            success: function (response) {
                if(response.success) {
                    Swal.fire('',response.message,'success').finally(function () {
                        Swal.fire({
                            title: 'Carregando veículos...'
                        });
                        Swal.showLoading();
                        window.location.reload();
                    });
                } else {
                    Swal.fire('Oops!',response.message,'error');
                }
            },
            error: function (response) {
                Swal.fire('Oops!','Ocorreu um erro ao salvar o veículo','error');
            }
        })
    },
    editVehicle: function (elem) {
        let params = {vehicle_id: $(elem).data('id')};

        $.ajax({
            url: '/vehicles/teste',
            method: 'post',
            data: params,
            beforeSend: function() {
                $('div#modal-vehicle-content').html('');

                Swal.fire({
                    title: 'Carregando veículo...'
                });
                Swal.showLoading();
            },
            success: function (response) {
                $('div#modal-vehicle-content').html(response);
                $('#modal-vehicle').modal('show');
                Swal.close();
                Vehicles.initMasks();
            }
        })
    },
    initMasks: function () {
        $('.money').mask('000.000.000.000.000,00', {reverse: true});
        $('[name=year],[name=model_year]').mask('0000');
    },

};
