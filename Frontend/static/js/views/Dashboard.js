import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    };

    async getHtml() {
        return `
            <div id="dashboard">
            <link rel="stylesheet" href="/static/css/dashboard.css">
            <h1>DASHBOARD</h1>
            <p>This is the dashboard</p>
            <a href="/posts" data-link>POSTS</a>
            </div>
        `;
    }
};