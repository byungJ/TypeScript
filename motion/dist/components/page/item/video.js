import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section>
        <div class="video__player">
            <iframe class="video__iframe">
    
            </iframe>
        </div>
        <h3 class="video__title"></h3>
    </section>`);
        const iframe = this.element.querySelector('.video__iframe');
        iframe.src = 'https://youtu.be/uQfUPEMVvOY'; // url -> videoId -> embed
        console.log(url);
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
}
