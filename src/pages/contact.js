document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm')
    const confirmationMessage = document.getElementById('confirmationMessage')

    form.addEventListener('submit', function(event) {
        event.preventDefault()
        confirmationMessage.style.display = 'block'
        form.reset()
        setTimeout(() => {
            confirmationMessage.style.display = 'none'
        }, 3000)
    })
})


export default function about() {
    return `
    <main class="container">
        <h2 class="mb-4 lh-lg"> ¿Te gustó mi trabajo? <br><span class=text-warning text->Contáctame</span> y cuéntame que necesitas</h2>
    <form id="contactForm" class="p-4 col-12 col-md-10 col-lg-fluid mx-auto">        
    <div class="row">
        <div class="col-12 col-md-6 mb-3 mx-auto">
            <label for="contactName" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="contactName" placeholder="Jhon, Emma, Pedro ..." required>
        </div>
        <div class="col-12 col-md-6 mb-3 mx-auto">
            <label for="contactEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="contactEmail" placeholder="name@example.com" required>
        </div>
        <div class="col-12 col-md-6 mb-3 mx-auto">
            <label for="contactNumber" class="form-label">Teléfono</label>
            <input type="phone" class="form-control" id="contactNumber" placeholder="name@example.com">
        </div>
        <div class="col-12 col-md-6 mb-3 mx-auto">
            <label for="contactReason" class="form-label">Motivo</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Elija la opción más cercana</option>
                <option value="contactOfferWork">Ofrecer puesto de trabajo</option>
                <option value="contactFreelanceWork">Cotización de proyecto</option>
                <option value="contactMoreInfo">Más información</option>
            </select>
        </div>
        <div class="col-12 mb-3 mx-auto">
            <label for="contactDescription" class="form-label">Describa el motivo de contacto</label>
            <textarea class="form-control" id="contactDescription" rows="3"></textarea required>
        </div>
        <div class="col-1 mx-auto">
            <button class="btn btn-warning mx-auto">Enviar</button>
        </div>
    </div>
    </form>

    </main>
        <div id="confirmationMessage" class="alert alert-primary mt-3 text-center" style="display: none ; position: absolute; top: 45%; width: 100%">
            <span class="fs-3 ">Gracias por contactarte, pronto responderé.</span>
        </div>
    `;
}
