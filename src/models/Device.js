export class Device {
    static ACTIVE = 0;
    static DEACTIVATE = 1;
    static RINGING = 2;

    constructor({id, name, lat, lng, api_key, status, wifi}) {
        this.id = id;
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.api_key = api_key;
        this.status = status || 1;
    }
}
