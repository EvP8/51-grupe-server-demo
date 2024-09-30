import { PageTemplate } from "./PageTemplate.js";

export class PageHome extends PageTemplate {
    main() {
        return `
            <main>
                <h1>Home page</h1>
                <section class="counter">
                    <button class="btn" type="button">-</button>
                    <span class="value">0</span>
                    <button class="btn" type="button">+</button>
                </section>
                <section class="gallery">
                    <img src="/img/car/1.jpg" alt="Hero car 1" />
                    <img src="/img/car/2.jpg" alt="Hero car 2" />
                    <img src="/img/car/3.jpg" alt="Hero car 3" />
                    <img src="/img/car/4.jpg" alt="Hero car 4" />
                    <img src="/img/car/5.jpg" alt="Hero car 5" />
                    <img src="/img/car/6.jpg" alt="Hero car 6" />
                    <img src="/img/car/7.jpg" alt="Hero car 7" />
                    <img src="/img/car/8.jpg" alt="Hero car 8" />
                    <img src="/img/car/9.jpg" alt="Hero car 9" />
                    <img src="/img/car/10.jpg" alt="Hero car 10" />
                    <img src="/img/car/11.jpg" alt="Hero car 11" />
                    <img src="/img/car/12.jpg" alt="Hero car 12" />
                    <img src="/img/car/13.jpg" alt="Hero car 13" />
                    <img src="/img/car/14.jpg" alt="Hero car 14" />
                    <img src="/img/car/15.jpg" alt="Hero car 15" />
                    <img src="/img/car/16.jpg" alt="Hero car 16" />
                    <img src="/img/car/17.jpg" alt="Hero car 17" />
                    <img src="/img/car/18.jpg" alt="Hero car 18" />
                    <img src="/img/car/19.jpg" alt="Hero car 19" />
                    <img src="/img/car/20.jpg" alt="Hero car 20" />
                    
                </section>
            </main>`;
    }
}