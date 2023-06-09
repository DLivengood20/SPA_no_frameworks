import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    };

    async getHtml() {
        return `
            <div id="posts">
            <h1>POSTS</h1>
            <p>This is the post container</p>
            </div>
        `;
    }
};