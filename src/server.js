import {} from 'dotenv/config';
import app from 'app';
import debug from 'debug';

const serverLog = debug('app:server');

serverLog('Starting server...');

app.listen(process.env.PORT || 8080, () => {
    serverLog(`Server running on port ${process.env.PORT || 8080}.`);
});

export default app;
