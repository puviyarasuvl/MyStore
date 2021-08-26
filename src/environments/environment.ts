import auth from '../../auth_config.json';

let domain = auth.domain;
let clientId = auth.clientId;

export const environment = {
    production: false,
    auth: {
        domain,
        clientId,
        redirectUri: window.location.origin,
    },
};
