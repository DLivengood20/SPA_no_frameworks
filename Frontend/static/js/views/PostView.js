import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Article");
    };

    async getHtml() {
        return `
            <div id="post-view">
            <h1>Article ${this.params.id}</h1>
            <p>Article contents...</p>
            </div>
        `;
    }
};