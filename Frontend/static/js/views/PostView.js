import { getPost } from "../HttpHandler.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Article " + params.id);
    };

    async getHtml() {
        const response = await getPost(this.params.id);

        return `
                <div id="article">
                <h1>Article ${this.params.id}</h1>
                <p>Article#: ${response}</p>
                </div>
                `;
    }
};