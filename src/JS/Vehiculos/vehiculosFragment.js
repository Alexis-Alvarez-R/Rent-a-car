export const vehiculoFragmento = document.createRange()
  .createContextualFragment(`
        <section class="card__vehiculo">
            <div class="card__top">
            <div class="vehiculo__data">
                <p class="data__modelo"></p>
                <p class="data__descripcion">
                </p>
            </div>
            <img
                src=""
                alt="toyota yaris"
                class="vehiculo__img"
            />
            </div>
            <hr />
            <div class="card__bottom">
            <div class="renta__data">
                <p class="renta__precio"></p>
                <p class="renta__fecha"></p>
            </div>

            <button class="renta__buttom">Ver oferta</button>
            </div>
        </section>
    `);
