import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    };

    async getHtml() {
        return `
            <div id="settings">
            <h1>SETTINGS</h1>
            <p>This is the settings container</p>
            </div>
        `;
    }
};