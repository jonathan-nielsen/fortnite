import {} from 'dotenv/config';
import app from 'app';
import debug from 'debug';

const serverLog = debug('app:server');

serverLog('Starting server...');

app.listen(process.env.PORT, () => {
    serverLog(`Server running on port ${process.env.PORT}.`);
});

export default app;
