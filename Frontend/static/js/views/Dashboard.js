import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    };

    async getHtml() {
        return `
            <h1>DASHBOARD</h1>
            <p>This is the dashboard</p>
            <a href="/posts" data-link>POSTS</a>
        `;
    }
};