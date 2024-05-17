
import { Server } from "./presentation/server";



(() => {
    main();
})();

async function main() {
    //levantar base de datos


    //levantar servidor
    const server = new Server();
    server.start();
}
