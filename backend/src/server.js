'use strict'

const app = require('./app');
const http = require('http');
const cors = require('cors');
const debug = require('debug');
const normalizePort = require('normalize-port');

const port = normalizePort(process.env.PORT || '3333');

app.set('port', port);
app.use(cors());

const server = http.createServer(app)
    .listen(port, () => { console.log(`listening on ${port}`) })
    .on('error', onError)
    .on('listening', onListening);


function onError(error) {
    if (error.syscall !== 'listem') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':

            console.error(bind + ' is alread in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    debug('Listening on ' + bind);
}
