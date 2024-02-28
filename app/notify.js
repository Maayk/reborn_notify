$(document).ready(function () {
    window.addEventListener("message", function (event) {
        const randomid = Math.floor(Math.random() * 10000);
        const tempo = event.data.tempo;
        const html = `
            <div id="notification" class="achievement-container ${randomid}">
                <div class="achievement">
                    <div class="ball one ${randomid}"></div>
                    <div class="ball two ${randomid}"></div>
                    <div class="ball three ${randomid}">
                        <div class="achievement-message">
                            <p class="message">${event.data.titulo}</p>
                            <p style="margin-top: -13px" class="message">${event.data.mensagem}</p>
                        </div>
                    </div>
                    <div class="ball four"><i class="fas ${event.data.tipo}"></i></div>
                </div>
            </div>`;

        $(html).hide().appendTo(".notify-container").fadeIn(0);
        $(`.ball, .achievement-container`).addClass('active');

        setTimeout(function () {
            $(`.${randomid}`).removeClass('active');
            setTimeout(function () {
                $(`.${randomid}`).fadeOut(500, function () {
                    $(this).remove();
                });
            }, 1500);
        }, tempo);
    });
});
