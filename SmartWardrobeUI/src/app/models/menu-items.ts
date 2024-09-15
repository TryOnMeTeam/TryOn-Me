export class MenuItems {
    icon!: string;
    label!: string;
    route!: string;

    constructor(icon: string, label: string, route: string) {
        this.label = label;
        this.icon = icon;
        this.route = route;
    }
}