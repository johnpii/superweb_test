document.addEventListener('DOMContentLoaded', function () {
    const selfEmployedRadio = document.getElementById('selfEmployed');
    const legalEntityRadio = document.getElementById('legalEntity');
    const passportField = document.getElementById('passportField');

    function toggleLegalEntityFields(visible) {
        const fields = ['companyNameField', 'postalAddressField',
            'legalAddressField', 'kppField', 'ogrnField', 'basisField'];

        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.style.display = visible ? 'block' : 'none';

                const input = field.querySelector('input, textarea, select');
                if (input) {
                    if (visible) {
                        input.setAttribute('required', 'required');
                    } else {
                        input.removeAttribute('required');
                    }
                }
            }
        });

        passportField.style.display = visible ? 'none' : 'block';
        const passportTextarea = passportField.querySelector('textarea');
        if (passportTextarea) {
            if (!visible) {
                passportTextarea.setAttribute('required', 'required');
            } else {
                passportTextarea.removeAttribute('required');
            }
        }

        document.getElementById('contractForm').reportValidity();
    }

    toggleLegalEntityFields(legalEntityRadio.checked);

    selfEmployedRadio.addEventListener('change', function () {
        toggleLegalEntityFields(false); // При выборе "selfEmployed" скрываем поля юридического лица
    });

    legalEntityRadio.addEventListener('change', function () {
        toggleLegalEntityFields(true); // При выборе "legalEntity" показываем поля юридического лица
    });

    const form = document.getElementById('contractForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        setTimeout(function () {
            successModal.style.display = 'flex';
        }, 1000);
    });

    closeModal.addEventListener('click', function () {
        successModal.style.display = 'none';
    });
});
