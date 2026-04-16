import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://192.168.11.230:8080",
  realm: "est",
  clientId: "ent-client",
});

export default keycloak;