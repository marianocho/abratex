document.addEventListener('DOMContentLoaded', () => {
    const elementosAnimados = document.querySelectorAll('.animar');

    const animarAoScroll = () => {
        elementosAnimados.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const alturaTela = window.innerHeight;

            if (rect.top < alturaTela - 100 && rect.bottom > 100) {
                el.classList.add('visivel');
            } else {
                el.classList.remove('visivel');
            }
        });
    };

    window.addEventListener('scroll', animarAoScroll);
    animarAoScroll(); // roda uma vez ao carregar
});
